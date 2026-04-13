// import React, { useState, useEffect } from "react";
// import { testimonials } from "../data/testimonials";
// import { faqs } from "../data/faq";
// import { youtubeVideos } from "../data/youtubeVideos";
// import { Link } from "react-router-dom";

// import CountUp from "../hooks/CountUp";

// import { Helmet } from "react-helmet-async";

// <Helmet>
// <title>Dhruwraj Healthcare | Ayurvedic Doctor & Panchkarma Treatment</title>

// <meta
// name="description"
// content="Dhruwraj Healthcare provides authentic Ayurvedic treatment, Panchkarma therapy, online consultation and disease specific Ayurvedic treatment by Dr R.K Pal."
// />

// <meta
// name="keywords"
// content="Ayurvedic doctor Kanpur, Panchkarma treatment, Ayurveda clinic Kanpur, natural treatment"
// />

// <meta property="og:title" content="Dhruwraj Healthcare"/>
// <meta property="og:type" content="website"/>
// <meta property="og:url" content="https://dhruwraj.com"/>
// <meta property="og:image" content="/images/brandphoto.png"/>
// </Helmet>

// const Home = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("Diabetes");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [showPopup, setShowPopup] = useState(false);

//   const [consultation, setConsultation] = useState("");
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");

// /* ---------------- NEW BOOKING STATES ---------------- */
//   const [bookingData, setBookingData] = useState({
//     consultation: "",
//     name: "",
//     mobile: "",
//     date: "",
//   });

//   const [showFeeModal, setShowFeeModal] = useState(false);
//   const [showUnavailableModal, setShowUnavailableModal] = useState(false);
//   const [unavailableMessage, setUnavailableMessage] = useState("");

//   const consultationFee = 500;
//   const clinicNumber = "919795053040";

//   const blockedDates = ["2026-03-12","2026-03-13",];
//   const today = new Date().toISOString().split("T")[0];

//   const currentTestimonials = testimonials[activeCategory] || [];

// /* ---------------- POPUP LOGIC ---------------- */
//   useEffect(() => {
//   const timer = setTimeout(() => {
//     setShowPopup(true);
//   }, 800); // popup delay

//   return () => clearTimeout(timer);
// }, []);

//   /* ---------------- TESTIMONIAL LOGIC ---------------- */
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [activeCategory]);

//   useEffect(() => {
//     if (!currentTestimonials.length) return;

//     const auto = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === currentTestimonials.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);

//     return () => clearInterval(auto);
//   }, [currentTestimonials]);

//   /* ---------------- BOOKING LOGIC ---------------- */
//   const handleBookingChange = (e) => {
//     setBookingData({
//       ...bookingData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isSunday = (dateString) => {
//     const date = new Date(dateString);
//     return date.getDay() === 0;
//   };

//   const getNextAvailableDate = (selectedDate) => {
//     let nextDate = new Date(selectedDate);
//     nextDate.setDate(nextDate.getDate() + 1);

//     while (true) {
//       const formatted = nextDate.toISOString().split("T")[0];
//       const isPast =
//         nextDate < new Date(new Date().toISOString().split("T")[0]);
//       const isSun = nextDate.getDay() === 0;
//       const isBlocked = blockedDates.includes(formatted);

//       if (!isPast && !isSun && !isBlocked) return formatted;

//       nextDate.setDate(nextDate.getDate() + 1);
//     }
//   };

