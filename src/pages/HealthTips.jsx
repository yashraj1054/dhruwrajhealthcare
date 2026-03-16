import React, { useState } from "react";
import { healthTips } from "../data/healthTips";
import { Helmet } from "react-helmet-async";
<Helmet>

<title>
Ayurvedic Health Tips & Natural Remedies
</title>

<meta
name="description"
content="Learn natural Ayurvedic health tips, home remedies and lifestyle guidance for better health."
/>

<link rel="canonical" href="https://dhruwraj.com/health-tips" />

</Helmet>

const HealthTips = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(healthTips.map((v) => v.category))
  ];

  const filteredVideos = healthTips.filter((video) => {
    const matchCategory =
      filter === "All" || video.category === filter;

    const matchSearch =
      video.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="bg-[#FDFBF3] py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ayurvedic Health Tips
          </h1>
          <p className="text-gray-600">
            Watch expert advice & natural healing tips
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search video..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 border p-3 rounded-full focus:ring-2 focus:ring-[#C4531A]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition ${
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
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-60 object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    ▶
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#C4531A]">
                  {video.title}
                </h3>
                <span className="inline-block mt-3 text-xs bg-[#FDFBF3] px-3 py-1 rounded-full">
                  {video.category}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HealthTips;