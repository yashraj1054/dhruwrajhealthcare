// import { useParams, useNavigate, Link } from "react-router-dom";
// import { diseases } from "../data/diseases";

// const CategoryDiseases = () => {
//   const { category } = useParams();

//   const navigate = useNavigate();

//   const categoryData = diseases.find(
//     (cat) => cat.categorySlug === category
//   );

//   if (!categoryData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold">Category Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-[#FDFBF3] min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Back Button */}
// <button
//   onClick={() => navigate("/diseases")}
//   className="mb-10 flex items-center gap-2 text-[#C4531A] hover:underline"
// >
//   ← Back to All Diseases
// </button>

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold">
//             {categoryData.categoryName}
//           </h1>
//           <p className="text-gray-600 mt-4">
//             Ayurvedic Treatment for {categoryData.categoryName}
//           </p>
//         </div>

//         {/* Disease Cards */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {categoryData.diseases.map((disease) => (
//             <Link
//               key={disease.slug}
//               to={`/diseases/${category}/${disease.slug}`}
//               className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-1"
//             >

//               <img
//                 src={disease.image}
//                 alt={disease.name}
//                 className="w-full h-56 object-cover"
//                 loading="lazy"
//               />

//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {disease.name} ( {disease.nameHindi} )
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   Click to know more about Ayurvedic treatment.
//                 </p>
//               </div>

//             </Link>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default CategoryDiseases;

import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { diseases } from "../data/diseases";

const CategoryDiseases = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData = diseases.find(
    (cat) => cat.categorySlug === category
  );

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF3]">
        <h1 className="text-3xl font-serif italic text-gray-400">Category not found...</h1>
      </div>
    );
  }

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-16 md:py-24 selection:bg-[#C4531A]/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* --- PREMIUM NAVIGATION --- */}
        <button
          onClick={() => navigate("/diseases")}
          className="group mb-12 flex items-center gap-3 text-[10px] font-bold text-[#C4531A] hover:text-[#a34415] transition-all uppercase tracking-[0.3em]"
        >
          <span className="w-8 h-[1px] bg-[#C4531A] group-hover:w-12 transition-all"></span> 
          Back to Specialties
        </button>

        {/* --- EDITORIAL HEADER --- */}
        <div className="relative mb-20">
          {/* Watermark */}
          <div className="absolute -top-10 left-0 text-4xl md:text-[140px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            {categoryData.categoryName.split(' ')[0]}
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-4">
              {categoryData.categoryName} <br />
              <span className="italic font-light text-[#C4531A]">Solutions</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-xl text-base md:text-lg font-light leading-relaxed">
              Explore our specialized protocols for {categoryData.categoryName.toLowerCase()}, 
              designed to address the root causes of imbalances through ancestral wisdom.
            </p>
          </div>
        </div>

        {/* --- DISEASE CATALOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {categoryData.diseases.map((disease, index) => (
            <Link
              key={disease.slug}
              to={`/diseases/${category}/${disease.slug}`}
              className="group flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image with Boutique Aspect Ratio */}
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[8/5] mb-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_60px_-15px_rgba(196,83,26,0.15)] transition-all duration-700 border border-[#EAD8B3]/20">
                <img
                  src={disease.image}
                  alt={disease.name}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Visual Reveal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-[10px] font-bold uppercase tracking-widest border-b border-white/40 pb-2">
                    View Treatment Path
                  </p>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <div className="flex flex-col gap-1 mb-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 leading-tight group-hover:text-[#C4531A] transition-colors duration-300">
                    {disease.name}
                  </h2>
                  <h3 className="text-lg font-serif italic text-gray-400 font-light">
                    {disease.nameHindi}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-[#C4531A] text-xs font-bold uppercase tracking-widest">
                  <span className="w-6 h-[1px] bg-[#C4531A] group-hover:w-10 transition-all duration-500"></span>
                  <span>Read Profile</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- EMPTY STATE --- */}
        {categoryData.diseases.length === 0 && (
          <div className="text-center py-40">
            <p className="font-serif italic text-2xl text-gray-300">Expanding our clinical profiles...</p>
          </div>
        )}
      </div>

      {/* Tailwind Utility for animations if not present */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideInFromBottom {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-in { animation: slideInFromBottom 0.7s ease-out forwards; }
      `}} />
    </section>
  );
};

export default CategoryDiseases;