import React, { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import DropDown from "./DropDown";

const stylesList = ["horror.png", "scifi.png", "superhero.png", "fairy1.png", "princess.png"];
const genreOptions = ["Fantasy", "Horror", "Thriller", "Action", "FairyTale"];

const GenerateStory = ({ isOpen, closeModal }) => {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [narration, setNarration] = useState(true);
  const [visibility, setVisibility] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [genre, setGenre] = useState(genreOptions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % stylesList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Story generated!");
    }, 3000);
  };

  const visibleStyles = stylesList.slice(carouselIndex, carouselIndex + 6).length < 6
    ? [...stylesList.slice(carouselIndex), ...stylesList.slice(0, 6 - stylesList.slice(carouselIndex).length)]
    : stylesList.slice(carouselIndex, carouselIndex + 6);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 w-[90%] h-[500px] max-w-5xl rounded-2xl p-8 shadow-lg flex flex-col lg:flex-row gap-6 relative">

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-400"
          onClick={closeModal}
        >
          <FaTimes size={20} />
        </button>

        {/* Left Panel */}
        <div className="flex-1 text-white overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">Create Your Story</h2>
          <label className="block font-medium text-sm mb-1">Your Prompt</label>
          <textarea
            placeholder="Enter your story idea or prompt..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-14 p-4 rounded-lg bg-gray-800 text-white focus:outline-none resize-none mb-4"
          />

          <div className="flex items-center gap-6 mb-6">
            {/* Genre */}
            <DropDown genre={genre} setGenre={setGenre} genres={genreOptions} />

            {/* Narration Switch */}
            <div className="flex flex-col w-full">
              <label className="block font-medium text-sm mb-1">Narration</label>

              <div
                onClick={() => setNarration(!narration)}
                className="w-full h-12 border-2 border-solid rounded-2xl relative cursor-pointer bg-white overflow-hidden"
              >
                {/* sliding pill */}
                <div
                  className={`absolute inset-y-0 left-0 w-1/2 bg-cyan-600 rounded-2xl transition-transform duration-300 ease-in-out
                  ${narration ? "translate-x-0" : "translate-x-full"}`}
                  style={{ zIndex: 0 }}
                />

                {/* labels */}
                <div className="relative z-10 flex h-full">
                  <div
                    className={`w-1/2 flex items-center justify-center text-sm font-semibold
                    ${narration ? "text-white" : "text-cyan-600"}`}
                  >
                    On
                  </div>
                  <div
                    className={`w-1/2 flex items-center justify-center text-sm font-semibold
                    ${!narration ? "text-white" : "text-cyan-600"}`}
                  >
                    Off
                  </div>
                </div>
              </div>
            </div>


          </div>


          {/* Style Carousel */}
          <label className="block font-medium text-sm mb-2">Choose a style</label>
          <div className="flex items-center gap-2 mb-6">
            <FaChevronLeft
              onClick={() => setCarouselIndex((carouselIndex - 1 + stylesList.length) % stylesList.length)}
              className="text-white cursor-pointer hover:text-cyan-400"
            />
            <div className="flex gap-2">
              {visibleStyles.map((img, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedStyle(img)}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full overflow-hidden ring-2 cursor-pointer transition-all duration-300 ${selectedStyle === img ? "ring-cyan-500" : "ring-transparent"}`}
                >
                  <img
                    src={`/${img}`}
                    alt={`Style ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <FaChevronRight
              onClick={() => setCarouselIndex((carouselIndex + 1) % stylesList.length)}
              className="text-white cursor-pointer hover:text-cyan-400"
            />
          </div>

          <div className="px-3 -left-40">
            <button
              onClick={handleGenerate}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col justify-between text-white border-l border-gray-700 p-4">
          <div className="flex items-center justify-center h-full">
            {loading ? (
              <div className="w-24 h-24 rounded-full animate-spin bg-gradient-to-r from-purple-500 to-cyan-600 p-[5px]">
                <div className="bg-gray-900 w-full h-full rounded-full"></div>
              </div>

            ) : (
              <p className="text-center text-gray-400">
                Your generated story will appear here...
              </p>
            )}
          </div>

          {/* Visibility Switch */}
          <div className="flex items-center justify-end space-x-4">
            <label className="text-lg font-medium">Story Visibility:</label>

            <div
              onClick={() => setVisibility(!visibility)}
              className="w-48 h-12 border-2 border-solid border-cyan-600 rounded-full relative cursor-pointer bg-white overflow-hidden"
            >
              {/* sliding pill */}
              <div
                className={`absolute inset-y-0 left-0 w-1/2 bg-cyan-600 rounded-full transition-transform duration-300 ease-in-out
                  ${visibility ? "translate-x-0" : "translate-x-full"}`}
                style={{ zIndex: 0 }}
              />

              {/* labels */}
              <div className="relative z-10 flex h-full">
                <div
                  className={`w-1/2 flex items-center justify-center text-sm font-semibold
                    ${visibility ? "text-white" : "text-cyan-600"}`}
                >
                  Public
                </div>
                <div
                  className={`w-1/2 flex items-center justify-center text-sm font-semibold
                    ${!visibility ? "text-white" : "text-cyan-600"}`}
                >
                  Private
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default GenerateStory;
