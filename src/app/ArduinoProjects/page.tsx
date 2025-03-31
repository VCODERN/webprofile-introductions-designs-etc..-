"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaYoutube, FaGithub } from "react-icons/fa";

const ArduinoProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // AOS Init
  }, []);

  const projects = [
    {
      title: "Blinking LED",
      description: "A simple project to blink an LED using Arduino.",
      videoLink: "https://www.youtube.com/watch?v=example1",
      codeLink: "https://github.com/your-repo/blinking-led",
    },
    {
      title: "Temperature Sensor",
      description: "Read temperature data using a DHT11 sensor.",
      videoLink: "https://www.youtube.com/watch?v=example2",
      codeLink: "https://github.com/your-repo/temperature-sensor",
    },
    {
      title: "Obstacle Avoiding Robot",
      description: "A robot that avoids obstacles using an ultrasonic sensor.",
      videoLink: "https://www.youtube.com/watch?v=example3",
      codeLink: "https://github.com/your-repo/obstacle-avoiding-robot",
    },
    {
      title: "Servo Motor Control",
      description: "Control a servo motor using a potentiometer.",
      videoLink: "https://www.youtube.com/watch?v=example4",
      codeLink: "https://github.com/your-repo/servo-motor-control",
    },
    {
      title: "Light Following Robot",
      description: "A robot that follows light using photoresistors.",
      videoLink: "https://www.youtube.com/watch?v=example5",
      codeLink: "https://github.com/your-repo/light-following-robot",
    },
    {
      title: "LCD Display",
      description: "Display text on an LCD screen using Arduino.",
      videoLink: "https://www.youtube.com/watch?v=example6",
      codeLink: "https://github.com/your-repo/lcd-display",
    },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 🔹 Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl text-white font-bold text-center mb-8"
      >
        Arduino Projects
      </motion.h1>

      {/* 🔹 Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform"
          >
            <h2 className="text-xl text-white font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>

            {/* 🔗 Buttons with Icons */}
            <div className="mt-4 flex gap-4">
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-all duration-300"
              >
                <FaYoutube size={22} /> Watch Video
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaGithub size={22} /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArduinoProjects;
