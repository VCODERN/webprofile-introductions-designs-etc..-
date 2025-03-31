"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Install dependencies before using:
// npm install framer-motion aos

const LoginPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-orange-200"
            data-aos="fade-in"
        >
            <motion.div
                className="w-full max-w-md p-8 rounded-lg shadow-lg"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white
                    backdropFilter: "blur(10px)", // Blur effect
                }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1
                    className="text-3xl font-bold text-center text-gray-800 mb-6"
                    data-aos="fade-down"
                >
                    Welcome 
                </h1>
                <form>
                    <div className="mb-4" data-aos="fade-right">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <motion.input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="Enter your email"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="mb-4" data-aos="fade-left">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <motion.input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="Enter your password"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Login
                    </motion.button>
                </form>
                <p
                    className="mt-4 text-sm text-center text-gray-600"
                    data-aos="fade-up"
                >
                    Don't have an account?{" "}
                    <a href="#" className="text-pink-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;