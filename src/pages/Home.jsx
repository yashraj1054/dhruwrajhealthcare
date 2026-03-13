import React, { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";
import { faqs } from "../data/faq";
import { youtubeVideos } from "../data/youtubeVideos";
import { Link } from "react-router-dom";

import CountUp from "../hooks/CountUp";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Diabetes");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  const [consultation, setConsultation] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");


/* ---------------- NEW BOOKING STATES ---------------- */
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

  const blockedDates = ["2026-03-12","2026-03-13",];
  const today = new Date().toISOString().split("T")[0];

  const currentTestimonials = testimonials[activeCategory] || [];

/* ---------------- POPUP LOGIC ---------------- */
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopup(true);
  }, 800); // popup delay

  return () => clearTimeout(timer);
}, []);

  /* ---------------- TESTIMONIAL LOGIC ---------------- */
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (!currentTestimonials.length) return;

    const auto = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === currentTestimonials.length - 1 ? 0 : prev + 1
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
      const isPast =
        nextDate < new Date(new Date().toISOString().split("T")[0]);
      const isSun = nextDate.getDay() === 0;
      const isBlocked = blockedDates.includes(formatted);

      if (!isPast && !isSun && !isBlocked) return formatted;

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
        `Doctor is not available on Sundays.\n\nNext available date: ${suggestion}`
      );
      setShowUnavailableModal(true);
      return;
    }

    if (blockedDates.includes(bookingData.date)) {
      const suggestion = getNextAvailableDate(bookingData.date);
      setUnavailableMessage(
        `Doctor is not available on selected date.\n\nNext available date: ${suggestion}`
      );
      setShowUnavailableModal(true);
      return;
    }

    setShowFeeModal(true);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#FDFBF3] min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#7A3E1D] tracking-widest uppercase text-sm mb-4">
              Trusted Ayurvedic Care
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Natural Healing Through{" "}
              <span className="text-[#C4531A]">Ayurveda & Panchkarma</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Experience holistic treatment guided by traditional Ayurvedic
              wisdom. Personalized therapies and natural remedies for a
              healthier life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-[#C4531A] text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
              >
                Book Appointment
              </button>

              <a
                href="/health-tips"
                className="border text-center border-[#C4531A] text-[#C4531A] px-6 py-3 rounded-full hover:bg-[#C4531A] hover:text-white transition"
              >
                Explore Health Tips
              </a>
            </div>

            <div className="flex gap-10 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-[#C4531A]"><CountUp end={12} />+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#C4531A]"><CountUp end={8} />K+</h3>
                <p className="text-gray-600 text-sm">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#C4531A]"><CountUp end={20} />+</h3>
                <p className="text-gray-600 text-sm">Therapies Offered</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/images/brandphoto.png"
              alt="Doctor"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WEBSITE ENTRY POPUP ================= */}
{showPopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] px-6">

    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden animate-fadeIn">

      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top- right-4 text-2xl text-[#C4531A] hover:text-black"
      >
        ✕
      </button>

      {/* Image */}
      <img
        src="/images/popup-image.png"
        alt="Consultation Offer"
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-6 text-center">

        <h3 className="text-2xl font-bold mb-2 text-[#C4531A]">
          Book Your Consultation
        </h3>

        <p className="text-gray-600 mb-6">
          Speak directly with our Ayurvedic expert and get personalized
          treatment for your health concerns.
        </p>

        <Link
          to="/book-appointment"
          onClick={() => setShowPopup(false)}
          className="inline-block bg-[#C4531A] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Book Appointment
        </Link>

      </div>

    </div>
  </div>
)}

      {/* ================= HEALTH CATEGORY PREMIUM ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-10">
            Explore Ayurvedic Treatments by Health Category
          </h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
  {[
    { name: "Digestive", slug: "digestive", img: "/images/Diseases/digestive.png" },
    { name: "Endocrine", slug: "endocrine", img: "/images/Diseases/endocrine.png" },
    { name: "Respiratory", slug: "respiratory", img: "/images/Diseases/respirtory.png" },
    { name: "Hair & Skin", slug: "hair-skin", img: "/images/Diseases/hair-and-skin.png" },
    { name: "Joint Pain", slug: "joint-pain", img: "/images/Diseases/joint-pain.png" },
    { name: "Gynae", slug: "gynae", img: "/images/Diseases/gynae.png" },
  ].map((item, index) => (
    <Link
      key={index}
      to={`/diseases/${item.slug}`}
      className="bg-[#FDFBF3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1 cursor-pointer block"
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-32 object-cover"
      />
      <div className="py-4 font-semibold text-gray-800 text-lg text-center">
        {item.name}
      </div>
    </Link>
  ))}
</div>

          {/* CTA Button */}
          <div className="mt-16">
            <a
              href="/diseases"
              className="inline-block bg-[#C4531A] text-white px-12 py-4 text-md tracking-widest uppercase rounded-sm hover:opacity-90 transition"
            >
              + More Ayurvedic Treatment For Multiple Diseases
            </a>
          </div>
        </div>
      </section>

      {/* ================= THERAPY SECTION ================= */}
      <section className="bg-[#FDFBF3] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-10">
            Experience Authentic Ayurvedic Therapies
          </h2>

          {/* Therapy Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
  {[
    { name: "Shirodhara", img: "/images/Therapy/shirodhara.jpg", slug: "shirodhara" },
    { name: "Abhyanga", img: "/images/Therapy/abhyanga.jpg", slug: "abhyanga" },
    { name: "Nasya", img: "/images/Therapy/nasya.avif", slug: "nasya" },
    { name: "Janu Basti", img: "/images/Therapy/janubasti.jpg", slug: "janu-basti" },
    { name: "Kati Basti", img: "/images/Therapy/katibasti.webp", slug: "kati-basti" },
    { name: "Panchkarma", img: "/images/Therapy/panchkarma.jpg", slug: "panchkarma" },
  ].map((item, index) => (
    <Link
      key={index}
      to={`/therapy/${item.slug}`}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-32 object-cover"
      />

      <div className="py-5 text-lg font-semibold text-[#C4531A] text-center">
        {item.name}
      </div>
    </Link>
  ))}
</div>

          {/* CTA Button */}
          <div className="mt-16">
            <a
              href="/therapies"
              className="inline-block bg-[#C4531A] text-white px-12 py-4 text-md tracking-widest uppercase hover:opacity-90 transition"
            >
              + Explore Ayurvedic Therapies
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Specialized Services</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            "Panchkarma Therapy",
            "Video Consultation",
            "Clinical Consultation",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-[#FDFBF3] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#C4531A] mb-3">
                {service}
              </h3>
              <p className="text-gray-600">
                Holistic treatment designed for complete well-being.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#FDFBF3] py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Clinic?</h2>
            <ul className="space-y-4 text-gray-700">
              <li>✔ 100% Natural & Safe Treatments</li>
              <li>✔ Experienced Ayurvedic Experts</li>
              <li>✔ Personalized Consultation</li>
              <li>✔ Affordable & Transparent Pricing</li>
            </ul>
          </div>

          <img
            src="/images/brandicon.png"
            alt="Clinic"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= DOCTOR PROFILE ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <img
            src="/images/doctor2.jpg"
            alt="Doctor"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-3xl font-bold mb-1">Meet Dr. R.K Pal</h2>
            <h3 className="text-lg font-medium text-[#000000] mb-2">
              ( BAMS, C.A.R.D (Mumbai), M.D. - Panchkarma, Phd. (Sch.) )
            </h3>
            <h4 className="text-lg font-medium text-[#7A3E1D] mb-4">
              Ayurvedic Expert & Panchkarma Specialist
            </h4>
            <p className="text-gray-600 mb-6">
              With 13+ years of experience in Ayurveda & Panchkarma, Dr. R.K Pal
              has successfully treated thousands of patients, blending profound
              traditional wisdom with the rigorous standards of modern clinical
              practice. His journey is defined by a rare combination of academic
              excellence, high-level corporate clinical experience, and a
              deep-seated commitment to medical education.
              <br />
              <br />
              <b>Academic & Professional Excellence.</b>
              <br />
              <br />
              Dr. Pal’s profound expertise is backed by an elite academic
              foundation:
              <br />
              <ul>
                <li>
                  <strong>1. B.A.M.S.</strong> (Bachelor of Ayurvedic Medicine
                  and Surgery)
                </li>
                <li>
                  <strong>2. M.D. – Panchakarma</strong> (Specialist in
                  Bio-cleansing and Detoxification)
                </li>
                <li>
                  <strong>3. C.A.R.D. (Mumbai)</strong> (Certificate in
                  Ayurvedic Rheumatology & Disorders)
                </li>
                <li>
                  <strong>4. Ph.D. (Scholar)</strong> (Advancing research in
                  evidence-based Ayurveda)
                </li>
              </ul>
              <br />
              His clinical acumen was sharpened during his years with Jiva
              Ayurveda, where he handled a diverse range of complex cases.
              Today, he balances his practice with a prestigious role as an
              Associate Professor at Rama Medical University, where he mentors
              the next generation of Ayurvedic physicians.
            </p>

            {/* <button
              onClick={() => setOpenModal(true)}
              className="bg-[#C4531A] text-white px-6 py-3 rounded-full"
            >
              Book Consultation
            </button> */}
            <Link
              to="/book-appointment"
              className="bg-[#C4531A] text-white px-6 py-3 rounded-full inline-block mt-4"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#FDFBF3] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Happy Patients</h2>
            <div className="w-24 h-1 bg-[#C4531A] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(testimonials).map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#7A3E1D] text-white"
                    : "bg-[#EAD8B3] text-[#7A3E1D]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Carousel */}
          {currentTestimonials.length > 0 && (
            <div className="relative">
              {/* Left */}
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? currentTestimonials.length - 1 : prev - 1,
                  )
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center z-10"
              >
                ‹
              </button>

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)`,
                  }}
                >
                  {currentTestimonials.map((item, index) => (
                    // <div
                    //   key={index}
                    //   className="w-full md:w-1/3 flex-shrink-0 px-4"
                    // >
                    //   <div className="bg-white rounded-3xl shadow-lg p-6">
                    //     <img
                    //       src={item.image}
                    //       alt={item.name}
                    //       className="rounded-2xl w-full h-64 object-cover mb-6"
                    //     />
                    //     <h3 className="text-xl font-semibold text-gray-900 text-center">
                    //       {item.name} - {item.issue}
                    //     </h3>
                    //   </div>
                    // </div>
                    <Link
  key={item.slug}
  to={`/testimonials/${item.slug}`}
  className="w-full md:w-1/3 flex-shrink-0 px-4"
>
  <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
    <img
      src={item.image}
      alt={item.name}
      className="rounded-2xl w-full h-64 object-cover mb-6"
    />
    <h3 className="text-xl font-semibold text-gray-900 text-center">
      {item.name} - {item.issue}
    </h3>
  </div>
</Link>
                  ))}
                </div>
              </div>

              {/* Right */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) => (prev + 1) % currentTestimonials.length,
                  )
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center z-10"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= AYURVEDIC HEALTH TIPS (EMBEDDED) ================= */}
      <section className="bg-white py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Ayurvedic Health Tips
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {youtubeVideos.slice(0, 2).map((video, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg bg-black"
            >
              {/* Responsive Video Wrapper */}
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/health-tips"
            className="bg-[#C4531A] text-white px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            View All Health Tips
          </a>
        </div>
      </section>

      {/* ================= BOOK APPOINTMENT SECTION ================= */}
      {/* <section className="bg-[#Fdfbf3] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start"> */}
          {/* ================= LEFT SIDE ================= */}
          {/* <div>
            <h2 className="text-4xl font-bold mb-4">Dhruwraj Ayurveda</h2>

            <h3 className="text-3xl font-bold mb-6">
              <span className="text-[#C4531A]">Consultation</span> Advantages
            </h3>

            <p className="text-gray-600 leading-relaxed mb-10">
              We Have Treated more than 8,000 patients speak with our Ayurvedic
              expert to understand the root cause of their health problems and
              receive personalised treatment.
            </p> */}

            {/* Stats Cards */}
            {/* <div className="grid grid-cols-2 gap-6">
              {["13+ Years of Experience", "8000+ Patients Treated"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-[#C4531A] text-3xl mb-4">★</div>
                    <p className="font-semibold text-gray-800">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div> */}

          {/* ================= RIGHT SIDE ================= */}
          {/* <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Book An Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <select
                value={consultation}
                onChange={(e) => setConsultation(e.target.value)}
                className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4531A]"
              >
                <option value="">Select Consultation</option>
                <option>Video Consultation</option>
                <option>Clinical Consultation</option>
                <option>Telephonic Consultation</option>
              </select>

              <input
                type="text"
                placeholder="Patient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4531A]"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4531A]"
              />

              <button
                type="submit"
                className="w-full bg-[#C4531A] text-white py-4 tracking-widest uppercase font-semibold hover:opacity-90 transition"
              >
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>  */}

      <section className="bg-[#Fdfbf3] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#C4531A]">Consultation</span> Advantages
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              We Have Treated more than 8,000 patients speak with our Ayurvedic
              expert to understand the root cause of their health problems and
              receive personalised treatment.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {["13+ Years of Experience", "8000+ Patients Treated","Consultation Fees : ₹500","Consultation charges must be paid before confirmation of appointment."].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-[#C4531A] text-3xl mb-4">★</div>
                    <p className="font-semibold text-gray-800">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-8">
              Book An Appointment
            </h3>

            <form onSubmit={handleHomeBookingSubmit} className="space-y-6">
              <select
                name="consultation"
                value={bookingData.consultation}
                onChange={handleBookingChange}
                className="w-full border p-4 rounded-md"
              >
                <option value="">Select Consultation</option>
                <option>Video Consultation</option>
                <option>Clinical Consultation</option>
                <option>Telephonic Consultation</option>
              </select>

              <input
                type="text"
                name="name"
                placeholder="Patient Name"
                value={bookingData.name}
                onChange={handleBookingChange}
                className="w-full border p-4 rounded-md"
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={bookingData.mobile}
                onChange={handleBookingChange}
                className="w-full border p-4 rounded-md"
              />

              <input
                type="date"
                name="date"
                min={today}
                value={bookingData.date}
                onChange={handleBookingChange}
                className="w-full border p-4 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-[#C4531A] text-white py-4 rounded-md"
              >
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT MODAL ================= */}
      {/* {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl w-96 relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4">Book Appointment</h3>

            <input className="w-full border p-2 mb-4" placeholder="Your Name" />
            <input
              className="w-full border p-2 mb-4"
              placeholder="Phone Number"
            />

            <a
              href="tel:+919795053040"
              className="block text-center bg-[#C4531A] text-white py-2 rounded"
            >
              Submit & Call
            </a>
          </div>
        </div>
      )} */}
      {/* ================= FEE MODAL ================= */}
      {showFeeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#C4531A]">
              Consultation Charges
            </h3>
            <p className="text-gray-700 mb-6">
              Consultation charges are ₹{consultationFee}.  
              You will have to pay before consultation.
              <br /><br />
              Do you wish to proceed?
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowFeeModal(false)}
                className="border px-6 py-2 rounded-full"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  const message = `
New Consultation Booking

Patient Name: ${bookingData.name}
Mobile Number: ${bookingData.mobile}
Consultation Type: ${bookingData.consultation}
Preffered Date: ${bookingData.date}

Patient has agreed to pay ₹${consultationFee} before consultation.
`;

                  window.open(
                    `https://wa.me/${clinicNumber}?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                  setShowFeeModal(false);
                }}
                className="bg-[#C4531A] text-white px-6 py-2 rounded-full"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= UNAVAILABLE MODAL ================= */}
      {showUnavailableModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Doctor Not Available
            </h3>

            <p className="whitespace-pre-line mb-6">
              {unavailableMessage}
            </p>

            <button
              onClick={() => setShowUnavailableModal(false)}
              className="bg-[#C4531A] text-white px-6 py-2 rounded-full"
            >
              Select New Date
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left py-4"
      >
        <span className="font-medium text-gray-800">{item.question}</span>
        <span className="text-[#C4531A] text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <p className="text-gray-600 pb-4 leading-relaxed">{item.answer}</p>
      )}
    </div>
  );
};

export default Home;
