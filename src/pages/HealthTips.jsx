import React, { useState } from "react";
import { healthTips } from "../data/healthTips";
import { Helmet } from "react-helmet-async";

const HealthTips = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  // New state to handle the popup video
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const categories = ["All", ...new Set(healthTips.map((v) => v.category))];

  const filteredVideos = healthTips.filter((video) => {
    const matchCategory = filter === "All" || video.category === filter;
    const matchSearch = video.title.toLowerCase().includes(search.toLowerCase()) || video.category.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="bg-[#FDFBF3] py-24 min-h-screen">
      <Helmet>
        <title>Ayurvedic Health Tips & Natural Remedies</title>
        <meta
          name="description"
          content="Learn natural Ayurvedic health tips, home remedies and lifestyle guidance for better health."
        />
        <link rel="canonical" href="https://dhruwraj.com/health-tips" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayurvedic Health Tips</h1>
          <p className="text-gray-600">Watch expert advice & natural healing tips</p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search video..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 border p-3 rounded-full focus:ring-2 focus:ring-[#C4531A] outline-none"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center  gap-4 mb-16">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 cursor-pointer rounded-full transition ${
                filter === cat
                  ? "bg-[#C4531A] text-white"
                  : "bg-white border border-[#C4531A] text-[#C4531A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideoId(video.youtubeId)} // Open Modal on click
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 text-[#C4531A] w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    ▶
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#C4531A]">{video.title}</h3>
                <span className="inline-block mt-3 text-xs bg-[#FDFBF3] px-3 py-1 rounded-full">
                  {video.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- VIDEO POPUP MODAL --- */}
{selectedVideoId && (
  <div 
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    onClick={() => setSelectedVideoId(null)} // Closes if you click the background
  >
    {/* Modal Container */}
    <div 
      className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the video itself
    >
      
      {/* Enhanced Cross Button */}
      <button 
        onClick={() => setSelectedVideoId(null)}
        className="absolute top-4 right-4 z-[110] bg-black/50 hover:bg-[#C4531A] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Close modal"
      > 
      <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7 group-hover:rotate-90 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
      </button>

      {/* YouTube Embed */}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
    </div>
  </div>
)}
    </section>
  );
};

export default HealthTips;