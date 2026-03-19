import React, { useState } from "react";
import { testimonials } from "../data/testimonials";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

<Helmet>

<title>
Patient Testimonials | Dhruwraj Healthcare
</title>

<meta
name="description"
content="Watch real patient testimonials and success stories of Ayurvedic treatments at Dhruwraj Healthcare."
/>

<link rel="canonical" href="https://dhruwraj.com/testimonials" />

</Helmet>

const Testimonials = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const allTestimonials = Object.values(testimonials).flat();

  const diseases = [
    "All",
    ...new Set(allTestimonials.map((t) => t.disease))
  ];

  const filtered = allTestimonials.filter((t) => {
    const matchDisease =
      filter === "All" || t.disease === filter;

    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.disease.toLowerCase().includes(search.toLowerCase());

    return matchDisease && matchSearch;
  });

  return (
    <section className="bg-[#FDFBF3] py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-7">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Happy Patients
          </h1>
          <p className="text-gray-600">
            Real recovery stories from our Ayurvedic treatments
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 border p-3 rounded-full focus:ring-2 focus:ring-[#C4531A]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {diseases.map((disease, index) => (
            <button
              key={index}
              onClick={() => setFilter(disease)}
              className={`px-6 py-2 cursor-pointer rounded-full transition ${
                filter === disease
                  ? "bg-[#C4531A] text-white"
                  : "bg-white border border-[#C4531A] text-[#C4531A]"
              }`}
            >
              {disease}
            </button>
          ))}
        </div>

        {/* Grid */}
        {/* <div className="grid md:grid-cols-3 gap-10">
          {filtered.map((patient) => (
            <Link
              key={patient.slug}
              to={`/testimonials/${patient.slug}`}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden"
            >
              <img
                src={patient.image}
                alt={patient.name}
                className="w-full h-72 object-cover"
                loading="lazy"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#C4531A]">
                  {patient.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {patient.issue}
                </p>
                <span className="inline-block mt-4 text-xs bg-[#FDFBF3] px-3 py-1 rounded-full">
                  {patient.disease}
                </span>
              </div>
            </Link>
          ))}
        </div> */}
        <div className="grid md:grid-cols-3 gap-8">
  {filtered.map((patient) => (
    <Link
      key={patient.slug}
      to={`/testimonials/${patient.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col p-6"
    >
      {/* Google Style Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={patient.image}
            alt={patient.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#FDFBF3] shadow-sm"
            loading="lazy"
          />
          {/* Verified Checkmark Badge */}
          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C4531A] transition-colors">
            {patient.name}
          </h3>
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400 text-sm">
              {"★".repeat(5)}
            </div>
          </div>
        </div>
      </div>

      {/* Review Body */}
      <div className="flex-grow">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 italic">
          "{patient.testimonialSnippet || `I was struggling with ${patient.issue} for a long time. After the treatment, I feel much better and the results are amazing...`}"
        </p>
      </div>

      {/* Bottom Tags / Meta */}
      <div className="mt-6 pt-4 border-t border-gray-50 flex flex-wrap gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C4531A] bg-[#FDFBF3] px-3 py-1 rounded-md">
          {patient.issue}
        </span>
        {/* <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
          {patient.disease}
        </span> */}
      </div>
      
      <div className="mt-4 text-[#C4531A] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
        Read Full Story <span>→</span>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
};

export default Testimonials;