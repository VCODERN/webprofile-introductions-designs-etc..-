"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login functionality here
    console.log('Logging in with:', studentName, studentId, password);
  };

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-orange-200 flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-lg p-8 bg-gradient-to-br from-yellow-100 to-orange-300 rounded-2xl shadow-xl border-4 border-solid border-yellow-400 relative"
        data-aos="fade-up"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-brown-800">Library Login</h2>
          <p className="text-gray-600 mt-2">Please enter your details to log in</p>
        </div>

        {/* Book Icon & Design */}
        <div className="absolute top-4 left-4 text-yellow-500 text-5xl">
          📚
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Student Name Input */}
          <div className="space-y-2">
            <label htmlFor="studentName" className="block text-gray-800 font-medium">Student Name</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            />
          </div>

          {/* Student ID Input */}
          <div className="space-y-2">
            <label htmlFor="studentId" className="block text-gray-800 font-medium">Student ID</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter your student ID"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-800 font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            />
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Log in
            </motion.button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">New Student? <a href="#" className="text-teal-500">Register here</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
