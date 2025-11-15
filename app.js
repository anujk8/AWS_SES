// npm install @sendgrid/mail
const { SESClient, SendRawEmailCommand } = require('@aws-sdk/client-ses')
const nodemailer = require('nodemailer')
const fs = require("fs");
const path = require("path");
const sgMail = require("@sendgrid/mail");
const constants = require("./constants");
const templates = require("./template");
const customerData = require("./customerData");

// Set your SendGrid API key
// basepath = "/Users/shivamangrish/Downloads/Interim Orders/cid.pdf"
sgMail.setApiKey(constants.API_KEY);

const sesClient = new SESClient({
    region: constants.AWS_REGION,
    credentials: {
        accessKeyId: constants.AWS_ACCESS_KEY_ID,
        secretAccessKey: constants.AWS_SECRET_ACCESS_KEY
    }
})

// Load the email template (with full styled HTML header)

// Replace placeholders with actual data
function fillTemplate(data) {
    const obj = templates[data.template_name];
    return templates[data.template_name].body.replace(
        /{{(.*?)}}/g,
        (_, key) => data[key.trim()] || ""
    );
}


function prepareAttachmentsSES(filePaths = []) {
    return filePaths.map((filePath) => {
        const fileData = fs.readFileSync(filePath);
        return {
            content: fileData,
            filename: path.basename(filePath),
        };
    });
}

async function sendEmailWithAttachmentSES(to, data, filePath) {
    try {
        const htmlBody = fillTemplate(data);
        const attachment = fs.readFileSync(filePath)

        const msg = {
            from: {
                name: constants.FROM_NAME,
                address: constants.FROM,
            },
            to: data.to,
            cc: data.cc ? (Array.isArray(data.cc) ? data.cc : [data.cc]) : [],
            replyTo: constants.REPLY_TO,
            subject: templates[data.template_name].subject,
            html: htmlBody,
            text: htmlBody.replace(/<[^>]+>/g, ""), // plain text fallback
            attachments: [
                ...prepareAttachmentsSES(data?.attachments?.split(",")),
                {
                    content: attachment,
                    filename: path.basename(filePath),
                },
            ],
        };

        const rawEmail = await getRawMail(msg)

        // --- Send via AWS SES ---
        const command = new SendRawEmailCommand({
            RawMessage: { Data: rawEmail },
        });
        await sesClient.send(command);

        // const response = await sgMail.send(command);
        console.log(`✅ Email sent successfully! customer id: ${data.CID}`);
    } catch (error) {
        console.error("❌ Error sending email for CID:  ", data.CID, error.message || error);
    }
}

async function getRawMail(msg) {
    const transporter = nodemailer.createTransport({
        streamTransport: true,
        newline: "unix",
        buffer: true,
    });

    return new Promise((resolve, reject) => {
        transporter.sendMail(msg, (err, info) => {
            if (err) return reject(err);
            resolve(info.message);
        });
    })
}

// Example usage:
async function init() {
    for (const data of customerData) {
        try {
            // Add formatted date to each data object
            data.date = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            const filePath = `${constants.BASE_PATH}/${data.CID}.pdf`;
            console.log(`Looking for file at: ${filePath}`);

            await sendEmailWithAttachmentSES(data.to, data, filePath);
        } catch (error) {
            console.error(`❌ Failed to send email for CID ${data.CID}:, error`);
        }
    }

    console.log("✅ All emails processed!");
}

init();
