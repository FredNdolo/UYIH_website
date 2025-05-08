// File: src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border rounded p-2" />
        <input type="email" placeholder="Your Email" className="w-full border rounded p-2" />
        <textarea placeholder="Your Message" className="w-full border rounded p-2 h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}