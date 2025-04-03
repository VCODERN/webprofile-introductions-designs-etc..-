"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between login and register

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      console.log('Registering new student:', studentName, studentId, password);
    } else {
      console.log('Logging in with:', studentName, studentId, password);
    }
  };

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
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
        {/* Title and Description */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800">{isRegistering ? 'Library Registration' : 'Library Login'}</h2>
          <p className="text-gray-600 mt-2">{isRegistering ? 'Please fill out the form to register' : 'Please enter your details to log in'}</p>
        </motion.div>

        {/* Book Icon & Design */}
        <div className="absolute top-4 left-4 text-yellow-500 text-5xl">
          📚
        </div>

        {/* Form with transition effect */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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

          {/* Submit Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {isRegistering ? 'Register' : 'Log in'}
            </motion.button>
          </div>
        </motion.form>

        {/* Toggle Between Login/Registration */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <p className="text-sm text-gray-600">
            {isRegistering ? 'Already a student? ' : 'New student? '}
            <a href="#" onClick={toggleForm} className="text-teal-500">
              {isRegistering ? 'Log in here' : 'Register here'}
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
