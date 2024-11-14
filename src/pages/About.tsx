import React from 'react';
import { Users, Rocket, Target, Heart, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <Users className="mx-auto h-20 w-20 text-blue-600 relative z-10 transform hover:scale-110 transition-transform duration-300" />
        </div>
        <h1 className="mt-6 text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover our journey of innovation and excellence
        </p>
      </div>

      <div className="grid gap-12">
        {/* Our Story Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <Rocket className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Our Story</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Founded in 2024, ABC India has been at the forefront of technological innovation,
            providing cutting-edge solutions to businesses across the globe. Our commitment
            to excellence and customer satisfaction has made us a trusted partner for
            organizations of all sizes.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-indigo-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-indigo-600 pb-2">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            To empower businesses through innovative technology solutions while maintaining
            the highest standards of quality and customer service. We strive to create
            lasting partnerships with our clients and contribute to their success.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              { icon: Rocket, text: "Innovation in everything we do", color: "text-blue-600" },
              { icon: Shield, text: "Commitment to excellence", color: "text-indigo-600" },
              { icon: Heart, text: "Customer-first approach", color: "text-purple-600" },
              { icon: Shield, text: "Integrity and transparency", color: "text-green-600" },
              { icon: TrendingUp, text: "Continuous improvement", color: "text-red-600" },
            ].map((value, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <value.icon className={`h-6 w-6 ${value.color} mr-3`} />
                <span className="text-gray-700 font-medium">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { number: "10+", label: "Years Experience" },
          { number: "500+", label: "Projects Completed" },
          { number: "100+", label: "Team Members" },
          { number: "50+", label: "Countries Served" },
        ].map((stat, index) => (
          <div 
            key={index}
            className="text-center p-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-3xl font-bold mb-2">{stat.number}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;