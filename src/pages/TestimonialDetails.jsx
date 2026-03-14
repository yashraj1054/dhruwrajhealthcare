import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { testimonials } from "../data/testimonials";

const TestimonialDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const allTestimonials = Object.values(testimonials).flat();
  const patient = allTestimonials.find((t) => t.slug === slug);

  if (!patient) {
    return <div className="p-20 text-center">Not Found</div>;
  }

  return (
    <section className="bg-white min-h-screen pb-20">

      {/* Hero */}
      <div className="relative h-[60vh]">
        <img
          src={patient.image}
          alt={patient.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            {patient.name}
          </h1>
          <button
          onClick={() => navigate("/testimonials")}
          className="absolute top-6 left-6 z-20 bg-white/90 text-black backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
        >
          ← Back to Testimonials
        </button>
          <p className="mt-4 bg-[#C4531A] px-6 py-2 rounded-full">
            {patient.disease}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* <button
          onClick={() => navigate("/testimonials")}
          className="mb-8 text-[#C4531A]"
        >
          ← Back to 
        </button> */}

        <p className="text-lg text-gray-700 mb-10 whitespace-pre-line">
          {patient.description}
        </p>

        {/* YouTube Video */}
        {patient.youtubeId && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Patient Video Testimonial
            </h2>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${patient.youtubeId}`}
                title={patient.name}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Before / After Gallery */}
        {patient.gallery && patient.gallery.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Before & After
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {patient.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Before After"
                  className="rounded-2xl shadow-md"
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TestimonialDetails;