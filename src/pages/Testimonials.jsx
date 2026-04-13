// import React, { useState } from "react";

// import { testimonials } from "../data/testimonials";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// <Helmet>

// <title>
// Patient Testimonials | Dhruwraj Healthcare
// </title>

// <meta
// name="description"
// content="Watch real patient testimonials and success stories of Ayurvedic treatments at Dhruwraj Healthcare."
// />

// <link rel="canonical" href="https://dhruwraj.com/testimonials" />

// </Helmet>

// const Testimonials = () => {
//   const [filter, setFilter] = useState("All");
//   const [search, setSearch] = useState("");

//   const allTestimonials = Object.values(testimonials).flat();

//   const diseases = [
//     "All",
//     ...new Set(allTestimonials.map((t) => t.disease))
//   ];

//   const filtered = allTestimonials.filter((t) => {
//     const matchDisease =
//       filter === "All" || t.disease === filter;

//     const matchSearch =
//       t.name.toLowerCase().includes(search.toLowerCase()) ||
//       t.disease.toLowerCase().includes(search.toLowerCase());

//     return matchDisease && matchSearch;
//   });

//   return (
//     <section className="bg-[#FDFBF3] py-10 min-h-screen">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Hero */}
//         <div className="text-center mb-7">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Happy Patients
//           </h1>
//           <p className="text-gray-600">
//             Real recovery stories from our Ayurvedic treatments
//           </p>
//         </div>

