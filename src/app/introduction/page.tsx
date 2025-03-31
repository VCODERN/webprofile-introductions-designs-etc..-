"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import { SiSharp, SiCplusplus } from "react-icons/si";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#252525] overflow-hidden">

    
     {/* 🔹 Full-Screen Profile Section */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-md shadow-xl border border-gray-700 rounded-3xl p-10"
>
  {/* 🐍 Enhanced Snakes */}
  <motion.svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[
      { d: "M-50 150 Q 150 50, 300 150 T 650 150", delay: 0 },
      { d: "M-80 180 Q 180 70, 350 180 T 700 180", delay: 1 },
      { d: "M-100 220 Q 220 100, 400 220 T 750 220", delay: 2 },
      { d: "M-120 260 Q 250 130, 450 260 T 800 260", delay: 3 },
    ].map((snake, index) => (
      <motion.path
        key={index}
        d={snake.d}
        stroke={index % 2 === 0 ? "#00FF00" : "#FF00FF"}
        strokeWidth={isMobile ? "1.5" : "3"}
        fill="none"
        strokeLinecap="round"
        strokeDasharray="350"
        strokeDashoffset="350"
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          delay: snake.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </motion.svg>

  {/* 🖼 Profile Image */}
  <img src="/me.jpg" alt="Profile" className="w-64 h-64 rounded-full border-4 border-gray-500 shadow-lg" />

  {/* 📝 Profile Name & Role */}
  <h1 className="mt-6 text-6xl font-bold text-white">V1NC3</h1>
  <p className="text-gray-400 text-2xl mt-2">Gamer | Web Developer | UI/UX </p>


    {/* ⬇️ Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
        onClick={() => {
          const nextSection = document.getElementById("next-section");
          if (nextSection) {
            window.scrollTo({
              top: nextSection.offsetTop,
              behavior: "smooth",
            });
          }
        }}
      >
        <p className="text-gray-500 text-xs mb-1 tracking-wide">Scroll Down</p>
        <motion.div
          className="w-6 h-6 border-b-2 border-r-2 border-gray-500 rotate-45"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{
            borderColor: "#00FFCC",
            filter: "drop-shadow(0px 0px 8px #00FFCC)",
            transition: { duration: 0.3 },
          }}
        />
      </motion.div>

</motion.div>


      {/* 🔹 Scrollable Content Below */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        <div id="next-section" className="h-screen bg-gray-900 flex items-center justify-center">
        </div>

  {/* Left Section (Roles, Programming Languages, Typewriter) */}
  <div className="flex flex-col gap-8 w-full lg:w-1/2">
    {/* 🔥 Role Widget */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="bg-black/40 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl border mt-10 border-gray-700"
    >
      <h2 className="text-3xl font-semibold text-white ">Roles</h2>
      <p className="text-gray-300 text-xl mt-3">Gamer 🎮 | Developer 💻 | UI/UX Designer 🎨</p>
    </motion.div>

    {/* 🔹 Programming Languages Widget */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-black/40 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-700"
    >
      <h2 className="text-white text-3xl font-semibold mb-6 text-center">
        Programming Languages
      </h2>

      {/* ✅ Grid for Languages */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {[
          { name: "C#", icon: <SiSharp className="text-[#239120]" /> },
          { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
          { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
          { name: "Java", icon: <FaJava className="text-[#007396]" /> },
          { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
          { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
          { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
          { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
        ].map((lang, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-black/30 rounded-xl p-4 border border-gray-600 shadow-lg text-white text-2xl mx-auto"
          >
            {lang.icon}
            <span className="text-sm mt-2 text-center">{lang.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* 📝 Typewriter Widget */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-700 text-center"
    >
      <Typewriter
        options={{
          strings: [
            "Welcome to my digital world.",
            "Where security meets innovation.",
            "Explore my world of development, cybersecurity, and design.",
          ],
          autoStart: true,
          delay: 50,
          deleteSpeed: 25,
          cursor: "|",
          loop: true,
        }}
      />
    </motion.div>
  </div>

  {/* Right Section (Website Designs & Arduino Projects) */}
  <div className="flex flex-col gap-8 w-full lg:w-1/2">
    {/* 🔹 Website Designs Showcase */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="bg-black/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-gray-700"
    >
      <h2 className="text-white text-3xl font-semibold text-center mb-4">
        Website Designs
      </h2>
      <iframe
        src="/WebsiteDesigns"
        className="w-full h-[500px] rounded-lg shadow-lg border border-gray-600"
      />
    </motion.div>

    {/* 🔹 Arduino Projects Showcase */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
      className="bg-black/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-gray-700"
    >
      <h2 className="text-white text-3xl font-semibold text-center mb-4">
        Arduino Projects
      </h2>
      <iframe
        src="/ArduinoProjects"
        className="w-full h-[500px] rounded-lg shadow-lg border border-gray-600"
      />
    </motion.div>
  </div>
</div>

    </div>
  );
}
