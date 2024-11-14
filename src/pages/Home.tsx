import React from 'react';
import { Building2, Lightbulb, Award, Handshake } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="text-center transform hover:scale-105 transition-all duration-300">
        <div className="relative inline-block">
          <Building2 className="mx-auto h-20 w-20 text-blue-600 animate-pulse" />
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-30 animate-pulse"></div>
        </div>
        <h1 className="mt-6 text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Welcome to ABC India
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Your Trusted Business Partner in Innovation and Excellence
        </p>
      </div>
      
      {/* Features Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Innovation Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-6">
            <Lightbulb className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">Innovation</h2>
          <p className="text-gray-600 text-center leading-relaxed">
            Leading the way in technological advancement with cutting-edge solutions
          </p>
        </div>

        {/* Excellence Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-6">
            <Award className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">Excellence</h2>
          <p className="text-gray-600 text-center leading-relaxed">
            Committed to delivering the highest quality in every project we undertake
          </p>
        </div>

        {/* Partnership Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mx-auto mb-6">
            <Handshake className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">Partnership</h2>
          <p className="text-gray-600 text-center leading-relaxed">
            Building lasting relationships with our clients through trust and collaboration
          </p>
        </div>
      </div>

      {/* Additional Banner */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-blue-100 mb-6">Join us in shaping the future of technology</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default Home;