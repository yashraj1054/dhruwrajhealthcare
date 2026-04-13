// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { testimonials } from "../data/testimonials";

// const TestimonialDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   // State for the video popup
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   const allTestimonials = Object.values(testimonials).flat();
//   const patient = allTestimonials.find((t) => t.slug === slug);

//   if (!patient) {
//     return <div className="p-20 text-center">Not Found</div>;
//   }

//   return (
//     // <section className="bg-white min-h-screen pb-20">
//     //   {/* Hero */}
//     //   <div className="relative h-[60vh]">
//     //     <img
//     //       src={patient.image}
//     //       alt={patient.name}
//     //       className="w-full h-full object-cover"
//     //       loading="lazy"
//     //     />

//     //     <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
//     //       <h1 className="text-4xl md:text-5xl font-bold">{patient.name}</h1>
//     //       <button
//     //         onClick={() => navigate("/testimonials")}
//     //         className="absolute top-6 left-6 z-20 bg-white/90 text-black backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
//     //       >
//     //         ← Back to Testimonials
//     //       </button>
//     //       <p className="mt-4 bg-[#C4531A] px-6 py-2 rounded-full">
//     //         {patient.disease}
//     //       </p>
//     //     </div>

//     //   </div>

//     //   <div className="max-w-5xl mx-auto px-6 py-16">
//     //     <p className="text-lg text-gray-700 mb-10 whitespace-pre-line">
//     //       {patient.description}
//     //     </p>

//     //     {/* Updated YouTube Video Section with Popup Trigger */}
//     //     {patient.youtubeId && (
//     //       <div className="mb-16">
//     //         <h2 className="text-2xl font-bold mb-6">Patient Video Testimonial</h2>
//     //         <div
//     //           className="relative aspect-video group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
//     //           onClick={() => setIsVideoOpen(true)}
//     //         >
//     //           {/* YouTube Thumbnail Image */}
//     //           <img
//     //             src={`https://img.youtube.com/vi/${patient.youtubeId}/maxresdefault.jpg`}
//     //             alt={patient.name}
//     //             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//     //             loading="lazy"
//     //           />
//     //           {/* Play Overlay */}
//     //           <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
//     //             <div className="bg-white/90 text-[#C4531A] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
//     //               ▶
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     )}

//     //     {/* Before / After Gallery */}
//     //     {patient.gallery && patient.gallery.length > 0 && (
//     //       <div>
//     //         <h2 className="text-2xl font-bold mb-6">Before & After</h2>
//     //         <div className="grid md:grid-cols-2 gap-6">
//     //           {patient.gallery.map((img, i) => (
//     //             <img
//     //               key={i}
//     //               src={img}
//     //               alt="Before After"
//     //               className="rounded-2xl shadow-md"
//     //               loading="lazy"
//     //             />
//     //           ))}
//     //         </div>
//     //       </div>
//     //     )}
//     //   </div>

//     //   {/* --- VIDEO POPUP MODAL --- */}
//     //   {isVideoOpen && (
//     //     <div
//     //       className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
//     //       onClick={() => setIsVideoOpen(false)}
//     //     >
//     //       <div
//     //         className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
//     //         onClick={(e) => e.stopPropagation()}
//     //       >
//     //         {/* Cross Button */}
//     //         <button
//     //           onClick={() => setIsVideoOpen(false)}
//     //           className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-[#C4531A] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all group"
//     //         >
//     //           <svg
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             className="h-7 w-7 group-hover:rotate-90 transition-transform"
//     //             fill="none"
//     //             viewBox="0 0 24 24"
//     //             stroke="currentColor"
//     //           >
//     //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//     //           </svg>
//     //         </button>

//     //         {/* Embed Video */}
//     //         <iframe
//     //           className="w-full h-full"
//     //           src={`https://www.youtube.com/embed/${patient.youtubeId}?autoplay=1&rel=0`}
//     //           title={patient.name}
//     //           frameBorder="0"
//     //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     //           allowFullScreen
//     //         ></iframe>
//     //       </div>
//     //     </div>
//     //   )}
//     // </section>
//     <section className="bg-[#FDFBF3]/30 min-h-screen ">
//   {/* --- PREMIUM HEADER --- */}
//   <div className="bg-white border-b border-gray-100">
//     {/* One single container for the whole header to ensure left alignment */}
//     <div className="max-w-5xl mx-auto px-6 pt-10 pb-12">
      
//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/testimonials")}
//         className="group mb-10 flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-[#C4531A] transition-colors uppercase tracking-[0.2em]"
//       >
//         <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO ALL STORIES
//       </button>

