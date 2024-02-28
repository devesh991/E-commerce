// src/components/ContactUs.js

import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig.jsx'; // Adjust the path accordingly

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form fields (add your validation logic here)
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmissionStatus('error');
        return;
      }

      // Form validation passed, submit form data to Firebase Firestore
      const docRef = await addDoc(collection(fireDB, 'contactForms'), formData);

      console.log('Document written with ID:', docRef.id);

      // Form submitted successfully
      setSubmissionStatus('success');
    } catch (error) {
      // Handle any unexpected errors
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

        {/* Display submission status message */}
        {submissionStatus === 'success' && (
          <div className="bg-green-200 p-3 mb-4 rounded text-green-800">
            Form submitted successfully!
          </div>
        )}

        {submissionStatus === 'error' && (
          <div className="bg-red-200 p-3 mb-4 rounded text-red-800">
            Please fill in all the required fields.
          </div>
        )}

        {/* Contact Info */}
        {/* ... (unchanged) */}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full mb-4 p-2 border rounded resize-none"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
