import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="max-w-screen-2xl pt-16 md:px-20 dark:bg-slate-700 dark:text-white">
      <Navbar />

      <div className="contact py-10 px-4 md:px-0">
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        <p className="text-lg leading-relaxed mb-8 text-center">
          We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out to us.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <input type="text" placeholder="Your Name" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
          </div>
          <div className="mb-6">
            <input type="email" placeholder="Your Email" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
          </div>
          <div className="mb-6">
            <textarea placeholder="Your Message" rows="5" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
