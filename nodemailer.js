let nodemailer = require("nodemailer");

let transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "omondihills02@gmail.com", pass: "reset-1000" },
});

let mailOptions = {
  from: "omondihills02@gmail.com",
  to: "omondihills02@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transpoter.sendMail(mailOptions, (err, info) => {
  if (err) console.log(err);
  else console.log("Email sent: " + info.response);
});
