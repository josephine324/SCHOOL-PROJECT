


// src/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mutesijosephine324@gmail.com', // Your Gmail address
    pass: 'mejg wwpu ywsg uyem', // App Password from Gmail
  },
});

// Middleware to validate email payload
function validateEmailPayload(req, res, next) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  // Simple email format check
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }
  next();
}

// Handle the form submission with validation
app.post('/send-email', validateEmailPayload, (req, res) => {
  const { name, email, message } = req.body;

  // Prepare the email content
  const mailOptions = {
    from: `${name} <${email}>`, // Use the user's email as the sender
    to: 'j.mutesi@alustudent.com', // Your email address where you want to receive the emails
    replyTo: email, // Set the reply-to address to the user's email
    subject: `Message from ${name} <${email}>`,
    text: `You have received a new message from ${name} <${email}>:\n\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  // Send the email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email error:', error); // Log the detailed error for debugging
      return res.status(500).json({ error: 'Failed to send message.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