//         {/* Search */}
//         <div className="flex justify-center mb-10">
//           <input
//             type="text"
//             placeholder="Search patient..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full md:w-1/3 border p-3 rounded-full focus:ring-2 focus:ring-[#C4531A]"
//           />
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {diseases.map((disease, index) => (
//             <button
//               key={index}
//               onClick={() => setFilter(disease)}
//               className={`px-6 py-2 cursor-pointer rounded-full transition ${
//                 filter === disease
//                   ? "bg-[#C4531A] text-white"
//                   : "bg-white border border-[#C4531A] text-[#C4531A]"
//               }`}
//             >
//               {disease}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         {/* <div className="grid md:grid-cols-3 gap-10">
//           {filtered.map((patient) => (
//             <Link
//               key={patient.slug}
//               to={`/testimonials/${patient.slug}`}
//               className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden"
//             >
//               <img
//                 src={patient.image}
//                 alt={patient.name}
//                 className="w-full h-72 object-cover"
//                 loading="lazy"
//               />

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-[#C4531A]">
//                   {patient.name}
//                 </h3>
//                 <p className="text-gray-600 mt-2">
//                   {patient.issue}
//                 </p>
//                 <span className="inline-block mt-4 text-xs bg-[#FDFBF3] px-3 py-1 rounded-full">
//                   {patient.disease}
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div> */}
//         <div className="grid md:grid-cols-3 gap-8">
//   {filtered.map((patient) => (
//     <Link
//       key={patient.slug}
//       to={`/testimonials/${patient.slug}`}
//       className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col p-6"
//     >
//       {/* Google Style Header */}
//       <div className="flex items-center gap-4 mb-4">
//         <div className="relative">
//           <img
//             src={patient.image}
//             alt={patient.name}
//             className="w-16 h-16 rounded-full object-cover border-2 border-[#FDFBF3] shadow-sm"
//             loading="lazy"
//           />
//           {/* Verified Checkmark Badge */}
//           <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white">
//             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//         </div>
        
//         <div className="flex-1">
//           <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C4531A] transition-colors">
//             {patient.name}
//           </h3>
//           <div className="flex items-center gap-1">
//             <div className="flex text-yellow-400 text-sm">
//               {"★".repeat(5)}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Review Body */}
//       <div className="flex-grow">
//         <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 italic">
//           "{patient.testimonialSnippet || `I was struggling with ${patient.issue} for a long time. After the treatment, I feel much better and the results are amazing...`}"
//         </p>
//       </div>

//       {/* Bottom Tags / Meta */}
//       <div className="mt-6 pt-4 border-t border-gray-50 flex flex-wrap gap-2">
//         <span className="text-[11px] font-bold uppercase tracking-wider text-[#C4531A] bg-[#FDFBF3] px-3 py-1 rounded-md">
//           {patient.issue}
//         </span>
//         {/* <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
//           {patient.disease}
//         </span> */}
//       </div>
      
//       <div className="mt-4 text-[#C4531A] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
//         Read Full Story <span>→</span>
//       </div>
//     </Link>
//   ))}
// </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useState } from "react";
import { testimonials } from "../data/testimonials";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Testimonials = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const allTestimonials = Object.values(testimonials).flat();

  const diseases = ["All", ...new Set(allTestimonials.map((t) => t.disease))];

  const filtered = allTestimonials.filter((t) => {
    const matchDisease = filter === "All" || t.disease === filter;
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.disease.toLowerCase().includes(search.toLowerCase());

    return matchDisease && matchSearch;
  });

  return (
    <section className="bg-[#FDFBF3] py-16 md:py-24 min-h-screen selection:bg-[#C4531A]/20 overflow-x-hidden">
      <Helmet>
        <title>Patient Testimonials | Dhruwraj Healthcare</title>
        <meta name="description" content="Watch real patient testimonials and success stories." />
        <link rel="canonical" href="https://dhruwraj.com/testimonials" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Editorial Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl md:text-[140px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            Recovery
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 text-[#1A1A1A] tracking-tight">
              Healing <span className="italic font-light text-[#C4531A]">Chronicles</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed">
              Real voices, authentic journeys, and the profound impact of ancestral Ayurvedic care.
            </p>
          </div>
        </div>

        {/* Enhanced Search & Filter Section */}
        <div className="flex flex-col items-center gap-10 mb-20">
          {/* Glassmorphism Search */}
          <div className="relative w-full max-w-xl group">
            <input
              type="text"
              placeholder="Find a recovery story..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/50 backdrop-blur-md border border-[#EAD8B3]/50 py-4 px-14 rounded-full focus:ring-2 focus:ring-[#C4531A]/20 focus:border-[#C4531A] outline-none transition-all shadow-sm hover:shadow-md"
            />
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#C4531A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="w-full max-w-full overflow-x-auto no-scrollbar">
            <div className="flex md:justify-center items-center gap-4 md:gap-8 pb-4 min-w-max px-2">
              {diseases.map((disease) => (
                <button
                  key={disease}
                  onClick={() => setFilter(disease)}
                  className={`relative py-2 text-[11px] md:text-sm uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                    filter === disease ? "text-[#C4531A] font-bold" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {disease}
                  {filter === disease && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C4531A] transition-all duration-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((patient, index) => (
            <Link
              key={patient.slug}
              to={`/testimonials/${patient.slug}`}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(196,83,26,0.15)] transition-all duration-500 flex flex-col border border-[#EAD8B3]/20 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Header: Photo & Name */}
              <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-[#C4531A] to-[#EAD8B3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={patient.image}
                    alt={patient.name}
                    className="relative w-16 h-16 rounded-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 border-2 border-white"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-gray-900 leading-tight">
                    {patient.name}
                  </h3>
                  <div className="flex text-[#C4531A] mt-1">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>

              {/* Body: Quote */}
              <div className="flex-grow">
                <div className="text-[#C4531A] text-4xl font-serif opacity-20 leading-none mb-[-10px]">“</div>
                <p className="text-gray-600 font-light italic leading-relaxed text-base line-clamp-4">
                  {patient.testimonialSnippet || `The transformation I've experienced under the care of Dr. R.K. Pal is nothing short of miraculous. My journey with ${patient.issue} finally found its solution here.`}
                </p>
                <div className="text-[#C4531A] text-4xl font-serif opacity-20 leading-none text-right mt-[-10px]">”</div>
              </div>

              {/* Footer: Tags & Action */}
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4531A] bg-[#FDFBF3] px-3 py-1.5 rounded-lg border border-[#C4531A]/10">
                  {patient.issue}
                </span>
                <div className="text-[#C4531A] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Full Story <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-40">
            <p className="font-serif italic text-2xl text-gray-300">More stories are unfolding...</p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Testimonials;