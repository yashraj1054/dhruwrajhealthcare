// import { Link } from "react-router-dom";
// import { diseases } from "../data/diseases";
// import { Helmet } from "react-helmet-async";

// <Helmet>

// <title>
// Ayurvedic Treatment for Diseases | Dhruwraj Healthcare
// </title>

// <meta
// name="description"
// content="Explore Ayurvedic treatment for diabetes, thyroid, joint pain, skin diseases and other chronic conditions at Dhruwraj Healthcare."
// />

// <link rel="canonical" href="https://dhruwraj.com/diseases" />

// </Helmet>

// const Diseases = () => {
//   return (
//     <section className="bg-[#FDFBF3] min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold">
//             Diseases We Treat
//           </h1>
//         </div>

//         {/* Category Cards */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {diseases.map((category) => (
//             <Link
//               key={category.categorySlug}
//               to={`/diseases/${category.categorySlug}`}
//               className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
//             >

//               {/* Image (First disease image as thumbnail) */}
//               <img
//                 src={category.image}
//                 alt={category.categoryName}
//                 className="w-full h-56 object-cover"
//                 loading="lazy"
//               />

//               <div className="p-6">
//                 <h2 className="text-2xl font-semibold text-gray-800">
//                   {category.categoryName}
//                 </h2>
//                 <h4 className="text-2xl font-semibold text-gray-800">
//                   ( {category.categoryNameHindi} )
//                 </h4>

//                 <p className="text-gray-500 mt-2">
//                   {category.diseases.length} Conditions Covered
//                 </p>
//               </div>

//             </Link>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Diseases;

import React from "react";
import { Link } from "react-router-dom";
import { diseases } from "../data/diseases";
import { Helmet } from "react-helmet-async";

const Diseases = () => {
  return (
    <section className="bg-[#FDFBF3] min-h-screen py-16 md:py-24 selection:bg-[#C4531A]/10 overflow-x-hidden">
      <Helmet>
        <title>Ayurvedic Treatment for Diseases | Dhruwraj Healthcare</title>
        <meta
          name="description"
          content="Explore Ayurvedic treatment for diabetes, thyroid, joint pain, skin diseases and other chronic conditions at Dhruwraj Healthcare."
        />
        <link rel="canonical" href="https://dhruwraj.com/diseases" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Editorial Header */}
        <div className="relative mb-24 text-center">
          {/* Watermark Background */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl md:text-[140px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            Recovery
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-[#1A1A1A] tracking-tight">
              Clinical <span className="italic font-light text-[#C4531A]">Specialties</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              From chronic metabolic shifts to musculoskeletal restoration, we provide 
              protocol-based Ayurvedic care for a diverse spectrum of conditions.
            </p>
          </div>
        </div>

        {/* Category Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {diseases.map((category, index) => (
            <Link
              key={category.categorySlug}
              to={`/diseases/${category.categorySlug}`}
              className="group flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image Area with Boutique Framing */}
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[8/5] mb-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] group-hover:shadow-[0_30px_60px_-15px_rgba(196,83,26,0.15)] transition-all duration-700">
                <img
                  src={category.image}
                  alt={category.categoryName}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Floating Count Badge */}
                <div className="absolute top-6 right-6">
                   <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-white/20">
                      <p className="text-[#C4531A] text-[10px] font-black uppercase tracking-widest">
                        {category.diseases.length} Protocols
                      </p>
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="px-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-[#C4531A] group-hover:w-12 transition-all duration-500"></span>
                  <span className="text-[10px] font-bold text-[#C4531A] uppercase tracking-[0.3em]">
                    Disease Category
                  </span>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 leading-tight group-hover:text-[#C4531A] transition-colors duration-300">
                    {category.categoryName}
                  </h2>
                  <h3 className="text-lg md:text-xl font-serif italic text-gray-400 font-light mt-1">
                    {category.categoryNameHindi}
                  </h3>
                </div>

                {/* Minimalist Action Link */}
                <div className="flex items-center gap-3 text-[#C4531A] text-xs font-bold uppercase tracking-widest">
                  <span>View Treatments</span>
                  <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-32 p-10 md:p-20 rounded-[3rem] bg-white border border-[#EAD8B3]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C4531A]/5 rounded-bl-full" />
          <h3 className="text-2xl md:text-4xl font-serif italic mb-6">Need a personalized assessment?</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-xl mx-auto italic">
            "Ayurveda treats the patient, not just the disease. Connect with us to begin your individual path to restoration."
          </p>
          <Link
            to="/book-appointment"
            className="inline-block bg-[#C4531A] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Diseases;