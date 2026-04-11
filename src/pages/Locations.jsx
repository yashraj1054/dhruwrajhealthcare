import React, { useState } from "react"; // Added useState here
import { Link } from "react-router-dom";
import { locations } from "../data/locations";

const Locations = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCall = (e, phone) => {
    e.preventDefault();
    window.open(`tel:${phone}`);
  };

  // 1. Filter Logic: Fixed to use the correct variable in the UI
  const filteredLocations = locations.filter(
    (loc) => activeCategory === "All" || loc.city === activeCategory
  );

  // 2. Generate unique cities for the filter buttons
  const uniqueCities = ["All", ...new Set(locations.map((loc) => loc.city))];

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Our Wellness Centers
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience authentic Ayurvedic healing at any of our specialized clinics. 
            Click on a center to view staff details, facilities, and more.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {uniqueCities.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-[#C4531A] text-white"
                  : "bg-white text-gray-700 hover:bg-[#EAD8B3]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* 3. Mapping over filteredLocations instead of locations */}
          {filteredLocations.map((loc) => (
            <Link 
              key={loc.slug} 
              to={`/locations/${loc.slug}`}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row border border-[#EAD8B3]/30 group"
            >
              
              {/* Image Area */}
              <div className="md:w-1/2 h-full md:h-auto relative overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#C4531A] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {loc.location}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:w-1/2 flex flex-col">
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#C4531A] transition-colors leading-tight">
                  {loc.name}
                </h2>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-[#C4531A] font-bold">📍</span>
                    <p>{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="text-[#C4531A] font-bold">⏰</span>
                    <p>{loc.timings}</p>
                  </div>
                </div>

                {/* Facilities Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {loc.facilities.slice(0, 3).map((facility, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] bg-[#FDFBF3] text-[#C4531A] border border-[#C4531A]/20 px-2 py-1 rounded font-medium"
                    >
                      {facility}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <div className="flex-1 bg-[#C4531A] text-white py-3 rounded-xl text-sm font-semibold text-center group-hover:bg-[#a34415] transition">
                    View Full Details
                  </div>
                  <button 
                    onClick={(e) => handleCall(e, loc.phone)}
                    className="px-4 border-2 border-[#C4531A] text-[#C4531A] rounded-xl hover:bg-[#fceee7] transition z-10"
                  >
                    📞
                  </button>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No centers found in this city.
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-20 text-center bg-white rounded-3xl p-10 shadow-md border border-[#EAD8B3]/50">
          <h3 className="text-xl font-bold mb-2">Need immediate assistance?</h3>
          <p className="text-gray-600 mb-6">Call our central helpline for appointments and queries.</p>
          <a 
            href="tel:+919795053040" 
            className="inline-block bg-[#C4531A] text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition shadow-lg"
          >
            Call +91 9795053040
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;