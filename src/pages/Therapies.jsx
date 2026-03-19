import React from "react";
import { therapies } from "../data/therapies";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
<Helmet>

<title>
Panchkarma Therapy in Kanpur | Ayurvedic Treatments
</title>

<meta
name="description"
content="Experience authentic Panchkarma therapies like Shirodhara, Nasya and Abhyanga at Dhruwraj Healthcare Ayurvedic clinic."
/>

<link rel="canonical" href="https://dhruwraj.com/therapies" />

</Helmet>

const Therapies = () => {
  return (
    <section className="bg-[#FDFBF3] py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Ayurvedic Therapies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
          {therapies.map((therapy) => (
            <Link
              key={therapy.slug}
              to={`/therapy/${therapy.slug}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={therapy.image}
                alt={therapy.name}
                className="w-full h-52 object-cover"
                loading="lazy"
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