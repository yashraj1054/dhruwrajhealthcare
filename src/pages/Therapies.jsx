import React from "react";
import { therapies } from "../data/therapies";
import { Link } from "react-router-dom";

const Therapies = () => {
  return (
    <section className="bg-[#FDFBF3] py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Ayurvedic Therapies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {therapies.map((therapy) => (
            <Link
              key={therapy.slug}
              to={`/therapy/${therapy.slug}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={therapy.image}
                alt={therapy.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#C4531A]">
                  {therapy.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {therapy.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Therapies;