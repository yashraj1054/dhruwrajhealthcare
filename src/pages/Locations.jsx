import React, { useState } from "react";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";

const Locations = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCall = (e, phone) => {
    e.preventDefault();
    window.open(`tel:${phone}`);
  };

  const filteredLocations = locations.filter(
    (loc) => activeCategory === "All" || loc.city === activeCategory
  );

  const uniqueCities = ["All", ...new Set(locations.map((loc) => loc.city))];

  return (
    // FIX 1: Added overflow-x-hidden to the main container to catch rogue absolute elements
    <section className="bg-[#FDFBF3] min-h-screen py-12 md:py-24 selection:bg-[#C4531A]/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
        
        {/* Editorial Header */}
        <div className="relative mb-16 md:mb-24">
          {/* FIX 2: Ensure the watermark is centered and can't push the page width */}
          <div className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 text-6xl md:text-[120px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest z-0">
            Ayurveda
          </div>
          
          <div className="relative text-center z-10">
            <h1 className="text-4xl md:text-7xl font-serif font-medium mb-4 md:mb-6 text-[#1A1A1A] tracking-tight">
              Our <span className="italic font-light text-[#C4531A]">Sanctuaries</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed">
              Handpicked locations designed for profound rejuvenation and 
              ancestral healing practices.
            </p>
          </div>
        </div>

        {/* Minimalist Filter Navigation */}
        {/* FIX 3: Added 'max-w-full' and 'w-full' to ensure the bar stays within bounds */}
        <div className="w-full max-w-full overflow-x-auto no-scrollbar mb-12 md:mb-20 border-b border-[#EAD8B3]/40">
          <div className="flex md:justify-center items-center gap-6 md:gap-8 pb-4 md:pb-8 min-w-max md:min-w-0 px-2">
            {uniqueCities.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative py-2 text-[10px] md:text-sm uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                  activeCategory === category
                    ? "text-[#C4531A] font-bold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C4531A] transition-all duration-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery-Style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {filteredLocations.map((loc, index) => (
            <div 
              key={loc.slug}
              className="group animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Link to={`/locations/`} className="block">
                <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[16/10] mb-6 md:mb-8 shadow-sm">
                  <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-bl-2xl border-b border-l border-[#EAD8B3]/20">
                    <p className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-[#C4531A] uppercase">
                      Since {loc.inceptionDate}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0"> {/* min-w-0 helps text truncation work */}
                    <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-2 md:mb-3 group-hover:text-[#C4531A] transition-colors leading-tight">
                      {loc.name}
                    </h2>
                    
                    <div className="flex flex-col gap-1.5 text-[#6B6B6B] font-light italic">
                      <span className="flex items-center gap-2 text-sm md:text-base">
                        <span className="w-4 h-[1px] bg-[#C4531A]"></span>
                        {loc.city}
                      </span>
                      <p className="text-xs md:text-sm not-italic opacity-70 truncate">
                        {loc.address}
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={(e) => handleCall(e, loc.phone)}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#EAD8B3] flex-shrink-0 flex items-center justify-center text-[#C4531A] active:bg-[#C4531A] active:text-white transition-all duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Locations;