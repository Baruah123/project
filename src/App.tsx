import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard/*" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">About ABC India</h3>
                  <p className="text-gray-300 text-sm leading-relaxed hover:text-white transition-colors">
                    Leading technology solutions provider committed to excellence and innovation.
                  </p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Info</h3>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p className="flex items-center hover:text-white transition-colors cursor-pointer">
                      <span className="mr-2">📧</span>
                      contact@abcindia.com
                    </p>
                    <p className="flex items-center hover:text-white transition-colors cursor-pointer">
                      <span className="mr-2">📱</span>
                      +91 1234567890
                    </p>
                    <p className="flex items-center hover:text-white transition-colors cursor-pointer">
                      <span className="mr-2">📍</span>
                      Bangalore, India
                    </p>
                  </div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-400 cursor-pointer">Quick Links</h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                      <span className="border-b border-transparent hover:border-blue-400 pb-1">
                        Privacy Policy
                      </span>
                    </li>
                    <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                      <span className="border-b border-transparent hover:border-blue-400 pb-1">
                        Terms of Service
                      </span>
                    </li>
                    <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                      <span className="border-b border-transparent hover:border-blue-400 pb-1">
                        Support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                  <p className="hover:text-white transition-colors mb-2 md:mb-0 cursor-pointer">
                    © {new Date().getFullYear()} ABC India. All rights reserved.
                  </p>
                  <p className="text-center md:text-right hover:text-blue-400 transition-colors cursor-pointer">
                    Practical Test Case | ADTUPTC14112024 | John Doe | +1234567890
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;