//   const handleHomeBookingSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !bookingData.consultation ||
//       !bookingData.name ||
//       !bookingData.mobile ||
//       !bookingData.date
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (isSunday(bookingData.date)) {
//       const suggestion = getNextAvailableDate(bookingData.date);
//       setUnavailableMessage(
//         `Doctor is not available on Sundays.\n\nNext available date: ${suggestion}`
//       );
//       setShowUnavailableModal(true);
//       return;
//     }

//     if (blockedDates.includes(bookingData.date)) {
//       const suggestion = getNextAvailableDate(bookingData.date);
//       setUnavailableMessage(
//         `Doctor is not available on selected date.\n\nNext available date: ${suggestion}`
//       );
//       setShowUnavailableModal(true);
//       return;
//     }

//     setShowFeeModal(true);
//   };

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-[#FDFBF3] min-h-[90vh] flex items-center">
//         <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <p className="text-[#7A3E1D] tracking-widest uppercase text-sm mb-4">
//               Trusted Ayurvedic Care
//             </p>

//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
//               Natural Healing Through{" "}
//               <span className="text-[#C4531A]">Ayurveda & Panchkarma</span>
//             </h1>

//             <p className="text-gray-600 text-lg mb-8">
//               Experience holistic treatment guided by traditional Ayurvedic
//               wisdom. Personalized therapies and natural remedies for a
//               healthier life.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <a
//                 href="/book-appointment"
//                 className="bg-[#C4531A] text-white text-center px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition cursor-pointer"
//               >
//                 Book Appointment
//               </a>

//               <a
//                 href="/health-tips"
//                 className="border text-center border-[#C4531A] text-[#C4531A] px-6 py-3 rounded-full hover:bg-[#C4531A] hover:text-white transition"
//               >
//                 Explore Health Tips
//               </a>
//             </div>

//             <div className="flex gap-10 mt-10">
//               <div>
//                 <h3 className="text-2xl font-bold text-[#C4531A]"><CountUp end={12} />+</h3>
//                 <p className="text-gray-600 text-sm">Years Experience</p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-[#C4531A]"><CountUp end={8} />K+</h3>
//                 <p className="text-gray-600 text-sm">Happy Patients</p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-[#C4531A]"><CountUp end={20} />+</h3>
//                 <p className="text-gray-600 text-sm">Therapies Offered</p>
//               </div>
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <img
//               src="/images/brandphoto.png"
//               alt="Doctor"
//               className="rounded-3xl shadow-2xl"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= WEBSITE ENTRY POPUP ================= */}
// {showPopup && (
//   <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] px-6">

//     <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden animate-fadeIn">

//       {/* Close Button */}
//       <button
//         onClick={() => setShowPopup(false)}
//         // className="absolute top- right-4 text-2xl text-[#C4531A] hover:text-black"
//         className="absolute cursor-pointer top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#C4531A] text-xl  bg-[#C4531A] text-white transition-colors"
//       >
//         ✕
//       </button>

//       {/* Image */}
//       <img
//         src="/images/pop-up-img.png"
//         alt="Consultation Offer"
//         className="w-full h-60 object-fill"
//         loading="lazy"
//       />

//       {/* Content */}
//       <div className="p-6 text-center">

//         <h3 className="text-2xl font-bold mb-2 text-[#C4531A]">
//           Book Your Consultation
//         </h3>

//         <p className="text-gray-600 mb-6">
//           Speak directly with our Ayurvedic expert and get personalized
//           treatment for your health concerns.
//         </p>

//         <Link
//           to="/book-appointment"
//           onClick={() => setShowPopup(false)}
//           className="inline-block bg-[#C4531A] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
//         >
//           Book Appointment
//         </Link>

//       </div>

//     </div>
//   </div>
// )}

//       {/* ================= HEALTH CATEGORY PREMIUM ================= */}
//       <section className="bg-white py-10">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           {/* Heading */}
//           <h2 className="text-3xl font-bold mb-10">
//             Explore Ayurvedic Treatments by Health Category
//           </h2>

//           {/* Categories Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//   {[
//     { name: "Digestive", slug: "digestive", img: "/images/Diseases/digestive.png" },
//     { name: "Nuerology", slug: "neurological", img: "/images/Diseases/neurology.webp" },
//     { name: "Respiratory", slug: "respiratory", img: "/images/Diseases/respirtory.png" },
//     { name: "Hair & Skin", slug: "hair-skin", img: "/images/Diseases/hair-and-skin.png" },
//     { name: "Joint Pain", slug: "joint-disorders", img: "/images/Diseases/joint-pain.png" },
//     { name: "Gynae", slug: "gynae", img: "/images/Diseases/gynae.png" },
//   ].map((item, index) => (
//     <Link
//       key={index}
//       to={`/diseases/${item.slug}`}
//       className="bg-[#FDFBF3] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1 cursor-pointer block"
//     >
//       <img
//         src={item.img}
//         alt={item.name}
//         className="w-full h-32  object-cover"
//         loading="lazy"
//       />
//       <div className="py-4 font-semibold text-gray-800 text-lg text-center">
//         {item.name}
//       </div>
//     </Link>
//   ))}
// </div>

//           {/* CTA Button */}
//           <div className="mt-16">
//             <a
//               href="/diseases"
//               className="inline-block bg-[#C4531A] text-white px-12 py-4 text-md tracking-widest uppercase rounded-sm hover:opacity-90 transition"
//             >
//               + More Ayurvedic Treatment For Multiple Diseases
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ================= THERAPY SECTION ================= */}
//       <section className="bg-[#FDFBF3] py-10">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           {/* Heading */}
//           <h2 className="text-3xl font-bold mb-10">
//             Experience Authentic Ayurvedic Therapies
//           </h2>

//           {/* Therapy Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//   {[
//     { name: "Shirodhara", img: "/images/Therapy/Shirodhara.jpg", slug: "shirodhara" },
//     { name: "Abhyanga", img: "/images/Therapy/abhyanga.jpg", slug: "abhyanga" },
//     { name: "Nasya", img: "/images/Therapy/nasya.avif", slug: "nasya" },
//     { name: "Janu Basti", img: "/images/Therapy/janubasti.jpg", slug: "janu-basti" },
//     { name: "Kati Basti", img: "/images/Therapy/katibasti.webp", slug: "kati-basti" },
//     { name: "Panchkarma", img: "/images/Therapy/panchkarma.jpg", slug: "panchkarma" },
//   ].map((item, index) => (
//     <Link
//       key={index}
//       to={`/therapy/${item.slug}`}
//       className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden"
//     >
//       <img
//         src={item.img}
//         alt={item.name}
//         className="w-full h-32 object-cover"
//         loading="lazy"
//       />

//       <div className="py-5 text-lg font-semibold text-[#C4531A] text-center">
//         {item.name}
//       </div>
//     </Link>
//   ))}
// </div>

//           {/* CTA Button */}
//           <div className="mt-16">
//             <a
//               href="/therapies"
//               className="inline-block bg-[#C4531A] text-white px-12 py-4 text-md tracking-widest uppercase hover:opacity-90 transition"
//             >
//               + Explore Ayurvedic Therapies
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section className="bg-white py-20 text-center">
//         <h2 className="text-3xl font-bold mb-10">Our Specialized Services</h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
//           {[
//             "Panchkarma Therapy",
//             "Video Consultation",
//             "Clinical Consultation",
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="bg-[#FDFBF3] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
//             >
//               <h3 className="text-xl font-semibold text-[#C4531A] mb-3">
//                 {service}
//               </h3>
//               <p className="text-gray-600">
//                 Holistic treatment designed for complete well-being.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="bg-[#FDFBF3] py-20">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">Why Choose Our Clinic?</h2>
//             <ul className="space-y-4 text-gray-700">
//               <li>✔ 100% Natural & Safe Treatments</li>
//               <li>✔ Experienced Ayurvedic Experts</li>
//               <li>✔ Personalized Consultation</li>
//               <li>✔ Affordable & Transparent Pricing</li>
//             </ul>
//           </div>

//           <img
//             src="/images/brandicon.png"
//             alt="Clinic"
//             className="rounded-3xl shadow-xl"
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* ================= DOCTOR PROFILE ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
//           <img
//             src="/images/doctor2.jpg"
//             alt="Doctor"
//             className="rounded-3xl shadow-2xl"
//             loading="lazy"
//           />

//           <div>
//             <h2 className="text-3xl text-[#C4531A] font-bold mb-1"><a href="/meet-doctor"> Meet Dr. R.K Pal</a></h2>
//             <h3 className="text-lg font-medium text-[#000000] mb-2">
//               ( BAMS, C.A.R.D (Mumbai), M.D. - Panchkarma, Phd. (Sch.) )
//             </h3>
//             <h4 className="text-lg font-medium text-[#7A3E1D] mb-4">
//               Ayurvedic Expert & Panchkarma Specialist
//             </h4>
//             <p className="text-gray-600 mb-6">
//               With 12+ years of experience in Ayurveda & Panchkarma, Dr. R.K Pal
//               has successfully treated thousands of patients, blending profound
//               traditional wisdom with the rigorous standards of modern clinical
//               practice. His journey is defined by a rare combination of academic
//               excellence, high-level corporate clinical experience, and a
//               deep-seated commitment to medical education.
//               <br />
//               <br />
//               <b>Academic & Professional Excellence.</b>
//               <br />
//               <br />
//               Dr. Pal’s profound expertise is backed by an elite academic
//               foundation:
//               <br />
//               <ul>
//                 <li>
//                   <strong>1. B.A.M.S.</strong> Bachelor of Ayurvedic Medicine & Surgery
//                 </li>
//                 <li>
//                   <strong>2. M.D. </strong> Panchakarma
//                 </li>
//                 <li>
//                   <strong>3. C.A.R.D. (Mumbai)</strong> Certificate in Anorectal Disease
//                 </li>
//                 <li>
//                   <strong>4. Ph.D. (Sch.)</strong> Ayurveda Medicine
//                 </li>
//               </ul>
//               <br />
//               His clinical acumen was sharpened during his years with Jiva
//               Ayurveda, where he handled a diverse range of complex cases.
//               Today, he balances his practice with a prestigious role as an
//               Associate Professor at Rama Medical University, where he mentors
//               the next generation of Ayurvedic physicians.
//             </p>

//             {/* <button
//               onClick={() => setOpenModal(true)}
//               className="bg-[#C4531A] text-white px-6 py-3 rounded-full"
//             >
//               Book Consultation
//             </button> */}
//             <Link
//               to="/book-appointment"
//               className="bg-[#C4531A] text-white px-6 py-3 rounded-full inline-block mt-4"
//             >
//               Book Consultation
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= TESTIMONIALS ================= */}
//       <section className="bg-[#FDFBF3] py-10">
//   <div className="max-w-7xl mx-auto px-6">
//     {/* Heading */}
//     <div className="text-center mb-12">
//       <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Happy Patients</h2>
//       <div className="w-24 h-1 bg-[#C4531A] mx-auto mt-4 rounded-full"></div>
//     </div>

