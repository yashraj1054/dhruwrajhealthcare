import React, { useState } from "react";
import { testimonials } from "../data/testimonials";
import { Link } from "react-router-dom";

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
      t.name.toLowerCase().includes(search.toLowerCase());

    return matchDisease && matchSearch;
  });

  return (
    <section className="bg-[#FDFBF3] py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-16">
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
              className={`px-6 py-2 rounded-full transition ${
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
        <div className="grid md:grid-cols-3 gap-10">
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
        </div>

      </div>
    </section>
  );
};

export default Testimonials;