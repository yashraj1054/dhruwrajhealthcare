import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/services";

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="p-20 text-center">Service Not Found</div>;
  }

  const handleBooking = () => {
    const message = `
Hello, I would like to book:

Service: ${service.name}
    `;

    const encoded = encodeURIComponent(message);
    const number = "919795053040";

    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-white min-h-screen pb-20">

      {/* Hero */}
      <div className="relative h-[60vh]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {service.name}
          </h1>

          <button
            onClick={handleBooking}
            className="mt-6 bg-[#C4531A] px-8 py-3 rounded-full"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">

        <button
          onClick={() => navigate("/services")}
          className="mb-8 text-[#C4531A]"
        >
          ← Back to Services
        </button>

        <p className="text-lg text-gray-700 whitespace-pre-line">
          {service.description}
        </p>

      </div>

      {/* Mobile Sticky Button */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg p-4">
        <button
          onClick={handleBooking}
          className="w-full bg-[#C4531A] text-white py-3 rounded-full"
        >
          Book Consultation
        </button>
      </div>

    </section>
  );
};

export default ServiceDetails;