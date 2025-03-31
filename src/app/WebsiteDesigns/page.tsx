"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const designs = [
  { title: "Portfolio Website", img: "/oia-uia.gif" },
  { title: "E-Commerce Store", img: "/deadlock-valve.gif" },
  { title: "Blog Platform", img: "/luhmao-little-meow.gif" },
  { title: "Business Landing Page", img: "/midori-wildcat.gif" },
  { title: "Dashboard UI", img: "/rainbow-cat.gif" },
  { title: "Agency Website", img: "/mac-and-cheese-cat.gif" },
];

const WebsiteDesigns: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 🔹 Header */}
      <header className="bg-blue-600 py-10 shadow-lg">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Website Designs Showcase
        </motion.h1>
      </header>

      {/* 🔹 Design Showcase */}
      <section className="py-16 px-6" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={design.img}
                alt={design.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{design.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <p>&copy; 2025 Website Designs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WebsiteDesigns;
