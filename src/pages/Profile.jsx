import React, { useState } from "react";
import { FaPlay, FaTrashAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import GenerateStory from "./subComponents/GenerateStory";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import Pagination from "./subComponents/Pagination";

const Profile = () => {
  const [filter, setFilter] = useState("All");
  const [videos, setVideos] = useState([
    { id: 1, src: "/country1.png", title: "Story 1", isFavourite: false },
    { id: 2, src: "/horror.png", title: "Story 2", isFavourite: true },
    { id: 3, src: "/fairy1.png", title: "Story 3", isFavourite: false },
    { id: 4, src: "/thriller.png", title: "Story 4", isFavourite: true },
    { id: 5, src: "/country2.png", title: "Story 5", isFavourite: false },
    { id: 6, src: "/fairy2.png", title: "Story 6", isFavourite: true },
    { id: 7, src: "/superhero.png", title: "Story 7", isFavourite: false },
    { id: 8, src: "/ai-creation.png", title: "Story 8", isFavourite: true },
    { id: 9, src: "/princess.png", title: "Story 9", isFavourite: false },
    { id: 10, src: "/superhero1.png", title: "Story 10", isFavourite: true },
    { id: 11, src: "/fairy3.png", title: "Story 11", isFavourite: false },
    { id: 12, src: "/scifi.png", title: "Story 12", isFavourite: true },
  ]);
  const [showStoryModal, setShowStoryModal] = useState(false);

  const toggleStoryModal = () => {
    setShowStoryModal(prev => !prev);
  };

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const toggleFavourite = (id) => {
    setVideos(videos.map(video =>
      video.id === id ? { ...video, isFavourite: !video.isFavourite } : video
    ));
  };

  const filteredVideos = () => {
    switch (filter) {
      case "Favourites":
        return videos.filter(video => video.isFavourite).slice(0, Math.ceil(videos.length / 2));
      case "Public":
        return videos.slice(0, Math.ceil(videos.length / 2));
      case "Private":
        return videos.slice(0, Math.ceil(videos.length / 4));
      default:
        return videos;
    }
  };

  return (
    <div className="min-h-screen bg-[#191f30] text-white">
      <div className="absolute top-1/3 -left-6 w-full h-64 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="bg-[#ffffff05] rounded-2xl overflow-hidden relative">
        <div className="absolute -top-32 left-0 w-full h-[450px] z-0 pointer-events-none">
          <img
            src="/profilebg.png"
            alt="Background"
            className="w-full h-full object-cover opacity-60 mix-blend-lighten"
          />
        </div>

        {/* Profile Info */}
        <div className="relative z-10 flex justify-center items-start min-h-[60vh] px-4 pt-48">
          <div className="opacity-90 text-black w-full max-w-full relative flex items-start justify-center px-8 py-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 mt-4 ml-10">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-purple-400 shadow-md object-cover"
              />
            </div>

            {/* Name and Stats below */}
            <div className="relative z-10 w-4/6 text-start mt-24 px-4 pb-8">
              <h2 className="text-3xl font-medium text-white tracking-tight">Samantha Jones</h2>
              <div className="flex flex-wrap items-center font-normal gap-2 text-gray-300 mt-2 text-md">
                <span className="text-white">65</span> Stories
                <span className="mx-1 text-white">·</span>
                <span className="text-white">43</span> Public
                <span className="mx-1 text-white">·</span>
                <span className="text-white">21</span> Favourites
              </div>
            </div>

            {/* New Story Button aligned with profile image */}
            <div className="mt-24">
              <button
                onClick={toggleStoryModal}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-transform shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden group">
                + New Story
              </button>
            </div>
          </div>
        </div>

        {/* Render Modal */}
        <GenerateStory isOpen={showStoryModal} closeModal={toggleStoryModal} />

        {/* Video Cards */}
        <div className="relative z-10 px-6 py-12">
          <div className="flex justify-between items-center mb-6 mt-4">
            <h1 className="text-2xl font-semibold text-white">Your Stories</h1>
            <div className="space-x-2">
              {["All", "Favourites", "Public", "Private"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition 
                    ${filter === f
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-700 text-white hover:bg-cyan-600"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
            {filteredVideos().map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative group overflow-hidden rounded-lg bg-[#ffffff05] hover:scale-105 transition-transform duration-300"
              >

                <button
                  className="absolute top-2 right-2 z-10 text-white bg-gray-700 bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition"
                  onClick={() => previewImage(video.src)}
                  title="Preview"
                >
                  <Eye size={16} />
                </button>

                <img
                  src={video.src}
                  alt={video.title}
                  className="w-full h-40 object-cover transition-opacity duration-500"
                />

                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute top-2 left-4 flex space-x-2">{video.title}</p>
                  <div className="absolute top-2 right-10 flex space-x-2">
                    <button
                      onClick={() => toggleFavourite(video.id)}
                      className="text-white bg-cyan-600 p-1 rounded-full hover:bg-cyan-500 transition"
                      title="Toggle Favourite"
                    >
                      {video.isFavourite ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button
                      onClick={() => handleDelete(video.id)}
                      className="text-white bg-red-600 p-1 rounded-full hover:bg-red-500 transition"
                      title="Delete"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>

                  <div className="flex items-center justify-center h-full">
                    <button
                      className="text-white bg-gradient-to-r from-purple-500 to-cyan-500 p-3 rounded-full transition"
                      title="Play"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Pagination/>
      </div>
    </div>
  );
};

export default Profile;
