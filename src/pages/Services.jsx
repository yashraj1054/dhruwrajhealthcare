// import React from "react";
// import { services } from "../data/services";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// <Helmet>

// <title>
// Online Ayurvedic Consultation | Dhruwraj Healthcare
// </title>

// <meta
// name="description"
// content="Book online video consultation with Ayurvedic expert Dr R.K Pal for personalized Ayurvedic treatment."
// />

// <link rel="canonical" href="https://dhruwraj.com/services" />

// </Helmet>

// const Services = () => {
//   return (
//     <section className="bg-[#FDFBF3] py-10 min-h-screen">
//       <div className="max-w-7xl mx-auto px-6">

//         <h1 className="text-4xl font-bold text-center mb-16">
//           Consultation Services
//         </h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {services.map((item) => (
//             <Link
//               key={item.slug}
//               to={`/services/${item.slug}`}
//               className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-60 object-cover"
//                 loading="lazy"
//               />

//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-[#C4531A]">
//                   {item.name}
//                 </h3>
//               </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { services } from "../data/services";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <section className="bg-[#FDFBF3] py-16 md:py-24 min-h-screen selection:bg-[#C4531A]/20 overflow-x-hidden">
      <Helmet>
        <title>Online Ayurvedic Consultation | Dhruwraj Healthcare</title>
        <meta
          name="description"
          content="Book online video consultation with Ayurvedic expert Dr R.K Pal for personalized Ayurvedic treatment."
        />
        <link rel="canonical" href="https://dhruwraj.com/services" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Editorial Header */}
        <div className="relative mb-24 text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl md:text-[140px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            Treatments
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 text-[#1A1A1A] tracking-tight">
              Healing <span className="italic font-light text-[#C4531A]">Specialties</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed">
              Explore our specialized Ayurvedic consultation services, meticulously designed 
              to restore your body's natural equilibrium.
            </p>
          </div>
        </div>

        {/* Signature Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((item, index) => (
            <Link
              key={item.slug}
              to={`/services/${item.slug}`}
              className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(196,83,26,0.15)] transition-all duration-500 hover:-translate-y-2 border border-[#EAD8B3]/20"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image Area with Zoom & Overlay */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  loading="lazy"
                />
                {/* Floating Badge */}
                <div className="absolute top-5 right-5">
                   <div className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#C4531A]">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.2"/>
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 text-center flex flex-col items-center flex-grow">
                <span className="text-[10px] font-bold text-[#C4531A] tracking-[0.3em] uppercase mb-3">
                  Consultation
                </span>
                <h3 className="text-xl font-serif font-medium text-gray-900 group-hover:text-[#C4531A] transition-colors duration-300 mb-6 px-2">
                  {item.name}
                </h3>
                
                {/* Minimalist Action Link */}
                <div className="mt-auto pt-6 border-t border-gray-50 w-full">
                  <div className="text-[#C4531A] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn More <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-32 p-10 md:p-16 rounded-[3rem] bg-white border border-[#EAD8B3]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#C4531A]/5 rounded-br-full" />
          <h3 className="text-2xl md:text-3xl font-serif italic mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Our experts offer personalized consultations for a wide range of conditions beyond our standard listings.
          </p>
          <a 
            href="https://wa.me/919795053040" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-[#C4531A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20"
          >
            Ask an Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;