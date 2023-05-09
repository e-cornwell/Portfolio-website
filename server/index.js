require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join('build')));

app.get('/*', function (req, res){
    res.sendFile(path.join('build', 'index.html'));
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a transporter object using Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: subject,
    html: `<h1>${subject}</h1><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  // Send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log(email, subject, name, message)  
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
