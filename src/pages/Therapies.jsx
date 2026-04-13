// import React from "react";
// import { therapies } from "../data/therapies";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// <Helmet>

// <title>
// Panchkarma Therapy in Kanpur | Ayurvedic Treatments
// </title>

// <meta
// name="description"
// content="Experience authentic Panchkarma therapies like Shirodhara, Nasya and Abhyanga at Dhruwraj Healthcare Ayurvedic clinic."
// />

// <link rel="canonical" href="https://dhruwraj.com/therapies" />

// </Helmet>

// const Therapies = () => {
//   return (
//     <section className="bg-[#FDFBF3] py-10 min-h-screen">
//       <div className="max-w-7xl mx-auto px-6">

//         <h2 className="text-4xl font-bold text-center mb-16">
//           Our Ayurvedic Therapies
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
//           {therapies.map((therapy) => (
//             <Link
//               key={therapy.slug}
//               to={`/therapy/${therapy.slug}`}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden"
//             >
//               <img
//                 src={therapy.image}
//                 alt={therapy.name}
//                 className="w-full h-52 object-cover"
//                 loading="lazy"
//               />
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-[#C4531A]">
//                   {therapy.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-2">
//                   {therapy.shortDescription}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Therapies;

import React from "react";
import { therapies } from "../data/therapies";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from 'react-markdown';

const Therapies = () => {
  return (
    <section className="bg-[#FDFBF3] py-16 md:py-24 min-h-screen selection:bg-[#C4531A]/10 overflow-x-hidden">
      <Helmet>
        <title>Panchkarma Therapy in Kanpur | Ayurvedic Treatments</title>
        <meta
          name="description"
          content="Experience authentic Panchkarma therapies like Shirodhara, Nasya and Abhyanga at Dhruwraj Healthcare Ayurvedic clinic."
        />
        <link rel="canonical" href="https://dhruwraj.com/therapies" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Editorial Watermark Header */}
        <div className="relative mb-20 text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl md:text-[140px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            Purify
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 text-[#1A1A1A] tracking-tight">
              Healing <span className="italic font-light text-[#C4531A]">Rituals</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed px-4">
              Step into a world of profound detoxification. Our Panchakarma therapies are 
              sacred rituals designed to cleanse the body and still the mind.
            </p>
          </div>
        </div>

        {/* Therapy Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {therapies.map((therapy, index) => (
            <Link
              key={therapy.slug}
              to={`/therapy/${therapy.slug}`}
              className="group flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image Container with Elegant Zoom */}
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[7/5] mb-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_50px_-12px_rgba(196,83,26,0.15)] transition-all duration-700">
                <img
                  src={therapy.image}
                  alt={therapy.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Visual Label overlay */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl text-center">
                      <p className="text-[#C4531A] text-[10px] font-black uppercase tracking-[0.3em]">
                        View Ritual Details
                      </p>
                   </div>
                </div>
              </div>

              {/* Therapy Content */}
              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[1px] bg-[#C4531A]"></span>
                  <span className="text-[10px] font-bold text-[#C4531A] uppercase tracking-[0.2em]">Authentic Panchakarma</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 group-hover:text-[#C4531A] transition-colors duration-300 mb-4">
                  {therapy.name}
                </h3>
                
                <p className="text-[#6B6B6B] text-sm md:text-base font-light leading-relaxed line-clamp-2 italic">
                  {therapy.shortDescription}
                </p>

                {/* Animated Signature Link */}
                <div className="mt-6 flex items-center gap-3 text-[#C4531A] text-xs font-bold uppercase tracking-widest">
                  <span>Explore Path</span>
                  <span className="w-10 h-[1px] bg-[#C4531A] transition-all duration-500 group-hover:w-16"></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Closing Sanctuary Banner */}
        <div className="mt-32 p-12 md:p-20 rounded-[3rem] bg-white border border-[#EAD8B3]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C4531A]/5 rounded-bl-full" />
          <h3 className="text-3xl font-serif italic mb-6">Unsure which path to choose?</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Our doctors will analyze your <span className="text-gray-900 font-medium">Prakriti (constitution)</span> to recommend the most beneficial sequence of therapies for your body.
          </p>
          <Link
            to="/book-appointment"
            className="inline-block bg-[#C4531A] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20"
          >
            Consult Our Specialist
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Therapies;