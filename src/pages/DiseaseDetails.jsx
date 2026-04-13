// import { useParams, useNavigate } from "react-router-dom";
// import { diseases } from "../data/diseases";
// import ReactMarkdown from 'react-markdown'

// const DiseaseDetails = () => {
//   const { category, slug } = useParams();
//   const navigate = useNavigate();

//   const categoryData = diseases.find(
//     (cat) => cat.categorySlug === category
//   );

//   const disease =
//     categoryData?.diseases.find((d) => d.slug === slug);

//   if (!disease) {
//     return <div className="p-20 text-center">Not Found</div>;
//   }

//   const handleBooking = () => {
//     const message = `
// Hello, I would like to conusult for the following disease:

// Disease Name: ${disease.name}
// `;

//     const encoded = encodeURIComponent(message);
//     const number = "919795053040";

//     window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
//   };

//   return (
//     <section className="bg-[#FDFBF3] min-h-screen">

//       <div className="relative h-[60vh]">
//         <img
//           src={disease.image}
//           alt={disease.name}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col gap-1 items-center justify-center text-white">
//           <h1 className="text-4xl font-bold text-center">{disease.name}</h1>
//           <h4 className="text-xl font-bold text-center">{disease.nameHindi}</h4>
//           <button
//           onClick={() => navigate(`/diseases/${category}`)}
//           className="absolute top-6 left-6 z-20 bg-white/90 text-black backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
//         >
//           ← Back to {categoryData.categoryName}
//         </button>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-6 py-16">
//         {/* <button
//           onClick={() => navigate("/diseases")}
//           className="text-[#C4531A] mb-6"
//         >
//           ← Back to Diseases
//         </button> */}

//         <p className="whitespace-pre-line text-lg text-gray-700">
//           <div className="prose prose-slate max-w-none">
//   <ReactMarkdown>
//     {disease.content}
//   </ReactMarkdown>
// </div>
//         </p>
       


// <div className="bg-white rounded-3xl shadow-lg p-10 mt-4">
//           <h2 className="text-2xl font-bold text-[#C4531A] mb-6">
//             Why Consult Us?
//           </h2>

//           <ul className="space-y-4 text-gray-700">
//             <li>✔ We Follow 100% Natural & Safe Procedure</li>
//             <li>✔ Performed by Experienced Ayurvedic Expert</li>
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

// export default DiseaseDetails;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { diseases } from "../data/diseases";
import ReactMarkdown from 'react-markdown';

const DiseaseDetails = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  const categoryData = diseases.find((cat) => cat.categorySlug === category);
  const disease = categoryData?.diseases.find((d) => d.slug === slug);

  if (!disease) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF3] font-serif italic text-xl">
        The clinical profile you seek is currently being chronicled.
      </div>
    );
  }

  const handleBooking = () => {
    const message = `Hello, I would like to consult for: ${disease.name}`;
    const encoded = encodeURIComponent(message);
    const number = "919795053040";
    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-[#FDFBF3] min-h-screen selection:bg-[#C4531A]/10 overflow-x-hidden">
      
      {/* --- CINEMATIC HERO --- */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <img
          src={disease.image}
          alt={disease.name}
          className="w-full h-full object-cover scale-105"
          loading="lazy"
        />
        {/* Editorial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF3] via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-24 md:pb-36 px-6">
          <span className="text-white/80 text-[10px] uppercase font-bold tracking-[0.5em] mb-4">
            Clinical Profile
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-medium text-white leading-tight drop-shadow-2xl">
            {disease.name}
          </h1>
          <h4 className="text-xl md:text-2xl font-serif italic text-white/90 font-light mt-2">
            {disease.nameHindi}
          </h4>
        </div>

        {/* Floating Back Button */}
        <button
          onClick={() => navigate(`/diseases/${category}`)}
          className="absolute top-8 left-6 md:left-12 z-20 bg-white/10 backdrop-blur-xl text-white border border-white/20 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:bg-[#C4531A] transition-all duration-500 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to {categoryData.categoryName}</span>
        </button>
      </div>

      {/* --- CONTENT ARCHITECTURE --- */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 md:-mt-32 relative z-10 pb-32">
        
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-[#EAD8B3]/20 overflow-hidden">
          
          <div className="pt-12 md:pt-20 px-8 md:px-20 pb-12 md:pb-20">
            
            {/* Clinical Overview Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 pb-12 border-b border-gray-50">
               <div>
                  <h2 className="text-3xl font-serif italic text-gray-900 mb-2">Ayurvedic Perspective</h2>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#C4531A]"></span>
                    <p className="text-[#C4531A] text-[10px] font-bold uppercase tracking-widest">Root-Cause Restoration</p>
                  </div>
               </div>
               <button
                  onClick={handleBooking}
                  className="hidden md:block bg-[#C4531A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20"
                >
                  Request Consultation
                </button>
            </div>

            {/* Markdown Body with Luxury Styling */}
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light prose-strong:text-[#C4531A] prose-strong:font-bold prose-li:text-gray-600">
              <ReactMarkdown>
                {disease.content}
              </ReactMarkdown>
            </div>

            {/* Trust Invitation Card */}
            <div className="mt-24 p-8 md:p-16 rounded-[2.5rem] bg-[#FDFBF3] border border-[#EAD8B3]/30 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-[#C4531A]/5 rounded-bl-full" />
               
               <div className="relative z-10">
                  <h3 className="text-2xl font-serif italic mb-8 text-gray-900">Why Consult Our Experts?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                    {[
                      "100% Natural & Side-Effect Free",
                      "Senior Ayurvedic Consultants",
                      "Personalized Pathya (Diet) Plans",
                      "Documented Clinical Results"
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
                      Book Appointment Now
                    </button>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                      Secure Digital Consultation
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
          Consult for {disease.name}
        </button>
      </div> */}

    </section>
  );
};

export default DiseaseDetails;