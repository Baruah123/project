import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <Mail className="mx-auto h-20 w-20 text-blue-400 relative z-10 transform hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="mt-6 text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 
            transform hover:-translate-y-1 border border-gray-700">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-blue-400" />
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    className="pl-10 block w-full rounded-xl bg-gray-700 border-gray-600 text-white py-3 px-4 
                      focus:border-blue-400 focus:ring-blue-400 focus:bg-gray-600 transition-all duration-200
                      placeholder-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    className="pl-10 block w-full rounded-xl bg-gray-700 border-gray-600 text-white py-3 px-4 
                      focus:border-blue-400 focus:ring-blue-400 focus:bg-gray-600 transition-all duration-200
                      placeholder-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full rounded-xl bg-gray-700 border-gray-600 text-white py-3 px-4 
                    focus:border-blue-400 focus:ring-blue-400 focus:bg-gray-600 transition-all duration-200
                    placeholder-gray-400"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl
                  hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-1 transition-all duration-200
                  flex items-center justify-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white
            border border-gray-700">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Phone className="h-8 w-8 text-blue-400" />
              Contact Information
            </h2>
            <div className="mt-8 space-y-8">
              <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-200 cursor-pointer">
                <div className="bg-gray-700/50 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-200">Address</h3>
                  <p className="text-gray-400">123 Business Street, Tech Park, Bangalore, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-200 cursor-pointer">
                <div className="bg-gray-700/50 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-200">Phone</h3>
                  <p className="text-gray-400">+91 1234567890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-200 cursor-pointer">
                <div className="bg-gray-700/50 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-200">Email</h3>
                  <p className="text-gray-400">contact@abcindia.com</p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="mt-12 bg-gray-700/30 p-4 rounded-xl backdrop-blur-sm">
              <h3 className="text-lg font-medium mb-4 text-gray-200">Find us on map</h3>
              <div className="aspect-video bg-gray-700/50 rounded-lg hover:bg-gray-700/70 
                transition-colors duration-200 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;