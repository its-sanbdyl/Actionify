const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); // to serve form.html

// Replace with your actual email and password (for testing, use a test account or OAuth)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sandesh.bdyl.2060@gmail.com',        // replace with your email
    pass: 'hnbo nxkv lvrm subx',           // use app password if using Gmail
  },
});

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'sandesh.bdyl.2060@gmail.com', // where you want to receive the message
    subject: `Message from ${name}`,
    text: `You got a message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email send error:', error);
      return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});