<div align="center">

# ✉️ AWS SES Email Sender – Node.js  
### _Send HTML Emails, Attachments, CC, Templates using AWS SES_

---

🚀 **Fast** • 🔐 **Secure** • 📎 **Attachment Support** • ⚙️ **Auto-Template Fill**

</div>

---

## 📌 Overview

This project allows you to send emails using **AWS SES** with:

- 📩 HTML Email Templates  
- 📎 Attachments (PDF per Customer ID)  
- 👥 CC Support  
- 🔐 AWS Credential Support  
- 🔄 Auto-loop Email Sending  
- 🧩 Template & Customer Mapping  

---

## 📁 Project Structure

project/
│── customerData.json
│── constants.js
│── templates.js
│── app.js
│── README.md
│── .env
│── package.json


---

## 🔧 Installation

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
npm install

🔐 Environment Variables
Create a .env file:

AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=ap-south-1

FROM_EMAIL=no-reply@yourdomain.com
FROM_NAME=Your Project Name
REPLY_TO=support@yourdomain.com

BASE_PATH="C:/Users/.../Interim Orders"

▶️ Run the Script
node app.js

✉️ Email Sending Flow
Load Customer Data → Build Template → Fetch Attachment (PDF) →  
SES SendRawEmail → Log Success/Failure

🧩 Main Execution Code

async function init() {
  for (let data of customerData) {
    data.date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    await sendEmailWithAttachmentSES(
      data.to,
      data,
      `${constants.BASE_PATH}/${data.CID}.pdf`
    );
  }
}

init();

⚠️ Common Errors
❌ ENOENT: no such file

Your PDF path is wrong.

✔ Fix BASE_PATH in .env
✔ Ensure PDF exists with filename: {CID}.pdf

🤝 Contributing

Pull requests are welcome!
Please open an issue before major changes.

<div align="center">
⭐ If you found this useful, give the repo a star!

Made with ❤️ by Anuj

</div> ```
