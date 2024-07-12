// utils/notification.js
const nodemailer = require('nodemailer');

exports.sendEmail = async (email, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    text: text
  };

  await transporter.sendMail(mailOptions);
};
