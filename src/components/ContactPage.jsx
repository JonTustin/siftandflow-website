// src/components/ContactPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Your message has been sent!');
    } catch (error) {
      console.error('Error sending email', error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <section className="bg-background text-foreground min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-chomsky text-center underline mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-darkGray text-lightGray w-full p-2 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-darkGray text-lightGray w-full p-2 rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-darkGray text-lightGray w-full p-2 rounded-md"
          rows="5"
          required
        />
        <button
          type="submit"
          className="bg-foreground text-background p-2 px-4 rounded-md font-playfair hover:bg-lightGray transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
