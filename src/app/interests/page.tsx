"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const interests = [
  {
    id: "poppy-playtime",
    title: "Poppy Playtime Lore",
    image: "/poppy.jpg",
    description: `Poppy Playtime is a psychological horror game that has captivated players 
    with its eerie setting, intricate puzzles, and mysterious lore. The game revolves around 
    an abandoned toy factory where players uncover hidden secrets about the company’s dark past. 
    From Huggy Wuggy to Poppy herself, each character plays a crucial role in the unfolding mystery. 
    The lore dives deep into corporate experiments, supernatural elements, and chilling encounters 
    that keep fans theorizing and speculating about future chapters.`,
    link: "https://poppy-playtime.fandom.com/wiki/Poppy_Playtime",
  },
  {
    id: "indie-games",
    title: "Indie Games",
    image: "/indie.jpg",
    description: `Indie games have redefined the gaming industry, bringing innovation and fresh experiences 
    that big-budget titles often lack. From critically acclaimed hits like Hollow Knight and Celeste to 
    narrative-driven masterpieces like Undertale and Outer Wilds, indie games push boundaries in gameplay, 
    storytelling, and artistic expression. Developers take creative risks, leading to unique mechanics, 
    emotionally charged stories, and captivating worlds that leave lasting impressions.`,
    link: "https://www.pcgamesn.com/indie/best-indie-games",
  },
  {
    id: "cthulhu-mythos",
    title: "Cthulhu Mythos",
    image: "/cthulu.jpg",
    description: `The Cthulhu Mythos, created by H.P. Lovecraft, is a literary universe of cosmic horror 
    where ancient, god-like entities lurk beyond human comprehension. These beings, such as Cthulhu, 
    Nyarlathotep, and Azathoth, embody the insignificance of humanity in the grand scale of existence. 
    Lovecraft's stories introduce forbidden knowledge, eerie cults, and protagonists driven to madness 
    as they uncover horrifying truths. The mythos continues to influence horror, literature, games, and films.`,
    link: "https://www.goodreads.com/book/show/30308694-the-complete-cthulhu-mythos-tales",
  },
  {
    id: "space",
    title: "Space",
    image: "/space.jpg",
    description: `The universe is a vast and mysterious place, filled with celestial wonders waiting 
    to be explored. From the formation of galaxies and black holes to the discovery of exoplanets 
    that could harbor life, space exploration has led to groundbreaking discoveries. Missions like 
    the James Webb Telescope and Mars rovers continue to push the boundaries of our understanding. 
    Space isn’t just about science; it’s a source of inspiration, fueling dreams of interstellar travel 
    and humanity’s place in the cosmos.`,
    link: "https://www.nasa.gov/",
  },
  {
    id: "tech-gadgets",
    title: "Tech & Gadgets",
    image: "/tech.png",
    description: `Technology is evolving at a rapid pace, bringing cutting-edge gadgets that redefine 
    how we live and interact with the world. From AI-powered devices and smart home automation to 
    next-gen gaming consoles and wearable tech, innovation is at the forefront of modern life. 
    Breakthroughs in virtual reality, augmented reality, and quantum computing promise a future 
    where the impossible becomes reality. Keeping up with tech trends means staying ahead of the curve 
    in a world driven by digital transformation.`,
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-10 py-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center mb-14"
      >
        My Interests
      </motion.h1>

      {/* Horizontal Scrollable Topic Cards */}
      <div className="flex gap-8 overflow-x-auto scrollbar-hide px-6 py-4 mb-16">
        {interests.map((interest) => (
          <motion.div
            key={interest.id}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="flex-shrink-0 w-80 cursor-pointer"
            onClick={() => handleCardClick(interest.id)}
          >
            <img
              src={interest.image}
              alt={interest.title}
              className="w-full h-52 object-cover rounded-xl shadow-xl"
            />
            <h2 className="mt-4 text-2xl font-semibold text-center">
              {interest.title}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Detailed Content Sections */}
      <div className="flex flex-col items-center space-y-24">
        {interests.map((interest) => (
          <section
            key={interest.id}
            id={interest.id}
            data-aos="fade-up"
            className="bg-gray-800 px-12 py-14 rounded-2xl shadow-xl max-w-5xl"
          >
            <h2 className="text-4xl font-bold mb-6">{interest.title}</h2>
            <p className="text-lg text-gray-300 leading-loose mb-6">
              {interest.description}
            </p>
            <a
              href={interest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-red-400 text-lg font-semibold hover:underline"
            >
              Learn more →
            </a>
          </section>
        ))}
      </div>
    </div>
  );
}