//     {/* Category Pills */}
//     <div className="flex flex-wrap justify-center gap-4 mb-16">
//       {Object.keys(testimonials).map((cat, i) => (
//         <button
//           key={i}
//           onClick={() => setActiveCategory(cat)}
//           className={`px-6 py-2 rounded-full text-sm font-medium transition ${
//             activeCategory === cat
//               ? "bg-[#7A3E1D] text-white"
//               : "bg-[#EAD8B3] text-[#7A3E1D] hover:bg-[#dec18a]"
//           }`}
//         >
//           {cat}
//         </button>
//       ))}
//     </div>

//     {/* Carousel */}
//     {currentTestimonials.length > 0 && (
//       <div className="relative">
//         {/* Navigation Buttons */}
//         <button
//           onClick={() => setCurrentIndex((prev) => (prev === 0 ? currentTestimonials.length - 1 : prev - 1))}
//           className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-xl w-12 h-12 rounded-full flex items-center justify-center z-10 hover:bg-gray-50 transition"
//         >
//           <span className="text-2xl text-gray-600">‹</span>
//         </button>

//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)`,
//             }}
//           >
//             {currentTestimonials.map((item) => (
//               <Link
//                 key={item.slug}
//                 to={`/testimonials/${item.slug}`}
//                 className="w-full md:w-1/3 flex-shrink-0 px-4"
//               >
//                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300 h-full flex flex-col">
//                   {/* Google Style Header: Profile & Rating */}
//                   <div className="flex items-center gap-4 mb-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-14 h-14 rounded-full object-cover border-2 border-gray-50"
//                     />
//                     <div>
//                       <h3 className="font-bold text-gray-900 leading-tight hover:text-[#C4531A]">
//                         {item.name}
//                       </h3>
//                       <div className="flex text-yellow-400 text-sm mt-1">
//                         {/* Static 5 stars or item.rating */}
//                         {"★".repeat(5)}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Review Snippet */}
//                   <div className="flex-grow">
//                     <p className="text-gray-600 text-sm italic mb-4 line-clamp-3">
//                       "{item.shortReview || "The treatment was excellent and the results were visible within weeks..."}"
//                     </p>
//                   </div>

//                   {/* Footer Badge */}
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-50">
//                     <span className="text-xs font-semibold text-[#C4531A] uppercase tracking-wider">
//                       {item.issue}
//                     </span>
//                     {/* <div className="flex items-center gap-1 text-green-600">
//                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
//                       </svg>
//                       <span className="text-[10px] font-bold">Verified</span>
//                     </div> */}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={() => setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length)}
//           className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-xl w-12 h-12 rounded-full flex items-center justify-center z-10 hover:bg-gray-50 transition"
//         >
//           <span className="text-2xl text-gray-600">›</span>
//         </button>
//       </div>
//     )}
//   </div>
// </section>

//       {/* ================= AYURVEDIC HEALTH TIPS (EMBEDDED) ================= */}
//       <section className="bg-white py-20">
//         <h2 className="text-3xl font-bold text-center mb-16">
//           Ayurvedic Health Tips
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
//           {youtubeVideos.slice(0, 2).map((video, index) => (
//             <div
//               key={index}
//               className="rounded-3xl overflow-hidden shadow-lg bg-black"
//             >
//               {/* Responsive Video Wrapper */}
//               <div className="relative w-full aspect-video">
//                 <iframe
//                   src={`https://www.youtube.com/embed/${video.id}`}
//                   title="YouTube video player"
//                   className="absolute top-0 left-0 w-full h-full"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <a
//             href="/health-tips"
//             className="bg-[#C4531A] text-white px-8 py-3 rounded-full hover:opacity-90 transition"
//           >
//             View All Health Tips
//           </a>
//         </div>
//       </section>

//       {/* ================= BOOK APPOINTMENT SECTION ================= */}

//       <section className="bg-[#Fdfbf3] py-10">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               <span className="text-[#C4531A]">Consultation</span> Advantages
//             </h2>

//             <p className="text-gray-600 leading-relaxed mb-10">
//               We Have Treated more than 8,000 patients speak with our Ayurvedic
//               expert to understand the root cause of their health problems and
//               receive personalised treatment.
//             </p>
//             <div className="grid grid-cols-2 gap-6">
//               {["12+ Years of Experience", "8000+ Patients Treated","Consultation Fees : ₹500","Consultation charges must be paid before confirmation of appointment."].map(
//                 (item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
//                   >
//                     <div className="text-[#C4531A] text-3xl mb-4">★</div>
//                     <p className="font-semibold text-gray-800">{item}</p>
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>

//           <div className="bg-white p-10 rounded-2xl shadow-lg">
//             <h3 className="text-3xl font-bold mb-8">
//               Book An Appointment
//             </h3>

//             <form onSubmit={handleHomeBookingSubmit} className="space-y-6">
//               <select
//                 name="consultation"
//                 value={bookingData.consultation}
//                 onChange={handleBookingChange}
//                 className="w-full border p-4 rounded-md"
//               >
//                 <option value="">Select Consultation</option>
//                 <option>Video Consultation</option>
//                 <option>Clinical Consultation</option>
//                 <option>Telephonic Consultation</option>
//               </select>

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Patient Name"
//                 value={bookingData.name}
//                 onChange={handleBookingChange}
//                 className="w-full border p-4 rounded-md"
//               />

//               <input
//                 type="tel"
//                 name="mobile"
//                 placeholder="Mobile Number"
//                 value={bookingData.mobile}
//                 onChange={handleBookingChange}
//                 className="w-full border p-4 rounded-md"
//               />

//               <input
//                 type="date"
//                 name="date"
//                 min={today}
//                 value={bookingData.date}
//                 onChange={handleBookingChange}
//                 className="w-full border p-4 rounded-md"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-[#C4531A] text-white py-4 rounded-md"
//               >
//                 Submit via WhatsApp
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* ================= FAQ SECTION ================= */}
//       <section className="bg-white py-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-16">
//             Frequently Asked Questions
//           </h2>

//           <div className="grid md:grid-cols-2 gap-5">
//             {faqs.map((item, index) => (
//               <FAQItem key={index} item={item} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= APPOINTMENT MODAL ================= */}
//       {/* {openModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-2xl w-96 relative">
//             <button
//               onClick={() => setOpenModal(false)}
//               className="absolute top-3 right-4 text-xl"
//             >
//               ✕
//             </button>

//             <h3 className="text-xl font-bold mb-4">Book Appointment</h3>

//             <input className="w-full border p-2 mb-4" placeholder="Your Name" />
//             <input
//               className="w-full border p-2 mb-4"
//               placeholder="Phone Number"
//             />

//             <a
//               href="tel:+919795053040"
//               className="block text-center bg-[#C4531A] text-white py-2 rounded"
//             >
//               Submit & Call
//             </a>
//           </div>
//         </div>
//       )} */}
//       {/* ================= FEE MODAL ================= */}
//       {showFeeModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-2xl text-center">
//             <h3 className="text-2xl font-bold mb-4 text-[#C4531A]">
//               Consultation Charges
//             </h3>
//             <p className="text-gray-700 mb-6">
//               Consultation charges are ₹{consultationFee}.
//               You will have to pay before consultation.
//               <br /><br />
//               Do you wish to proceed?
//             </p>

//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={() => setShowFeeModal(false)}
//                 className="border px-6 py-2 rounded-full"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={() => {
//                   const message = `
// New Consultation Booking

// Patient Name: ${bookingData.name}
// Mobile Number: ${bookingData.mobile}
// Consultation Type: ${bookingData.consultation}
// Preffered Date: ${bookingData.date}

// Patient has agreed to pay ₹${consultationFee} before consultation.
// `;

//                   window.open(
//                     `https://wa.me/${clinicNumber}?text=${encodeURIComponent(
//                       message
//                     )}`,
//                     "_blank"
//                   );
//                   setShowFeeModal(false);
//                 }}
//                 className="bg-[#C4531A] text-white px-6 py-2 rounded-full"
//               >
//                 Proceed
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ================= UNAVAILABLE MODAL ================= */}
//       {showUnavailableModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-2xl text-center">
//             <h3 className="text-xl font-bold text-red-600 mb-4">
//               Doctor Not Available
//             </h3>

