import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { therapies } from "../data/therapies";

import { Helmet } from "react-helmet-async";

<Helmet>
<title>{therapies.name} Treatment | Dhruwraj Healthcare</title>

<meta
name="description"
content={`Learn about ${therapies.name} Ayurvedic therapy, its benefits, procedure and diseases it treats at Dhruwraj Healthcare.`}
/>
</Helmet>

const TherapyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const therapy = therapies.find((t) => t.slug === slug);

  if (!therapy) {
    return <div className="p-20 text-center">Therapy not found.</div>;
  }

  const handleBooking = () => {
    const message = `
Hello, I would like to book the following therapy:

Therapy Name: ${therapy.name}
`;

    const encoded = encodeURIComponent(message);
    const number = "919795053040";

    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-[#FDFBF3] min-h-screen pb-24">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[60vh] md:h-[70vh]">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/therapies")}
          className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
        >
          ← Back to Therapies
        </button>

        <img
          src={therapy.image}
          alt={therapy.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {therapy.name}
              {therapy.shloka && (
                <span className="block text-sm mt-4 text-white italic">
                  {therapy.shloka}
                </span>
              )}
            </h1>
            

            <button
              onClick={handleBooking}
              className="bg-[#C4531A] text-white px-8 py-3 rounded-full text-lg shadow-lg hover:opacity-90 transition"
            >
              Book This Therapy
            </button>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line mb-12">
          {therapy.content}
        </p>

        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-[#C4531A] mb-6">
            Why Choose {therapy.name}?
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>✔ 100% Natural & Safe Procedure</li>
            <li>✔ Performed by Experienced Ayurvedic Experts</li>
            <li>✔ Personalized Treatment Approach</li>
            <li>✔ Proven Holistic Healing Results</li>
          </ul>

          <div className="mt-10">
            <button
              onClick={handleBooking}
              className="bg-[#C4531A] text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Book Appointment Now
            </button>
          </div>
        </div>

      </div>

      {/* MOBILE STICKY BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg p-4">
        <button
          onClick={handleBooking}
          className="w-full bg-[#C4531A] text-white py-3 rounded-full font-semibold"
        >
          Book This Therapy
        </button>
      </div>

    </section>
  );
};

export default TherapyDetails;