'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setStatus('Message sent successfully!');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-2xl rounded-lg border border-gray-100 animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
        Contact Velocity Gym
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
        Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-200 ease-in-out placeholder-gray-400 text-gray-900"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-200 ease-in-out placeholder-gray-400 text-gray-900"
            placeholder="john.doe@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-200 ease-in-out resize-y placeholder-gray-400 text-gray-900"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-lg text-lg font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
          disabled={status === 'Submitting...'}
        >
          {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status && (
        <div
          className={`mt-6 p-4 rounded-md text-center text-sm font-medium ${
            status.includes('success')
              ? 'bg-green-100 text-green-800 border border-green-300'
              : status.includes('Failed')
              ? 'bg-red-100 text-red-800 border border-red-300'
              : 'bg-blue-100 text-blue-800 border border-blue-300'
          }`}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