//             <p className="whitespace-pre-line mb-6">
//               {unavailableMessage}
//             </p>

//             <button
//               onClick={() => setShowUnavailableModal(false)}
//               className="bg-[#C4531A] text-white px-6 py-2 rounded-full"
//             >
//               Select New Date
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const FAQItem = ({ item }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-200 pb-4">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center text-left py-4"
//       >
//         <span className="font-medium text-gray-800">{item.question}</span>
//         <span className="text-[#C4531A] text-xl">{open ? "−" : "+"}</span>
//       </button>

//       {open && (
//         <p className="text-gray-600 pb-4 leading-relaxed">{item.answer}</p>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";
import { faqs } from "../data/faq";
import { youtubeVideos } from "../data/youtubeVideos";
import { locations } from "../data/locations";
import { Link } from "react-router-dom";
import CountUp from "../hooks/CountUp";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Diabetes");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    consultation: "",
    name: "",
    mobile: "",
    date: "",
  });
  const [showFeeModal, setShowFeeModal] = useState(false);
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);
  const [unavailableMessage, setUnavailableMessage] = useState("");

  const consultationFee = 500;
  const clinicNumber = "919795053040";
  const blockedDates = ["2026-03-12", "2026-03-13"];
  const today = new Date().toISOString().split("T")[0];
  const currentTestimonials = testimonials[activeCategory] || [];

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (!currentTestimonials.length) return;
    const auto = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === currentTestimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(auto);
  }, [currentTestimonials]);

  /* ---------------- BOOKING LOGIC ---------------- */
  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const isSunday = (dateString) => {
    const date = new Date(dateString);
    return date.getDay() === 0;
  };

  const getNextAvailableDate = (selectedDate) => {
    let nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    while (true) {
      const formatted = nextDate.toISOString().split("T")[0];
      const isSun = new Date(formatted).getDay() === 0;
      const isBlocked = blockedDates.includes(formatted);
      if (!isSun && !isBlocked) return formatted;
      nextDate.setDate(nextDate.getDate() + 1);
    }
  };

  const handleHomeBookingSubmit = (e) => {
    e.preventDefault();
    if (
      !bookingData.consultation ||
      !bookingData.name ||
      !bookingData.mobile ||
      !bookingData.date
    ) {
      alert("Please fill all fields");
      return;
    }
    if (isSunday(bookingData.date)) {
      const suggestion = getNextAvailableDate(bookingData.date);
      setUnavailableMessage(
        `Doctor is not available on Sundays.\n\nNext available date: ${suggestion}`,
      );
      setShowUnavailableModal(true);
      return;
    }
    if (blockedDates.includes(bookingData.date)) {
      const suggestion = getNextAvailableDate(bookingData.date);
      setUnavailableMessage(
        `Doctor is not available on selected date.\n\nNext available date: ${suggestion}`,
      );
      setShowUnavailableModal(true);
      return;
    }
    setShowFeeModal(true);
  };

  return (
    <div className="selection:bg-[#C4531A]/20">
      <Helmet>
        <title>
          Dhruwraj Healthcare | Ayurvedic Doctor & Panchkarma Treatment
        </title>
        <meta
          name="description"
          content="Dhruwraj Healthcare provides authentic Ayurvedic treatment..."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="bg-[#FDFBF3] relative overflow-hidden min-h-[90vh] flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
            <span className="text-[#C4531A] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Trusted Ayurvedic Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#1A1A1A] leading-[1.1] mb-8 tracking-tight">
              Restore Your{" "}
              <span className="italic font-light text-[#C4531A]">
                Natural Equilibrium
              </span>
            </h1>
            <p className="text-[#6B6B6B] text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
              Experience a sanctuary of healing where traditional Panchakarma
              protocols meet modern clinical precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Link
                to="/book-appointment"
                className="bg-[#C4531A] text-white px-10 py-4 rounded-full shadow-xl shadow-[#C4531A]/20 hover:bg-[#a34415] transition-all duration-300 font-bold text-xs uppercase tracking-widest text-center"
              >
                Reserve Consultation
              </Link>
              <Link
                to="/health-tips"
                className="bg-white border border-[#EAD8B3] text-[#1A1A1A] px-10 py-4 rounded-full hover:border-[#C4531A] hover:text-[#C4531A] transition-all duration-300 font-bold text-xs uppercase tracking-widest text-center"
              >
                Explore Health Tips
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#EAD8B3]/40">
              {[
                { val: 12, label: "Years Experience" },
                { val: 8, label: "Happy Patients", suffix: "K+" },
                { val: 20, label: "Ritual Therapies" },
              ].map((stat, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-serif font-bold text-[#C4531A] mb-1">
                    <CountUp end={stat.val} />
                    {stat.suffix || "+"}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block relative animate-in fade-in zoom-in duration-1000">
            <div className="absolute -inset-4 bg-[#EAD8B3]/20 rounded-[3rem] -rotate-3"></div>
            <img
              src="/images/brandphoto.png"
              alt="Sanctuary"
              className="relative rounded-[3rem] shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* ENTRY POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] px-6 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-sm w-full relative overflow-hidden">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 bg-white/80 w-8 h-8 rounded-full cursor-pointer text-[#C4531A] flex items-center justify-center font-bold shadow-md hover:bg-[#C4531A] hover:text-white transition-all"
            >
              ✕
            </button>
            <img
              src="/images/pop-up-img.png"
              alt="Special Offer"
              className="w-full h-60 object-cover"
            />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-serif italic mb-2 text-gray-900">
                Personalized Healing
              </h3>
              <p className="text-gray-500 text-sm font-light mb-6">
                Begin your restoration journey with a private consultation with
                Dr. R.K. Pal.
              </p>
              <Link
                to="/book-appointment"
                onClick={() => setShowPopup(false)}
                className="block bg-[#C4531A] text-white py-3 rounded-full text-[10px] font-bold uppercase tracking-widest"
              >
                Reserve Your Slot
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* LOCATIONS */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[#C4531A] font-bold tracking-[0.3em] uppercase text-[10px]">
                Presence
              </span>
              <h2 className="text-3xl font-serif mt-2">Our Sanctuaries</h2>
            </div>
            <Link
              to="/locations"
              className="group flex items-center gap-3 text-[#C4531A] text-[10px] font-bold uppercase tracking-widest"
            >
              <span>Explore All</span>
              <span className="w-8 h-[1px] bg-[#C4531A] transition-all group-hover:w-12"></span>
            </Link>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="min-w-[85%] md:min-w-[40%] lg:min-w-[30%] snap-center"
              >
                <Link
                  to="/locations"
                  className="group block bg-[#FDFBF3] rounded-[2.5rem] overflow-hidden border border-[#EAD8B3]/20 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(196,83,26,0.15)]"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/20 shadow-sm">
                      <p className="text-[9px] font-black tracking-widest text-[#C4531A] uppercase">
                        Since {loc.inceptionDate || "2023"}
                      </p>
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="font-serif text-xl text-gray-900 group-hover:text-[#C4531A] transition-colors leading-tight">
                      {loc.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TREATMENTS BY CATEGORY ================= */}

      <section className="bg-[#FDFBF3] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4531A]/5 rounded-bl-full -z-0" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#C4531A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Specialized Care
            </span>

            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
              Healing Specialties
            </h2>

            <div className="w-20 h-[1px] bg-[#C4531A] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              {
                name: "Digestive",

                slug: "digestive",

                img: "/images/Diseases/digestive.png",
              },

              {
                name: "Neurology",

                slug: "neurological",

                img: "/images/Diseases/neurology.webp",
              },

              {
                name: "Respiratory",

                slug: "respiratory",

                img: "/images/Diseases/respirtory.png",
              },

              {
                name: "Hair & Skin",

                slug: "hair-skin",

                img: "/images/Diseases/hair-and-skin.png",
              },

              {
                name: "Joint Pain",

                slug: "joint-disorders",

                img: "/images/Diseases/joint-pain.png",
              },

              {
                name: "Gynae",

                slug: "gynae",

                img: "/images/Diseases/gynae.png",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={`/diseases/${item.slug}`}
                className="group relative bg-[#FDFBF3] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-[#EAD8B3]/20"
              >
                <div className="h-32 md:h-40 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-800">
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/diseases"
              className="group flex items-center justify-center gap-4 text-[#C4531A] text-xs font-bold uppercase tracking-widest"
            >
              <span>View All Clinical Solutions</span>

              <span className="w-8 h-[1px] bg-[#C4531A] transition-all group-hover:w-16"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= THERAPY GALLERY ================= */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#C4531A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Detox Rituals
            </span>

            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
              Ancestral Therapies & Panchkarma
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Shirodhara",

                img: "/images/Therapy/Shirodhara.jpg",

                slug: "shirodhara",
              },

              {
                name: "Abhyanga",

                img: "/images/Therapy/abhyanga.jpg",

                slug: "abhyanga",
              },

              {
                name: "Nasya",

                img: "/images/Therapy/nasya.avif",

                slug: "nasya",
              },

              {
                name: "Janu Basti",

                img: "/images/Therapy/janubasti.jpg",

                slug: "janu-basti",
              },

              {
                name: "Kati Basti",

                img: "/images/Therapy/katibasti.webp",

                slug: "kati-basti",
              },

              {
                name: "Panchkarma",

                img: "/images/Therapy/panchkarma.jpg",

                slug: "panchkarma",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={`/therapy/${item.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#EAD8B3]/10 overflow-hidden"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                  />
                </div>

                <div className="py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#C4531A] text-center">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link
              to="/therapies"
              className="group flex items-center justify-center gap-4 text-[#C4531A] text-xs font-bold uppercase tracking-widest"
            >
              <span>View All Therapies</span>

              <span className="w-8 h-[1px] bg-[#C4531A] transition-all group-hover:w-16"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DOCTOR PROFILE ================= */}

      <section className="bg-[#FDFBF3] py-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4531A]/5 rounded-bl-full -z-0" />
        <div className="text-center mb-20">
            <span className="text-[#C4531A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              The Healer
            </span>

            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
              Ayurvedic Maestro
            </h2>
          </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C4531A]/5 rounded-full blur-3xl"></div>

            <img
              src="/images/doctor2.jpg"
              alt="Doctor"
              className="relative rounded-[3rem] shadow-2xl z-10"
            />

            <div className="absolute -bottom-6 -right-6 bg-[#C4531A] p-8 rounded-3xl text-white shadow-xl z-20 hidden lg:block">
              <p className="text-3xl font-serif">12+</p>

              <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                Years Excellence
              </p>
            </div>
          </div>

          <div>
            <span className="text-[#C4531A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Our Senior Consultant
            </span>

            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
              Dr. R.K. Pal
            </h2>

            <p className="text-gray-400 font-serif italic mb-8 text-lg">
              BAMS, CARD (Mumbai), M.D. - Panchkarma, PhD (Sch.)
            </p>

            <p className="text-[#6B6B6B] font-light leading-relaxed text-lg mb-10">
              A dual authority in clinical practice and academic medicine, Dr.
              Pal integrates profound traditional wisdom with modern standards
              of care. As an Associate Professor and active physician, he has
              guided over 8,000 healing journeys.
            </p>

            <Link
              to="/meet-doctor"
              className="group flex items-center gap-4 text-[#C4531A] text-xs font-bold uppercase tracking-widest"
            >
              <span>View Professional Biography</span>

              <span className="w-10 h-[1px] bg-[#C4531A] transition-all group-hover:w-16"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS (EDITORIAL STYLE) ================= */}

      <section className="bg-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#C4531A] font-bold tracking-[0.3em] uppercase text-[10px]">
              Recovery Voices
            </span>

            <h2 className="text-3xl font-serif mt-2">Healing Chronicles</h2>
          </div>

          <div className="flex flex-nowrap items-center justify-start md:justify-center gap-3 overflow-x-auto no-scrollbar pb-4 px-2 snap-x">
        {Object.keys(testimonials).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              flex-shrink-0 snap-center px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300
              ${activeCategory === cat 
                ? "bg-[#C4531A] text-white shadow-lg shadow-[#C4531A]/20 scale-105" 
                : "bg-white border border-[#EAD8B3] text-gray-400 hover:text-gray-600 hover:border-[#C4531A]/40"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentTestimonials.slice(0, 3).map((item, i) => (
              <Link
                key={i}
                to={`/testimonials/${item.slug}`}
                className="bg-white p-8 rounded-[2.5rem] border border-[#EAD8B3]/20 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover grayscale-[20%]"
                  />

                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {item.name}
                    </h4>

                    <div className="text-[#C4531A] text-[10px]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-sm font-light italic leading-relaxed line-clamp-3">
                  "
                  {item.shortReview ||
                    "A life-changing experience with authentic Ayurvedic wisdom."}
                  "
                </p>

                <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#C4531A]">
                    {item.issue}
                  </span>

                  <span className="text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HEALTH TIPS (VIDEOS) ================= */}

      <section className="bg-[#FDFBF3] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#C4531A] font-bold tracking-[0.3em] uppercase text-[10px]">
              Health Tips
            </span>

            <h2 className="text-3xl font-serif mt-2">Daily Rituals & Tips</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {youtubeVideos.slice(0, 2).map((video, i) => (
              <div
                key={i}
                className="rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video group relative"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title="Tips"
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-8">
            {/* Section Header */}
            <div>
              <span className="text-[#C4531A] font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-gray-900">
                Consultation <br />
                <span className="text-[#C4531A] italic font-light">
                  Advantages
                </span>
              </h2>
              <p className="text-gray-500 font-light mt-4 leading-relaxed">
                Begin your journey toward holistic wellness with a comprehensive
                root-cause analysis by our experts.
              </p>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FDFBF3] p-6 rounded-[2rem] border border-[#EAD8B3]/30 hover:shadow-md transition-shadow">
                <div className="text-[#C4531A] text-xl mb-2">🌱</div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Trusted By
                </p>
                <h4 className="text-2xl font-serif font-bold text-gray-800">
                  8000+
                </h4>
                <p className="text-[9px] text-gray-500 uppercase mt-1">
                  Recovered Patients
                </p>
              </div>

              <div className="bg-[#FDFBF3] p-6 rounded-[2rem] border border-[#EAD8B3]/30 hover:shadow-md transition-shadow">
                <div className="text-[#C4531A] text-xl mb-2">⏳</div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Experience
                </p>
                <h4 className="text-2xl font-serif font-bold text-gray-800">
                  12+ Yrs
                </h4>
                <p className="text-[9px] text-gray-500 uppercase mt-1">
                  Clinical Excellence
                </p>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative group overflow-hidden bg-white p-8 rounded-[2.5rem] border border-[#EAD8B3]/50 shadow-sm transition-all hover:shadow-xl hover:shadow-[#C4531A]/5">
              {/* Decorative background circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C4531A]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="bg-[#C4531A] text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      Standard Fee
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 mt-3 uppercase tracking-wider">
                      Initial Consultation
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-serif font-bold text-[#C4531A]">
                      ₹{consultationFee}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {[
                    "Full Prakriti (Body Type) Analysis",
                    "Diet & Lifestyle Recommendation",
                    "Digital Prescription via WhatsApp",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs text-gray-500 font-light"
                    >
                      <span className="text-[#C4531A] text-[10px]">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-[#EAD8B3]/30 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4531A]/5 rounded-bl-full -z-0" />

              <div className="relative z-10">
                <div className="mb-10 text-center">
                  <h3 className="text-2xl font-serif italic text-gray-800">
                    Booking Request
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-2">
                    Secure your healing session
                  </p>
                </div>

                <form onSubmit={handleHomeBookingSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                    {/* Patient Name */}
                    <div className="group relative">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block group-focus-within:text-[#C4531A] transition-colors">
                        Full Name
                      </label>
                      <div className="flex items-center border-b border-[#EAD8B3] group-focus-within:border-[#C4531A] transition-all">
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={bookingData.name}
                          onChange={handleBookingChange}
                          className="w-full bg-transparent py-3 outline-none text-gray-700 placeholder:text-gray-200 font-light"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="group relative">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block group-focus-within:text-[#C4531A] transition-colors">
                        Phone Number
                      </label>
                      <div className="flex items-center border-b border-[#EAD8B3] group-focus-within:border-[#C4531A] transition-all">
                        <input
                          type="tel"
                          name="mobile"
                          required
                          placeholder="+91 00000 00000"
                          value={bookingData.mobile}
                          onChange={handleBookingChange}
                          className="w-full bg-transparent py-3 outline-none text-gray-700 placeholder:text-gray-200 font-light"
                        />
                      </div>
                    </div>

                    {/* Consultation Mode */}
                    <div className="group relative">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block group-focus-within:text-[#C4531A] transition-colors">
                        Consultation Mode
                      </label>
                      <div className="flex items-center border-b border-[#EAD8B3] group-focus-within:border-[#C4531A] transition-all">
                        <select
                          name="consultation"
                          value={bookingData.consultation}
                          onChange={handleBookingChange}
                          className="w-full bg-transparent py-3 outline-none text-gray-700 font-light appearance-none"
                        >
                          <option value="">Select Option</option>
                          <option>Video Consultation</option>
                          <option>Clinical Consultation</option>
                          <option>Telephonic Consultation</option>
                        </select>
                        <span className="pointer-events-none text-[10px] opacity-30">
                          ▼
                        </span>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="group relative">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block group-focus-within:text-[#C4531A] transition-colors">
                        Preferred Date
                      </label>
                      <div className="flex items-center border-b border-[#EAD8B3] group-focus-within:border-[#C4531A] transition-all">
                        <input
                          type="date"
                          name="date"
                          min={today}
                          value={bookingData.date}
                          onChange={handleBookingChange}
                          className="w-full bg-transparent py-3 outline-none text-gray-700 font-light uppercase text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#C4531A] text-white py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] 
            hover:bg-[#a34415] hover:shadow-2xl hover:shadow-[#C4531A]/30 transition-all duration-500 
            active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                      <span>Confirm via WhatsApp</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.076 1.357 4.679 1.357 5.12 0 9.283-4.163 9.286-9.285.001-2.482-.965-4.816-2.721-6.572-1.756-1.756-4.089-2.722-6.571-2.722-5.12 0-9.285 4.163-9.285 9.285-.001 1.693.46 3.346 1.334 4.793l-.873 3.193 3.267-.858zm10.511-6.164c-.287-.144-1.699-.838-1.962-.934-.263-.096-.454-.144-.646.144-.192.288-.741.934-.909 1.125-.167.192-.335.215-.622.072-.287-.144-1.21-.447-2.306-1.424-.853-.761-1.428-1.701-1.595-1.989-.168-.287-.018-.443.126-.587.13-.13.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.646-1.56-.885-2.136-.232-.56-.47-.484-.646-.492l-.55-.008c-.192 0-.503.072-.765.36-.263.288-1.006.984-1.006 2.399 0 1.416 1.03 2.784 1.173 2.976.144.192 2.028 3.096 4.912 4.346.686.297 1.222.474 1.64.607.689.219 1.316.188 1.812.114.553-.082 1.699-.696 1.938-1.368.239-.672.239-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" />
                      </svg>
                    </button>
                    <p className="text-[9px] text-center text-gray-400 mt-4 italic font-light">
                      By submitting, you agree to receive appointment details on
                      your provided WhatsApp number.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#FDFBF3] py-24 relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-[#C4531A]/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#C4531A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
              Guidance &{" "}
              <span className="italic font-light text-[#C4531A]">Clarity</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#EAD8B3] mx-auto mt-6"></div>
          </div>

          {/* FAQ Accordion Container */}
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </div>

          {/* Bottom Support CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center">
              <p className="text-gray-500 text-sm font-light mb-4">
                Still have unanswered questions about your treatment?
              </p>
              <Link
                to="/book-appointment"
                className="group flex items-center gap-3 text-[#C4531A] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#C4531A]/20 pb-1 hover:border-[#C4531A] transition-all"
              >
                <span>Speak with our Wellness Coordinator</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODALS (INTEGRATED INSIDE RETURN) --- */}

      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
          <div className="bg-white p-8 rounded-3xl w-96 relative shadow-2xl">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>
            <h3 className="text-2xl font-serif mb-6">Quick Call</h3>
            <a
              href={`tel:+${clinicNumber}`}
              className="block text-center bg-[#C4531A] text-white py-4 rounded-full font-bold"
            >
              Call Clinic Now
            </a>
          </div>
        </div>
      )}

      {showFeeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-6">
          <div className="bg-white p-10 rounded-[2.5rem] text-center max-w-sm shadow-2xl">
            <h3 className="text-2xl font-serif text-[#C4531A] mb-4">
              Consultation Fee
            </h3>
            <p className="text-gray-600 mb-8 text-sm">
              A fee of ₹{consultationFee} applies. Do you wish to proceed to
              WhatsApp?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowFeeModal(false)}
                className="flex-1 py-3 border rounded-full text-xs font-bold uppercase"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const message = `*New Consultation Booking*\n\n*Name:* ${bookingData.name}\n*Mobile:* ${bookingData.mobile}\n*Mode:* ${bookingData.consultation}\n*Date:* ${bookingData.date}\n\n_Patient agreed to ₹${consultationFee} fee._`;
                  window.open(
                    `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`,
                    "_blank",
                  );
                  setShowFeeModal(false);
                }}
                className="flex-1 py-3 bg-[#C4531A] text-white rounded-full text-xs font-bold uppercase"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {showUnavailableModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-6">
          <div className="bg-white p-10 rounded-[2.5rem] text-center max-w-sm shadow-2xl">
            <h3 className="text-xl font-serif text-red-600 mb-4">
              Date Unavailable
            </h3>
            <p className="text-gray-600 mb-8 whitespace-pre-line text-sm">
              {unavailableMessage}
            </p>
            <button
              onClick={() => setShowUnavailableModal(false)}
              className="w-full py-3 bg-[#C4531A] text-white rounded-full text-xs font-bold uppercase"
            >
              Change Date
            </button>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </div>
  );
};

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-[#EAD8B3]/20 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors"
      >
        <span className="font-serif text-gray-800">{item.question}</span>
        <span
          className={`text-[#C4531A] transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="p-6 pt-0 text-gray-500 font-light text-sm border-t">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default Home;
