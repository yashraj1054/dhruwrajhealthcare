// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { services } from "../data/services";

// const ServiceDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const service = services.find((s) => s.slug === slug);

//   if (!service) {
//     return <div className="p-20 text-center">Service Not Found</div>;
//   }

//   const handleBooking = () => {
//     const message = `
// Hello, I would like to book:

// Service: ${service.name}
//     `;

//     const encoded = encodeURIComponent(message);
//     const number = "919795053040";

//     window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
//   };

//   return (
//     <section className="bg-white min-h-screen pb-20">

//       {/* Hero */}
//       <div className="relative h-[60vh]">
//         <img
//           src={service.image}
//           alt={service.name}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />

//         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             {service.name}
//           </h1>
//           <button
//           onClick={() => navigate("/services")}
//           className="absolute top-6 left-6 z-20 bg-white/90 text-black backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
//         >
//           ← Back to Services
//         </button>

//           <button
//             onClick={handleBooking}
//             className="mt-6 bg-[#C4531A] px-8 py-3 rounded-full"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-6 py-16">

//         {/* <button
//           onClick={() => navigate("/services")}
//           className="mb-8 text-[#C4531A]"
//         >
//           ← Back to Services
//         </button> */}

//         <p className="text-lg text-gray-700 whitespace-pre-line">
//           {service.description}
//         </p>

//       </div>

//       {/* Mobile Sticky Button */}
//       <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg p-4">
//         <button
//           onClick={handleBooking}
//           className="w-full bg-[#C4531A] text-white py-3 rounded-full"
//         >
//           Book Consultation
//         </button>
//       </div>

//     </section>
//   );
// };

// export default ServiceDetails;


import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/services";
import ReactMarkdown from 'react-markdown';

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF3] font-serif italic text-xl">
        The service you seek has not yet been chronicled.
      </div>
    );
  }

  const handleBooking = () => {
    const message = `Hello, I would like to book: Service: ${service.name}`;
    const encoded = encodeURIComponent(message);
    const number = "919795053040";
    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-[#FDFBF3] min-h-screen selection:bg-[#C4531A]/10">
      
      {/* --- IMMERSIVE HERO --- */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover scale-105"
          loading="lazy"
        />
        {/* Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF3] via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-20 md:pb-32 px-6">
          <span className="text-white/80 text-[10px] uppercase font-bold tracking-[0.4em] mb-4">
            Signature Offering
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-medium text-white leading-tight drop-shadow-2xl">
            {service.name}
          </h1>
        </div>

        {/* Floating Back Button */}
        <button
          onClick={() => navigate("/services")}
          className="absolute top-8 left-6 md:left-12 z-20 bg-white/10 backdrop-blur-xl text-white border border-white/20 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:bg-[#C4531A] transition-all duration-500 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          <span className="text-[10px] font-bold uppercase tracking-widest">Treatments</span>
        </button>
      </div>

      {/* --- CONTENT ARCHITECTURE --- */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 md:-mt-24 relative z-10 pb-22">
        
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-[#EAD8B3]/20 overflow-hidden">
          
          <div className="pt-12 md:pt-16 px-8 md:px-20 pb-12 md:pb-20">
            {/* Header section in content card */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 pb-5 border-b border-gray-50">
               <div>
                  <h2 className="text-3xl font-serif italic text-gray-900 mb-2">The Healing Intent</h2>
                  <p className="text-[#C4531A] text-xs font-bold uppercase tracking-widest">Protocol-based Ayurvedic Care</p>
               </div>
               <button
                  onClick={handleBooking}
                  className=" md:block bg-[#C4531A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20"
                >
                  Request Consultation
                </button>
            </div>

            {/* Description Body */}
            <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light">
              <p className=" text-lg md:text-xl">
                <ReactMarkdown>{service.description}</ReactMarkdown>
              </p>
            </div>

            {/* Why Consult Card (Trust Signal) */}
            <div className="mt-10 p-8 md:p-12 rounded-[2.5rem] bg-[#FDFBF3] border border-[#EAD8B3]/30 flex flex-col md:flex-row items-center gap-10">
               <div className="flex-1">
                  <h3 className="text-2xl font-serif italic mb-6">Consultation Excellence</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Natural Protocols", "Expert Guidance", "Prakriti Analysis", "Lifestyle Design"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                        <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#C4531A] border border-[#C4531A]/20 text-[10px]">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="w-full md:w-auto">
                 <button
                    onClick={handleBooking}
                    className="w-full bg-white border-2 border-[#C4531A] text-[#C4531A] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#C4531A] hover:text-white transition-all"
                  >
                    Start Your Path
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE STICKY FOOTER --- */}
      {/* <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <button
          onClick={handleBooking}
          className="w-full bg-[#C4531A] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-[#C4531A]/40 active:scale-95 transition-transform"
        >
          Book Consultation Now
        </button>
      </div> */}

    </section>
  );
};

export default ServiceDetails;