"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const interests = [
  {
    id: "poppy-playtime",
    title: "Poppy Playtime Lore",
    image: "/images/poppy-playtime.jpg",
    description: "Dive into the mysterious lore of Poppy Playtime, exploring its characters, storylines, and hidden secrets.",
    link: "https://poppy-playtime.fandom.com/wiki/Poppy_Playtime",
  },
  {
    id: "indie-games",
    title: "Indie Games",
    image: "/images/indie-games.jpg",
    description: "Discover the world of indie games, highlighting unique gameplay mechanics, storytelling, and artistic designs.",
    link: "https://www.pcgamesn.com/indie/best-indie-games",
  },
  {
    id: "cthulhu-mythos",
    title: "Cthulhu Mythos",
    image: "/images/cthulhu-mythos.jpg",
    description: "Explore the cosmic horror universe of H.P. Lovecraft, delving into its deities, stories, and cultural impact.",
    link: "https://www.goodreads.com/book/show/30308694-the-complete-cthulhu-mythos-tales",
  },
  {
    id: "space",
    title: "Space",
    image: "/images/space.jpg",
    description: "Embark on a journey through the cosmos, covering astronomy, space exploration, and the mysteries of the universe.",
    link: "https://www.nasa.gov/",
  },
  {
    id: "tech-gadgets",
    title: "Tech & Gadgets",
    image: "/images/tech-gadgets.jpg",
    description: "Stay updated with the latest in technology and gadgets, featuring reviews, trends, and innovations.",
    link: "https://www.theverge.com/tech",
  },
];

export default function InterestsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleCardClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8"
      >
        My Interests
      </motion.h1>

      {/* Horizontal Scrollable Topic Cards */}
      <div className="flex overflow-x-auto space-x-6 pb-4 mb-10">
        {interests.map((interest) => (
          <motion.div
            key={interest.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-64 cursor-pointer"
            onClick={() => handleCardClick(interest.id)}
          >
            <img
              src={interest.image}
              alt={interest.title}
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
            <h2 className="mt-2 text-xl font-semibold text-center">
              {interest.title}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Detailed Content Sections */}
      <div className="space-y-16">
        {interests.map((interest) => (
          <section
            key={interest.id}
            id={interest.id}
            data-aos="fade-up"
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">{interest.title}</h2>
            <p className="text-lg text-gray-300 mb-4">{interest.description}</p>
            <a
              href={interest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline"
            >
              Learn more
            </a>
          </section>
        ))}
      </div>
    </div>
  );
}
