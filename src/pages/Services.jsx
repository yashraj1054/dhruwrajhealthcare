import React from "react";
import { services } from "../data/services";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="bg-[#FDFBF3] py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          Consultation Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item) => (
            <Link
              key={item.slug}
              to={`/services/${item.slug}`}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#C4531A]">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;