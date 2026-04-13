// import React from "react";

// import { useParams, useNavigate } from "react-router-dom";
// import { therapies } from "../data/therapies";

// import { Helmet } from "react-helmet-async";

// <Helmet>
// <title>{therapies.name} Treatment | Dhruwraj Healthcare</title>

// <meta
// name="description"
// content={`Learn about ${therapies.name} Ayurvedic therapy, its benefits, procedure and diseases it treats at Dhruwraj Healthcare.`}
// />
// </Helmet>

// const TherapyDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const therapy = therapies.find((t) => t.slug === slug);

//   if (!therapy) {
//     return <div className="p-20 text-center">Therapy not found.</div>;
//   }

//   const handleBooking = () => {
//     const message = `
// Hello, I would like to book the following therapy:

// Therapy Name: ${therapy.name}
// `;

//     const encoded = encodeURIComponent(message);
//     const number = "919795053040";

//     window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
//   };

//   return (
//     <section className="bg-[#FDFBF3] min-h-screen pb-24">

//       {/* ================= HERO SECTION ================= */}
//       <div className="relative h-[60vh] md:h-[70vh]">

//         {/* BACK BUTTON */}
//         <button
//           onClick={() => navigate("/therapies")}
//           className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
//         >
//           ← Back to Therapies
//         </button>

//         <img
//           src={therapy.image}
//           alt={therapy.name}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />

//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               {therapy.name}
//               {therapy.shloka && (
//                 <span className="block text-sm mt-4 text-white italic">
//                   {therapy.shloka}
//                 </span>
//               )}
//             </h1>
            

//             <button
//               onClick={handleBooking}
//               className="bg-[#C4531A] text-white px-8 py-3 rounded-full text-lg shadow-lg hover:opacity-90 transition"
//             >
//               Book This Therapy
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="max-w-5xl mx-auto px-6 py-16">

//         <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line mb-12">
//           {therapy.content}
//         </p>

//         <div className="bg-white rounded-3xl shadow-lg p-10">
//           <h2 className="text-2xl font-bold text-[#C4531A] mb-6">
//             Why Choose {therapy.name}?
//           </h2>

//           <ul className="space-y-4 text-gray-700">
//             <li>✔ 100% Natural & Safe Procedure</li>
//             <li>✔ Performed by Experienced Ayurvedic Experts</li>
//             <li>✔ Personalized Treatment Approach</li>
//             <li>✔ Proven Holistic Healing Results</li>
//           </ul>

//           <div className="mt-10">
//             <button
//               onClick={handleBooking}
//               className="bg-[#C4531A] text-white px-8 py-3 rounded-full hover:opacity-90 transition"
//             >
//               Book Appointment Now
//             </button>
//           </div>
//         </div>

//       </div>


//     </section>
//   );
// };

// export default TherapyDetails;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { therapies } from "../data/therapies";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from 'react-markdown';

const TherapyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const therapy = therapies.find((t) => t.slug === slug);

  if (!therapy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF3] font-serif italic text-xl">
        This healing ritual has not yet been chronicled.
      </div>
    );
  }

  const handleBooking = () => {
    const message = `Hello, I would like to book the following therapy: Therapy Name: ${therapy.name}`;
    const encoded = encodeURIComponent(message);
    const number = "919795053040";
    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-[#FDFBF3] min-h-screen selection:bg-[#C4531A]/10 overflow-x-hidden">
      <Helmet>
        <title>{therapy.name} Treatment | Dhruwraj Healthcare</title>
        <meta
          name="description"
          content={`Learn about ${therapy.name} Ayurvedic therapy, its benefits, procedure and diseases it treats.`}
        />
      </Helmet>

      {/* --- CINEMATIC HERO --- */}
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src={therapy.image}
          alt={therapy.name}
          className="w-full h-full object-cover scale-105"
          loading="lazy"
        />
        {/* Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF3] via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-24 md:pb-36 px-6">
          <span className="text-white/80 text-[10px] uppercase font-bold tracking-[0.5em] mb-4">
            Sacred Ritual
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-medium text-white leading-tight drop-shadow-2xl">
            {therapy.name}
          </h1>
          {therapy.shloka && (
            <p className="max-w-2xl text-white/90 italic font-serif text-sm md:text-lg mt-6 bg-black/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              {therapy.shloka}
            </p>
          )}
        </div>

        {/* Floating Back Button */}
        <button
          onClick={() => navigate("/therapies")}
          className="absolute top-8 left-6 md:left-12 z-20 bg-white/10 backdrop-blur-xl text-white border border-white/20 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:bg-[#C4531A] transition-all duration-500 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Rituals</span>
        </button>
      </div>

      {/* --- CONTENT ARCHITECTURE --- */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 md:-mt-32 relative z-10 pb-32">
        
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-[#EAD8B3]/20 overflow-hidden">
          
          <div className="pt-12 md:pt-20 px-8 md:px-20 pb-12 md:pb-20">
            
            {/* Treatment Intro Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 pb-12 border-b border-gray-50">
               <div>
                  <h2 className="text-3xl font-serif italic text-gray-900 mb-2">The Therapeutic Intent</h2>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#C4531A]"></span>
                    <p className="text-[#C4531A] text-[10px] font-bold uppercase tracking-widest">Ancient Panchakarma Protocol</p>
                  </div>
               </div>
               <button
                  onClick={handleBooking}
                  className="hidden md:block bg-[#C4531A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20"
                >
                  Book This Session
                </button>
            </div>

            {/* Description Body with Drop-Cap Styling */}
            <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light">
              <p className=" text-lg md:text-xl ">
                <ReactMarkdown>{therapy.content}</ReactMarkdown>
                {/* {therapy.content} */}
              </p>
            </div>
                

            {/* Benefit Invitation Card */}
            <div className="mt-24 p-8 md:p-16 rounded-[2.5rem] bg-[#FDFBF3] border border-[#EAD8B3]/30 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-[#C4531A]/5 rounded-bl-full" />
               
               <div className="relative z-10">
                  <h3 className="text-2xl font-serif italic mb-8">Why Honor the {therapy.name} Ritual?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                    {[
                      "100% Authentic Vedic Procedure",
                      "Experienced Therapists & Practitioners",
                      "Customized to your Dosha (Prakriti)",
                      "Clinical Grade Healing Oils"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm text-gray-700 font-medium">
                        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#C4531A] border border-[#C4531A]/10 text-[10px]">✔</span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button
                      onClick={handleBooking}
                      className="w-full sm:w-auto bg-[#C4531A] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20"
                    >
                      Reserve Your Session
                    </button>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                      Slots confirm within 24 hours
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE STICKY BUTTON --- */}
      {/* <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <button
          onClick={handleBooking}
          className="w-full bg-[#C4531A] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-[#C4531A]/40 active:scale-95 transition-transform"
        >
          Book {therapy.name} Now
        </button>
      </div> */}

    </section>
  );
};

export default TherapyDetails;