//       {/* Main Profile Header - Flex layout instead of Grid to avoid dead space */}
//       <div className="flex items-start gap-5 md:gap-8">
        
//         {/* Patient Image Circle */}
//         <div className="relative flex-shrink-0">
//           <div className="relative">
//             <img
//               src={patient.image}
//               alt={patient.name}
//               className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover shadow-xl border-2 border-white"
//               loading="lazy"
//             />
//             {/* Verified Badge */}
//             <div className="absolute bottom-1 right-1 bg-[#C4531A] text-white rounded-full p-1.5 border-2 border-white shadow-lg">
//               <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Text Content: Name + Journey + Metadata */}
//         <div className="flex flex-col pt-1">
//           <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
//             {patient.name}’s <br />
//             <span className="text-[#C4531A]">Journey to Recovery</span>
//           </h1>

//           {/* Condition & Concern Metadata - Side-by-side row */}
//           <div className="flex gap-8 md:gap-16 mt-6 md:mt-8">
//             <div className="flex flex-col">
//               <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Condition</span>
//               <p className="text-base md:text-xl font-bold text-gray-800 leading-tight">
//                 {patient.disease}
//               </p>
//             </div>
            
//             <div className="flex flex-col">
//               <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Concern</span>
//               <p className="text-base md:text-xl font-bold text-gray-800 leading-tight">
//                 {patient.issue}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* --- MAIN CONTENT SECTION --- */}
//   <div className="max-w-4xl mx-auto px-6 py-20">
//     <div className="prose prose-lg max-w-none">
//       <div className="flex items-center gap-4 mb-10">
//         <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 whitespace-nowrap">
//           The Patient Experience
//         </h2>
//         <div className="flex-1 h-px bg-gray-100"></div>
//       </div>
      
//       <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16 first-letter:text-6xl first-letter:font-bold first-letter:text-[#C4531A] first-letter:mr-3 first-letter:float-left whitespace-pre-line">
//         {patient.description}
//       </p>
//     </div>

//     {/* --- VIDEO SECTION --- */}
//     {patient.youtubeId && (
//       <div className="mb-24">
//         <div className="bg-white p-3 md:p-5 rounded-[2.5rem] shadow-2xl border border-gray-100">
//           <div
//             className="relative aspect-video group cursor-pointer overflow-hidden rounded-[2rem]"
//             onClick={() => setIsVideoOpen(true)}
//           >
//             <img
//               src={`https://img.youtube.com/vi/${patient.youtubeId}/maxresdefault.jpg`}
//               alt="Video Thumbnail"
//               className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
//             />
//             <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 group-hover:bg-gray-900/40 transition-all duration-500">
//               <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-[#C4531A] rounded-full flex items-center justify-center shadow-xl">
//                   <svg className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" viewBox="0 0 24 24">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}

//     {/* --- BEFORE/AFTER GALLERY --- */}
//     {patient.gallery && patient.gallery.length > 0 && (
//       <div className="pt-10 border-t border-gray-100">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Clinical Transformation</h2>
//           <p className="text-gray-500 mt-2 italic">Official documented results</p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-6 md:gap-10">
//           {patient.gallery.map((img, i) => (
//             <div key={i} className="group relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
//               <img
//                 src={img}
//                 alt="Transformation"
//                 className="w-full aspect-square object-cover transition duration-500 group-hover:scale-105"
//               />
//               <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-xl text-xs font-black uppercase text-gray-900 shadow-lg tracking-widest">
//                 {i === 0 ? "Initial State" : "Post-Treatment"}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>

//   {/* --- ADD THIS MODAL CODE BACK IN --- */}
//   {isVideoOpen && (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
//       onClick={() => setIsVideoOpen(false)}
//     >
//       <div
//         className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
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
//   );
// };

// export default TestimonialDetails;

import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";

const TestimonialDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const allTestimonials = Object.values(testimonials).flat();
  const patient = allTestimonials.find((t) => t.slug === slug);

  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF3] font-serif italic text-xl">
        The story you seek has not yet been chronicled.
      </div>
    );
  }

  return (
    <section className="bg-[#FDFBF3] min-h-screen selection:bg-[#C4531A]/10 overflow-x-hidden">
      
      {/* --- CINEMATIC HEADER --- */}
      <header className="relative bg-white pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#EAD8B3]/20">
        {/* Editorial Watermark */}
        <div className="absolute top-10 right-0 text-[100px] md:text-[180px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none pointer-events-none">
          {patient.disease}
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate("/testimonials")}
            className="group mb-12 flex items-center gap-3 text-[10px] font-bold text-[#C4531A] hover:text-[#a34415] transition-all uppercase tracking-[0.3em]"
          >
            <span className="w-8 h-[1px] bg-[#C4531A] group-hover:w-12 transition-all"></span> 
            Back to Chronicles
          </button>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left">
            {/* Elegant Portrait */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C4531A] to-transparent rounded-full opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
              <img
                src={patient.image}
                alt={patient.name}
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-2 -right-2 bg-white text-[#C4531A] rounded-full p-3 shadow-xl border border-gray-50">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-7xl font-serif font-medium text-gray-900 leading-[1.1] mb-8">
                {patient.name}’s <br />
                <span className="italic font-light text-[#C4531A]">Path to Purity</span>
              </h1>

              <div className="flex flex-wrap justify-center md:justify-start gap-12">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#C4531A]/60 tracking-[0.2em] mb-2">Patient Profile</span>
                  <p className="text-lg md:text-xl font-medium text-gray-800 italic">{patient.disease}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#C4531A]/60 tracking-[0.2em] mb-2">Primary Concern</span>
                  <p className="text-lg md:text-xl font-medium text-gray-800 italic">{patient.issue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STORY BODY --- */}
      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="relative">
          {/* Decorative Quote Mark */}
          <div className="absolute -top-16 -left-10 text-[160px] font-serif text-[#C4531A]/10 select-none">“</div>
          
          <div className="prose prose-lg md:prose-xl max-w-none">
            <p className="text-gray-700 leading-relaxed font-light first-letter:text-7xl first-letter:font-serif first-letter:text-[#C4531A] first-letter:mr-4 first-letter:float-left whitespace-pre-line drop-shadow-sm">
              {patient.description}
            </p>
          </div>
        </div>

        {/* --- CINEMATIC VIDEO SECTION --- */}
        {patient.youtubeId && (
          <div className="mt-24 md:mt-32">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold text-[#C4531A] tracking-[0.4em] uppercase">Visual Testimony</span>
              <h2 className="text-3xl font-serif mt-2 italic">A Conversation on Healing</h2>
            </div>
            
            <div className="relative group bg-white p-4 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-[#EAD8B3]/20 overflow-hidden">
              <div
                className="relative aspect-video overflow-hidden rounded-[2rem] cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <img
                  src={`https://img.youtube.com/vi/${patient.youtubeId}/maxresdefault.jpg`}
                  alt="Testimony"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-1000"
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/30 transition-all flex items-center justify-center">
                   <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-all duration-500">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-[#C4531A] rounded-full flex items-center justify-center shadow-2xl">
                        <svg className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- BEFORE/AFTER GALLERY --- */}
        {patient.gallery && patient.gallery.length > 0 && (
          <div className="mt-32 pt-20 border-t border-[#EAD8B3]/30">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-[10px] font-bold text-[#C4531A] tracking-[0.4em] uppercase">Documented Results</span>
                <h2 className="text-4xl font-serif mt-2">Clinical Transformation</h2>
              </div>
              <p className="text-gray-500 italic max-w-xs font-light">Documented evidence of our multi-stage Ayurvedic protocols.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {patient.gallery.map((img, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                    <img
                      src={img}
                      alt="Result"
                      className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase text-[#C4531A] tracking-widest">
                      {i === 0 ? "Baseline" : "Result"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- DOCTOR'S SIGNATURE NOTE --- */}
        <div className="mt-32 p-10 md:p-16 rounded-[3rem] bg-white border border-[#EAD8B3]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4531A]/5 rounded-bl-full" />
          <h3 className="text-2xl font-serif italic mb-6">Expert Reflection</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-8 italic max-w-2xl mx-auto">
            "The body possesses an innate intelligence to heal itself. Our role is simply to provide the ancient protocols that clear the path. {patient.name}'s recovery is a testament to the power of dedicated Ayurvedic practice."
          </p>
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-gray-900">Dr. R.K. Pal</span>
            <span className="text-[10px] uppercase tracking-widest text-[#C4531A]">Chief Ayurvedic Consultant</span>
          </div>
        </div>
      </main>

      {/* --- VIDEO MODAL --- */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 p-4 md:p-10 backdrop-blur-xl animate-in fade-in duration-500"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-[210] bg-white/10 hover:bg-[#C4531A] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all backdrop-blur-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${patient.youtubeId}?autoplay=1&rel=0`} title={patient.name} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialDetails;
