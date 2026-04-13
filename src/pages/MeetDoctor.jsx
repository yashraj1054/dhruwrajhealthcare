// import React from "react";
// import { Link } from "react-router-dom";

// const MeetDoctor = () => {
//   return (
//     <section className="bg-[#FDFBF3] min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Page Heading */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold mb-4">
//             Meet Our Doctor
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Combining ancient Ayurvedic wisdom with modern clinical practice,
//             our expert doctor is dedicated to providing personalized and
//             holistic healthcare solutions.
//           </p>
//         </div>

//         {/* Doctor Profile */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* Doctor Image */}
//           <div className="flex justify-center">
//             <img
//               src="/images/doctor3.jpg"
//               alt="Dr RK Pal"
//               className="rounded-3xl shadow-xl w-full max-w-md object-cover"
//               loading="lazy"
//             />
//           </div>

//           {/* Doctor Info */}
//           <div>

//             <h2 className="text-3xl font-bold mb-2">
//               Dr. R.K Pal
//             </h2>

//             <h3 className="text-lg text-[#7A3E1D] mb-4">
//               Ayurvedic Expert & Panchkarma Specialist
//             </h3>

//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Dr. R.K. Pal is a highly experienced Ayurvedic physician with more than 12+ years of clinical as well as academic experience. 
//               He is currently working as an Associate Professor in the Department of Panchakarma. 
//               He is also an author of Ayurvedic academic books and has published many articles in journals related to Ayurveda and Panchakarma therapies. 
//               He has successfully treated thousands of patients suffering from chronic diseases using authentic Ayurvedic treatments.
//             </p>

//             {/* Qualification */}
//             <div className="mb-6">
//               <h4 className="font-semibold text-lg mb-2 text-[#C4531A]">
//                 Qualifications
//               </h4>

//               <ul className="space-y-1 text-gray-700">
//                 <li> <b>1. B.A.M.S.</b>  – Bachelor of Ayurvedic Medicine & Surgery</li>
//                 <li> <b>2. M.D.</b>  – Panchkarma </li>
//                 <li> <b>3. C.A.R.D</b> – Certificate in Anorectal Disease</li>
//                 <li> <b>4. Ph.D. (Sch.)</b> – Ayurveda Medicine</li>
//               </ul>
//             </div>

//             {/* Expertise */}
//             <div className="mb-8">
//               <h4 className="font-semibold text-lg mb-2 text-[#C4531A]">
//                 Areas of Expertise
//               </h4>

//               <ul className="grid grid-cols-2 gap-2 text-gray-700">
//                 <li>✔ Joint Pain & Arthritis</li>
//                 <li>✔ Diabetes Management</li>
//                 <li>✔ Thyroid & PCOD</li>
//                 <li>✔ Infertility Treatment</li>
//                 <li>✔ Digestive Disorders</li>
//                 <li>✔ Panchkarma Detox</li>
//               </ul>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 mb-10">

//               <div className="bg-white rounded-xl p-4 shadow text-center">
//                 <h3 className="text-2xl font-bold text-[#C4531A]">12+</h3>
//                 <p className="text-sm text-gray-600">Years Experience</p>
//               </div>

//               <div className="bg-white rounded-xl p-4 shadow text-center">
//                 <h3 className="text-2xl font-bold text-[#C4531A]">8000+</h3>
//                 <p className="text-sm text-gray-600">Patients Treated</p>
//               </div>

//               <div className="bg-white rounded-xl p-4 shadow text-center">
//                 <h3 className="text-2xl font-bold text-[#C4531A]">20+</h3>
//                 <p className="text-sm text-gray-600">Therapies</p>
//               </div>

//             </div>

//             {/* CTA Button */}
//             <Link
//               to="/book-appointment"
//               className="inline-block bg-[#C4531A] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
//             >
//               Book Consultation
//             </Link>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default MeetDoctor;

import React from "react";
import { Link } from "react-router-dom";

