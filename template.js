const templates = {
  arbitration_template: {
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>AM LEGAL & CO.</title>

<!-- Elegant fonts for law firm -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Merriweather&display=swap" rel="stylesheet">

<style>
  body {
    font-family: 'Merriweather', 'Times New Roman', serif;
    color: #333;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }

  .letterhead {
    text-align: center;
    padding: 40px 20px 20px;
    border-bottom: 2px solid #9ab0c5;
  }

  .logo-symbol {
    font-size: 40px;
    color: #496b89;
    margin-bottom: 5px;
  }

  .firm-name {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #2d4f6b;
  }

  .tagline {
    font-family: 'Merriweather', serif;
    font-size: 18px;
    color: #555;
    font-style: italic;
    margin-top: 4px;
  }

  .address {
    font-size: 15px;
    color: #666;
    margin-top: 3px;
  }

  .via-email {
    text-align: center;
    font-weight: bold;
    margin: 25px auto;
    font-size: 18px;
    color: #000;
    text-transform: uppercase;
  }

  .recipient-box {
    border: 1px solid #9ab0c5;
    padding: 15px 25px;
    margin: 0 auto 25px;
    width: 70%;
    background-color: #f9fbfd;
    border-radius: 6px;
    font-size: 16px;
    line-height: 1.6;
  }

  .recipient-box .cid {
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    color: #2b3e50;
    margin-bottom: 8px;
  }

  .content {
    padding: 0 60px 30px;
    font-size: 16px;
    line-height: 1.6;
  }

  .date-line {
    text-align: right;
    font-size: 16px;
    margin-bottom: 20px;
    color: #333;
    font-weight:bold;
  }

  .content p {
    margin-bottom: 15px;
  }

  .content strong {
    color: #2b3e50;
  }

  .subject-line {
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 15px;
  }

  .footer-line {
    text-align: center;
    color: #777;
    font-size: 12px;
    margin-top: 25px;
    border-top: 1px solid #ccc;
    padding-top: 8px;
  }

  .unsubscribe {
    text-align: center;
    margin-top: 10px;
    font-size: 13px;
  }

  .unsubscribe a {
    color: #496b89;
    text-decoration: none;
  }

  .unsubscribe a:hover {
    text-decoration: underline;
  }

  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>
</head>
<body>

<div class="letterhead">
  <div class="logo-symbol"><i class="fas fa-scale-balanced"></i></div>
  <div class="firm-name">AM LEGAL & CO.</div>
  <div class="tagline">(Advocates & Legal Consultants)</div>
  <div class="address">B-30, Sector-52, Gurugram, Gurugram</div>
</div>

<div class="via-email">VIA EMAIL</div>

<div class="recipient-box">
  <div class="cid">CID – {{CID}}</div>
  <div>To,<br>{{Name}}<br>Resident at: {{address}}</div>
</div>

<div class="content">
  <div class="date-line">Date: {{date}}</div>

  <p class="subject-line">
    Subject: Passing of Section 17 Order by the Learned Sole Arbitrator for freezing of your Bank Accounts
  </p>

  <p>Dear Sir/Madam,</p>

  <p>This is to inform you that pursuant to your continuous default in repayment of the loan availed by you under Customer ID: {{CID}} from our Client, <strong>Akara Capital Advisors Private Limited</strong>, having its registered office at 60, Second Floor, Arjun Nagar, Kotla Mubarakpur, New Delhi – 110003, and despite repeated reminders and ample opportunities extended to you to regularize your loan account, no payment has been received towards the outstanding dues.</p>

  <p>Consequently, arbitration proceedings were initiated against you under the provisions of the <strong>Arbitration and Conciliation Act, 1996</strong>, before the Learned Arbitrator, who, after considering the facts and material placed on record and submissions, passed an Order under <strong>Section 17</strong> of the Arbitration and Conciliation Act, 1996, directing the freezing of your bank accounts towards securing the amount due and payable to Akara Capital Advisors Private Limited.</p>

  <p>You are hereby called upon to make full payment of your outstanding dues amounting to <strong>Rs. {{Foreclosure}}</strong> within seven (07) working days of receipt of this Communication Letter. Upon receipt of the payment and confirmation of payment thereof, steps shall be initiated to seek withdrawal of the freeze order / modification of the Section 17 order from the Learned Arbitrator, subject to the discretion of the Hon’ble Tribunal.</p>

  <p>Without prejudice to the above, in case you wish to amicably resolve the matter and avoid further coercive legal actions, you may contact our Client at <strong>Phone:</strong> 0124-6981200 or <strong>Email:</strong> legal.resolution@stashfin.com within the stipulated period.</p>

  <p>We urge you to treat this communication with utmost seriousness and take immediate steps to discharge your liability to prevent further legal consequences.</p>

  <p>Further, in case you are facing issues in making payment or have concerns pertaining to a mobile number change, please follow the procedures below from the <strong>Stashfin Mobile App</strong> (accessible through Google Play Store and Apple Store). The details for each issue are stated as under:</p>

  <p><strong>Payment Methods:</strong></p>
  <ol>
    <li><strong>Stashfin App:</strong> Home Page → Click <em>Pay</em> Button</li>
    <li><strong>Other Methods:</strong>
      <ul>
        <li><strong>PhonePe:</strong> Go to <em>Loan & Repayments</em> → Select <em>Stashfin</em></li>
        <li><strong>Google Pay:</strong> Search <em>Stashfin Bills Payment</em></li>
        <li><strong>Paytm:</strong> Loan EMI Payment → Search <em>Stashfin</em></li>
      </ul>
    </li>
    <li><strong>Customer Care:</strong> You can contact customer care at <strong>0124-6981200</strong> for payment guidance or to receive a payment link.</li>
  </ol>

  <p><strong>For Mobile Number Change:</strong></p>
  <ul>
    <li>Visit <strong>Stashfin App</strong> → Click on <em>More Option</em> → <em>Add Details</em> → <em>Modify Mobile Number</em></li>
    <li>If you have lost your registered mobile number, please contact customer care via your registered email ID at <strong>grievance.officer@stashfin.com</strong>. Our support team will guide you further.</li>
  </ul>

  <p><strong>Note:</strong> The Stashfin Application can be accessed through <em>Google Play Store</em> (Android) and <em>Apple App Store</em> (iOS).</p>

  <p>Yours sincerely,</p>

  <p><strong>Advocate for Akara Capital Advisors Private Limited</strong></p>

  <p>Sincerely,<br>
  <strong>AM Legal and Co.</strong><br>
  Advocates<br>
  [Enclosures: Copy of Section 17 Order passed by the Learned Arbitrator and Email received from Branch Manager]</p>
</div>


<div class="footer-line">
  © AM LEGAL & CO. | Advocates & Legal Consultants | New Delhi | Gurugram
</div>

<div class="unsubscribe">
  If you wish to stop receiving such notices via email, please
  <a href="https://u57235822.ct.sendgrid.net/asm/unsubscribe">unsubscribe here</a>.
</div>

</body>
</html>
`,
    subject: "Passing of Section 17 Order by the Learned Sole Arbitrator for freezing of your Bank Accounts"
  },
 
  }

module.exports = templates
