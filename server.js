// Import required modules
import express from 'express';          // Express framework for creating the server
import nodemailer from 'nodemailer';    // Nodemailer for sending emails
import cors from 'cors';                // CORS to manage cross-origin requests
import bodyParser from 'body-parser';   // Body-parser to parse JSON requests
import dotenv from 'dotenv';            // Dotenv to load environment variables

// Configure dotenv to load .env file
dotenv.config();

// Log email credentials to verify they are loaded correctly
console.log('Loaded Email Credentials:', process.env.EMAIL_USER, process.env.EMAIL_PASS);

// Initialize the Express application
const app = express();

// Apply CORS to only allow requests from a specific origin (the frontend)
app.use(cors({ origin: 'http://localhost:5173' })); // Change this origin if using a different port
app.use(bodyParser.json());                         // Parse incoming JSON requests

// Configure the email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',         // Gmail SMTP server
  port: 465,                      // Port for SSL
  secure: true,                   // True for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Gmail user from environment variables
    pass: process.env.EMAIL_PASS, // Gmail password from environment variables
  },
  logger: true,                   // Enable logging for debugging
  debug: true,                    // Show debug output for troubleshooting
});

// Define POST route for sending emails
app.post('/send-email', (req, res) => {
  // Destructure name, email, and message from the request body
  const { name, email, message } = req.body;

  // Configure email options
  const mailOptions = {
    from: email,                           // Sender's email (user's input)
    to: 'yourbakeryemail@example.com',     // Your email where the message will be sent
    subject: `New Contact Form Submission from ${name} - ${new Date().toLocaleString()}`, // Email subject
    text: message,                         // Email body text
  };

  // Send email using transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Log and respond with error if email fails to send
      console.error('Error sending email:', error);
      res.status(500).send('Email failed to send.');
    } else {
      // Log and respond with success if email is sent
      console.log(`Email sent successfully: ${info.response}`);
      res.status(200).send('Email sent successfully!');
    }
  });
});

// Start the server on port 3001
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