const MeetDoctor = () => {
  return (
    <section className="bg-[#FDFBF3] min-h-screen py-16 md:py-24 selection:bg-[#C4531A]/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Editorial Watermark Header */}
        <div className="relative mb-20 text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl md:text-[140px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            Expertise
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 text-[#1A1A1A] tracking-tight">
              Meet Our <span className="italic font-light text-[#C4531A]">Specialist</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Bridging the gap between ancient Vedic wisdom and modern clinical precision 
              through personalized, protocol-based healing.
            </p>
          </div>
        </div>

        {/* Doctor Profile Grid */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* Left: Doctor Image with Premium Framing */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="relative group">
              {/* Decorative accent behind image */}
              <div className="absolute -inset-4 bg-[#EAD8B3]/20 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
              
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/5]">
                <img
                  src="/images/doctor3.jpg"
                  alt="Dr RK Pal"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  loading="lazy"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                  <p className="text-[#C4531A] text-[10px] font-black uppercase tracking-[0.3em] mb-1">
                    Chief Consultant
                  </p>
                  <h2 className="text-2xl font-serif font-medium text-gray-900 leading-tight">
                    Dr. R.K. Pal
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Content */}
          <div className="lg:col-span-7 pt-4">
            
            <div className="mb-10">
              <span className="text-[10px] font-bold text-[#C4531A] tracking-[0.4em] uppercase block mb-3">
                Ayurvedic Academician & Author
              </span>
              <h3 className="text-3xl md:text-4xl font-serif italic text-gray-800 mb-6">
                Redefining Panchakarma for the Modern World.
              </h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                With over <span className="text-gray-900 font-medium">12+ years of clinical excellence</span>, 
                Dr. R.K. Pal serves as an Associate Professor in Panchakarma. His dual role as an 
                academician and practicing physician allows him to integrate deep theoretical knowledge 
                with practical healing results.
              </p>
              <p className="text-gray-600 text-lg font-light leading-relaxed italic border-l-2 border-[#C4531A]/20 pl-6 py-2">
                "Healing is not merely the absence of disease, but the restoration of the 
                soul's harmony with the body."
              </p>
            </div>

            {/* Stats: Minimalist Aesthetic */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
              {[
                { label: "Years Experience", val: "12+" },
                { label: "Patients Treated", val: "8000+" },
                { label: "Specialized Therapies", val: "20+" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-[#EAD8B3]/20 text-center">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#C4531A]">{stat.val}</h3>
                  <p className="text-[9px] md:text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Qualifications & Expertise: Tab-like Structure */}
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                <h4 className="font-serif italic text-xl mb-4 text-gray-900 border-b border-[#EAD8B3]/40 pb-2">
                  Qualifications
                </h4>
                <ul className="space-y-3 text-sm text-gray-600 font-light">
                  <li className="flex gap-2">
                    <span className="text-[#C4531A] font-bold font-serif">B.A.M.S</span>
                    <span className="opacity-70">— Bachelor of Ayurvedic Medicine & Surgery</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C4531A] font-bold font-serif">M.D</span>
                    <span className="opacity-70">— Panchakarma</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C4531A] font-bold font-serif">C.A.R.D</span>
                    <span className="opacity-70">— Certificate in Anorectal Disease</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C4531A] font-bold font-serif">Ph.D</span>
                    <span className="opacity-70">— Ayurveda Medicine</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif italic text-xl mb-4 text-gray-900 border-b border-[#EAD8B3]/40 pb-2">
                  Specialization
                </h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 font-light">
                  {["Nuero & Spine ","Arthritis & Joint Care","Digestive Health", "Skin" , "Thyroid & PCOD", "Diabetes & Lifestyle", ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-[#C4531A] rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="pt-0 flex flex-col sm:flex-row items-center gap-6">
              <Link
                to="/book-appointment"
                className="w-full sm:w-auto text-center bg-[#C4531A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20 active:scale-95"
              >
                Request Private Consultation
              </Link>
              {/* <p className="text-xs text-gray-400 font-light italic">
                Currently accepting new patients for digital sessions.
              </p> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDoctor;