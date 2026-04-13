import React, { useState } from "react";
import { healthTips } from "../data/healthTips";
import { Helmet } from "react-helmet-async";

const HealthTips = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const categories = ["All", ...new Set(healthTips.map((v) => v.category))];

  const filteredVideos = healthTips.filter((video) => {
    const matchCategory = filter === "All" || video.category === filter;
    const matchSearch = 
      video.title.toLowerCase().includes(search.toLowerCase()) || 
      video.category.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="bg-[#FDFBF3] py-16 md:py-24 min-h-screen selection:bg-[#C4531A]/20 overflow-x-hidden">
      <Helmet>
        <title>Ayurvedic Health Tips & Natural Remedies</title>
        <meta name="description" content="Learn natural Ayurvedic health tips..." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl md:text-[140px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            Wisdom
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 text-[#1A1A1A] tracking-tight">
              Health <span className="italic font-light text-[#C4531A]">Sanctuary</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed">
              Unlock ancestral healing through our curated collection of Ayurvedic wisdom and expert guidance.
            </p>
          </div>
        </div>

        {/* Enhanced Search & Filter Section */}
        <div className="flex flex-col items-center gap-10 mb-20 ">
          {/* Glassmorphism Search */}
          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#C4531A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search remedies (e.g. Skin, Digestion)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/50 backdrop-blur-md border border-[#EAD8B3]/50 py-4 pl-14 pr-6 rounded-full focus:ring-2 focus:ring-[#C4531A]/20 focus:border-[#C4531A] outline-none transition-all shadow-sm hover:shadow-md"
            />
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex overflow-x-auto no-scrollbar max-w-full pb-4 md:pb-0">
            <div className="flex gap-3 md:gap-4 px-2">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 border ${
                    filter === cat
                      ? "bg-[#C4531A] border-[#C4531A] text-white shadow-lg shadow-[#C4531A]/20"
                      : "bg-white border-[#EAD8B3] text-gray-500 hover:border-[#C4531A] hover:text-[#C4531A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cinematic Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideoId(video.youtubeId)}
              className="group cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-6 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_25px_50px_-12px_rgba(196,83,26,0.2)] transition-all duration-500">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#C4531A] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Category Badge on Image */}
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-[#C4531A] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-lg shadow-sm">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="px-2">
                <h3 className="text-xl font-serif font-medium text-gray-800 group-hover:text-[#C4531A] transition-colors duration-300 leading-snug">
                  {video.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-[#C4531A] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Watch Wisdom 
                  <span className="w-8 h-[1px] bg-[#C4531A]"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-32 opacity-40">
            <p className="font-serif italic text-2xl text-gray-400">Expanding our archives...</p>
          </div>
        )}
      </div>

      {/* --- CINEMATIC MODAL --- */}
      {selectedVideoId && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-xl animate-in fade-in duration-500"
          onClick={() => setSelectedVideoId(null)}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedVideoId(null)}
              className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-[#C4531A] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md"
            > 
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

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

      {/* Tailwind Utility for horizontal scroll hiding */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default HealthTips;