const express = require('express');
const app = express();
const port = 3001; // Choose a port number for your server

// Define a route to handle sending emails
app.post('/send-email', (req, res) => {
  // Email sending logic goes here
  // Replace the placeholders with my email service provider's settings
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: 'your_smtp_host',
    port: 587,
    secure: false,
    auth: {
      user: 'your_email',
      pass: 'your_password',
    },
  });

  const mailOptions = {
    from: 'your_email',
    to: 'recipient_email',
    subject: 'Test Email',
    text: 'This is a test email sent from the backend server.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

app.get('/example',(req,res)=>{
    res.send("this is a get request")
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});