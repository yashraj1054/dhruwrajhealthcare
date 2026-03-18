import React, { useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { testimonials } from "../data/testimonials";

const TestimonialDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // State for the video popup
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
          <h1 className="text-4xl md:text-5xl font-bold">{patient.name}</h1>
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
        <p className="text-lg text-gray-700 mb-10 whitespace-pre-line">
          {patient.description}
        </p>

        {/* Updated YouTube Video Section with Popup Trigger */}
        {patient.youtubeId && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Patient Video Testimonial</h2>
            <div 
              className="relative aspect-video group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* YouTube Thumbnail Image */}
              <img
                src={`https://img.youtube.com/vi/${patient.youtubeId}/maxresdefault.jpg`}
                alt={patient.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                <div className="bg-white/90 text-[#C4531A] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
                  ▶
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Before / After Gallery */}
        {patient.gallery && patient.gallery.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Before & After</h2>
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

      {/* --- VIDEO POPUP MODAL --- */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cross Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-[#C4531A] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7 group-hover:rotate-90 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Embed Video */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${patient.youtubeId}?autoplay=1&rel=0`}
              title={patient.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialDetails;