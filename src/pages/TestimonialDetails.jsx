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
    // <section className="bg-white min-h-screen pb-20">
    //   {/* Hero */}
    //   <div className="relative h-[60vh]">
    //     <img
    //       src={patient.image}
    //       alt={patient.name}
    //       className="w-full h-full object-cover"
    //       loading="lazy"
    //     />

    //     <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
    //       <h1 className="text-4xl md:text-5xl font-bold">{patient.name}</h1>
    //       <button
    //         onClick={() => navigate("/testimonials")}
    //         className="absolute top-6 left-6 z-20 bg-white/90 text-black backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
    //       >
    //         ← Back to Testimonials
    //       </button>
    //       <p className="mt-4 bg-[#C4531A] px-6 py-2 rounded-full">
    //         {patient.disease}
    //       </p>
    //     </div>

    //   </div>

    //   <div className="max-w-5xl mx-auto px-6 py-16">
    //     <p className="text-lg text-gray-700 mb-10 whitespace-pre-line">
    //       {patient.description}
    //     </p>

    //     {/* Updated YouTube Video Section with Popup Trigger */}
    //     {patient.youtubeId && (
    //       <div className="mb-16">
    //         <h2 className="text-2xl font-bold mb-6">Patient Video Testimonial</h2>
    //         <div
    //           className="relative aspect-video group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
    //           onClick={() => setIsVideoOpen(true)}
    //         >
    //           {/* YouTube Thumbnail Image */}
    //           <img
    //             src={`https://img.youtube.com/vi/${patient.youtubeId}/maxresdefault.jpg`}
    //             alt={patient.name}
    //             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    //             loading="lazy"
    //           />
    //           {/* Play Overlay */}
    //           <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
    //             <div className="bg-white/90 text-[#C4531A] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
    //               ▶
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     {/* Before / After Gallery */}
    //     {patient.gallery && patient.gallery.length > 0 && (
    //       <div>
    //         <h2 className="text-2xl font-bold mb-6">Before & After</h2>
    //         <div className="grid md:grid-cols-2 gap-6">
    //           {patient.gallery.map((img, i) => (
    //             <img
    //               key={i}
    //               src={img}
    //               alt="Before After"
    //               className="rounded-2xl shadow-md"
    //               loading="lazy"
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>

    //   {/* --- VIDEO POPUP MODAL --- */}
    //   {isVideoOpen && (
    //     <div
    //       className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
    //       onClick={() => setIsVideoOpen(false)}
    //     >
    //       <div
    //         className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
    //         onClick={(e) => e.stopPropagation()}
    //       >
    //         {/* Cross Button */}
    //         <button
    //           onClick={() => setIsVideoOpen(false)}
    //           className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-[#C4531A] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all group"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-7 w-7 group-hover:rotate-90 transition-transform"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         </button>

    //         {/* Embed Video */}
    //         <iframe
    //           className="w-full h-full"
    //           src={`https://www.youtube.com/embed/${patient.youtubeId}?autoplay=1&rel=0`}
    //           title={patient.name}
    //           frameBorder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //         ></iframe>
    //       </div>
    //     </div>
    //   )}
    // </section>
    <section className="bg-[#FDFBF3]/30 min-h-screen ">
  {/* --- PREMIUM HEADER --- */}
  <div className="bg-white border-b border-gray-100">
    {/* One single container for the whole header to ensure left alignment */}
    <div className="max-w-5xl mx-auto px-6 pt-10 pb-12">
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/testimonials")}
        className="group mb-10 flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-[#C4531A] transition-colors uppercase tracking-[0.2em]"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO ALL STORIES
      </button>

      {/* Main Profile Header - Flex layout instead of Grid to avoid dead space */}
      <div className="flex items-start gap-5 md:gap-8">
        
        {/* Patient Image Circle */}
        <div className="relative flex-shrink-0">
          <div className="relative">
            <img
              src={patient.image}
              alt={patient.name}
              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover shadow-xl border-2 border-white"
              loading="lazy"
            />
            {/* Verified Badge */}
            <div className="absolute bottom-1 right-1 bg-[#C4531A] text-white rounded-full p-1.5 border-2 border-white shadow-lg">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content: Name + Journey + Metadata */}
        <div className="flex flex-col pt-1">
          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            {patient.name}’s <br />
            <span className="text-[#C4531A]">Journey to Recovery</span>
          </h1>

          {/* Condition & Concern Metadata - Side-by-side row */}
          <div className="flex gap-8 md:gap-16 mt-6 md:mt-8">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Condition</span>
              <p className="text-base md:text-xl font-bold text-gray-800 leading-tight">
                {patient.disease}
              </p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Concern</span>
              <p className="text-base md:text-xl font-bold text-gray-800 leading-tight">
                {patient.issue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* --- MAIN CONTENT SECTION --- */}
  <div className="max-w-4xl mx-auto px-6 py-20">
    <div className="prose prose-lg max-w-none">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 whitespace-nowrap">
          The Patient Experience
        </h2>
        <div className="flex-1 h-px bg-gray-100"></div>
      </div>
      
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16 first-letter:text-6xl first-letter:font-bold first-letter:text-[#C4531A] first-letter:mr-3 first-letter:float-left whitespace-pre-line">
        {patient.description}
      </p>
    </div>

    {/* --- VIDEO SECTION --- */}
    {patient.youtubeId && (
      <div className="mb-24">
        <div className="bg-white p-3 md:p-5 rounded-[2.5rem] shadow-2xl border border-gray-100">
          <div
            className="relative aspect-video group cursor-pointer overflow-hidden rounded-[2rem]"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${patient.youtubeId}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 group-hover:bg-gray-900/40 transition-all duration-500">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-[#C4531A] rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* --- BEFORE/AFTER GALLERY --- */}
    {patient.gallery && patient.gallery.length > 0 && (
      <div className="pt-10 border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Clinical Transformation</h2>
          <p className="text-gray-500 mt-2 italic">Official documented results</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {patient.gallery.map((img, i) => (
            <div key={i} className="group relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
              <img
                src={img}
                alt="Transformation"
                className="w-full aspect-square object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-xl text-xs font-black uppercase text-gray-900 shadow-lg tracking-widest">
                {i === 0 ? "Initial State" : "Post-Treatment"}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>

  
</section>
  );
};

export default TestimonialDetails;
