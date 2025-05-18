import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from 'lucide-react';
import { FaAngleLeft, FaAngleRight, FaRegHeart } from "react-icons/fa";
import Pagination from "./subComponents/Pagination";

const categories = [
  "All Channels",
  "Props",
  "Game Art",
  "Character Animation",
  "VFX for Film, TV & Animation",
  "Unreal Engine",
  "Architectural Visualization",
  "Insta",
];

const images = [
  { src: "/country1.png", title: "Practice Sculpt", madeBy: "Aiden Blake" },
  {
    src: "/scifi.png",
    title: "Mountain Medieval Environment",
    madeBy: "Lila Monroe"
  },
  { src: "/fairy1.png", title: "Military Vehicle", madeBy: "Jasper Flynn" },
  { src: "/country2.png", title: "Secret Level", madeBy: "Zoe Carter" },
  { src: "/fairy2.png", title: "Explorer", madeBy: "Miles Bennett" },
  { src: "/horror.png", title: "Sci-Fi Character", madeBy: "Isla Navarro" },
  { src: "/superhero1.png", title: "Mechanical Design", madeBy: "Rowan Pierce" },
  { src: "/princess.png", title: "Cinematic Scene", madeBy: "Tessa Quinn" },
  { src: "/superhero.png", title: "Jet Fighter", madeBy: "Leo Armstrong" },
  { src: "/fyp-image.PNG", title: "Creature Concept", madeBy: "Sienna Clarke" },
  { src: "/thriller.png", title: "Jet Fighter", madeBy: "Lila Monroe" },
  { src: "/fairy3.png", title: "Creature Concept", madeBy: "Aiden Blake" },
];

const Community = () => {
  const categoriesRef = useRef(null);
  const footerTriggerRef = useRef(null);
  const [showNav, setShowNav] = useState(true);

  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = 300;
      categoriesRef.current.scrollTo({
        left:
          categoriesRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (footerTriggerRef.current) {
      observer.observe(footerTriggerRef.current);
    }

    return () => {
      if (footerTriggerRef.current) {
        observer.unobserve(footerTriggerRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-[#191f30] text-white">
      {/* Categories with Arrows */}
      <div className="relative px-4 py-8">
        <div className="flex items-center">
          <button
            onClick={() => scrollCategories("left")}
            className="absolute left-4 z-10 text-2xl text-cyan-500 p-2"
          >
            <FaAngleLeft/>
          </button>

          <div
            ref={categoriesRef}
            className="flex space-x-4 overflow-x-auto mx-14"
            style={{
              scrollbarWidth: "none" /* For Firefox */,
              msOverflowStyle: "none" /* For Internet Explorer */,
            }}
          >
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="inline-flex bg-[#ffffff05] px-6 py-2 rounded-full hover:bg-cyan-500 flex-shrink-0 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollCategories("right")}
            className="absolute right-4 z-10 text-2xl text-cyan-500 p-2"
          >
            <FaAngleRight/>
          </button>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold p-6 pb-12"><span>Community</span> Stories</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 px-4 pb-20">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="relative bg-[#ffffff05] rounded overflow-hidden group hover:scale-105 transition-transform duration-300"
          >

            {/* Eye Icon for Preview */}
            <button
              className="absolute top-2 right-2 z-10 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition"
              onClick={() => previewImage(img.src)} // optional: replace with actual preview logic
              title="Preview"
            >
              <Eye size={16} />
            </button>

            {/* Image */}
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover transition-opacity duration-500"
            />

            {/* Hover Title Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {/* MadeBy for Preview */}
              <button
                className="absolute top-2 left-2 z-10 text-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition"
                onClick={() => previewImage(img.src)}
                title="Our User"
              >
                <span className="text-md text-pretty">Story By: </span>{img.madeBy}
              </button>
              <p className="text-white text-sm text-center px-2">{img.title}</p>

              <button
                className="absolute top-2 right-10 z-10 text-white bg-cyan-500 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition"
                onClick={() => previewImage(img.src)} // optional: replace with actual preview logic
                title="Add To Favourites"
              >
                <FaRegHeart size={14} />
              </button>

            </div>
          </motion.div>
        ))}
      </div>

      <div ref={footerTriggerRef} className="w-full flex justify-center">
        <Pagination/>
      </div>

      {/* Bottom Navigation */}
      {showNav && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 z-50 transition-opacity duration-300">
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-full shadow-md flex justify-center space-x-6 py-2 px-4">
            <button className="px-6 py-2 rounded-full hover:bg-cyan-700 text-white transition-colors">
              Community
            </button>
            <button className="px-6 py-2 rounded-full hover:bg-cyan-700 text-white transition-colors">
              Trending
            </button>
            <button className="px-6 py-2 rounded-full hover:bg-cyan-700 text-white transition-colors">
              Latest
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
