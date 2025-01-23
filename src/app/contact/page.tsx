
"use client";
import React, { useState } from "react";
import TopBar from "../components/navbar";
import Header from "../components/header";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");

    // Clear form and error
    setFormData({ name: "", email: "", message: "" });
    setError("");
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <>
      <TopBar/>
      <Header/>
      {/* Header Section */}
      <header className="text-center py-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-left pl-20">Contact Us</h1>
        <p className="text-sm text-gray-600 mt-2 text-left pl-20">Home / Pages / Contact</p>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Information About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Learn more about our services and how we can help. We’re always
              here to answer your questions and provide the best solutions for
              your needs.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Way</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <li className="flex items-center">
                <span className="w-10 h-10 flex items-center justify-center bg-blue-800 text-white rounded-full mr-4">
                  📞
                </span>
                <div>
                  <h3 className="font-medium">Tel: 877-67-88-99</h3>
                  <p className="text-gray-600">E-mail: shop@store.com</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded-full mr-4">
                  📍
                </span>
                <div>
                  <h3 className="font-medium">20 Margaret St, London</h3>
                  <p className="text-gray-600">Great Britain, 3NM98-LK</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Feel free to drop us a line or send us an email. We’d love to hear
              from you and will respond as quickly as possible.
            </p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Type Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex items-center justify-center">
            <img
              src="/contact.jpg"
              alt="Contact Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </main>
      </>
    </div>
  );
};

export default Contact;
