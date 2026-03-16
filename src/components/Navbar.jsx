import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { diseases } from "../data/diseases";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navRef = useRef(null);

  const announcements = [
    "🌟 Book your appointment now and experience the healing power of Ayurveda!",
    "|",
    "💻 Online Consultations Available - Connect with our experts from anywhere!",
    "|",
    <a
      href="tel:+919795053040"
      className="hover:underline font-semibold"
    >
      📞 Call Now: +91-97950 53040
    </a>,
    "|",
    "🎉 20% Discount on Panchkarma Therapy",
    "|",
    "🕒 Open Monday - Saturday | 4PM - 8PM",
    "|",
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);



  const NavItem = ({ label, links }) => {
  return (
    <div className="relative group">
      {/* Main Button */}
      <button className="flex items-center gap-1 text-black hover:text-gray-600 transition">
        {label}
        <svg
          className="w-4 h-4 group-hover:rotate-180 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* First Dropdown */}
      <div className="absolute left-0 mt-3 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

        {links.map((link, index) => (
          <div key={index} className="relative group/sub">

            {/* If has subLinks */}
            {link.subLinks ? (
              <>
                <button className="w-full flex justify-between items-center px-4 py-2 text-sm hover:bg-[#FDFBF3]">
                  {link.name}
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Second Level Dropdown */}
                <div className="absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">

                  {link.subLinks.map((sub, i) => (
                    <div key={i} className="relative group/third">

                      {sub.subLinks ? (
                        <>
                          <button className="w-full flex justify-between items-center px-4 py-2 text-sm hover:bg-[#FDFBF3]">
                            {sub.name}
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>

                          {/* Third Level Dropdown */}
                          <div className="absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/third:opacity-100 group-hover/third:visible transition-all duration-300">

                            {sub.subLinks.map((third, x) => (
                              <Link
                                key={x}
                                to={third.href}
                                className="block px-4 py-2 text-sm hover:bg-[#FDFBF3]"
                              >
                                {third.name}
                              </Link>
                            ))}

                          </div>
                        </>
                      ) : (
                        <Link
                          to={sub.href}
                          className="block px-4 py-2 text-sm hover:bg-[#FDFBF3]"
                        >
                          {sub.name}
                        </Link>
                      )}

                    </div>
                  ))}

                </div>
              </>
            ) : (
              <Link
                to={link.href}
                className="block px-4 py-2 text-sm hover:bg-[#FDFBF3]"
              >
                {link.name}
              </Link>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

  

  return (
    <>
      {/* Announcement Strip */}
      <div className="w-full bg-[#FDFBF3] text-black overflow-hidden border border-[#FDFBF3]">
        <div className="marquee-track flex py-2 text-sm">
          {[...announcements, ...announcements].map((msg, index) => (
            <span key={index} className="mx-6 whitespace-nowrap">
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav
        className="bg-white sticky top-0 z-50 shadow-sm"
        ref={navRef}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/brandicon.png"
                alt="Dhruwraj Ayurveda & Panchkarma"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-gray-600">
                Home
              </Link>
              <NavItem
  label="Diseases"
  links={diseases.map((cat) => ({
    name: cat.categoryName,
    subLinks: cat.diseases.map((disease) => ({
      name: disease.name,
      href: `/diseases/${cat.categorySlug}/${disease.slug}`,
    })),
  }))}
/>
              {/* <NavItem
                label="Diseases"
                menuId="diseases"
                links={[
                  {
                    name: "Heart Disease",
                    subLinks: [
                      { name: "Arrhythmia", href: "/diseases/heart/arrhythmia" },
                      { name: "Hypertension", href: "/diseases/heart/hypertension" },
                    ],
                  },
                  { name: "Neurology", href: "/diseases/neurology" },
                  {
                    name: "Liver & Gall Disease",
                    subLinks: [
                      { name: "Fatty Liver", href: "/diseases/liver/fatty" },
                      { name: "Gall Stones", href: "/diseases/liver/stones" },
                    ],
                  },
                ]}
              /> */}

              <NavItem
                label="Therapy"
                links={[
                  { name: "Shirodhara", href: "/therapy/shirodhara" },
                  { name: "Abhyanga", href: "/therapy/abhyanga" },
                  { name: "Nasya", href: "/therapy/nasya" },
                  { name: "Panchkarma", href: "/therapy/panchkarma" },
                  { name: "Kati Basti", href: "/therapy/kati-basti" },
                  { name: "Janu Basti", href: "/therapy/janu-basti" },
                  { name: "Akshitarpana", href: "/therapy/akshitarpana" },
                  { name: "Udvartana", href: "/therapy/udvartana" },
                  { name: "Karnapoorna", href: "/therapy/karnapoorna" }, 

                ]}
              />

              <NavItem
                label="Services"
                links={[
                  { name: "Video Consultation", href: "/services/video-consultation" },
                  { name: "Clinical Consultation", href: "/services/clinical-consultation" },
                  { name: "Telephonic Consultation", href: "/services/telephonic-consultation" },
                  { name: "Panchkarma", href: "/services/panchkarma" },
                ]}
              />

              <Link to="/testimonials" className="hover:text-gray-600">
                Testimonials
              </Link>

              <Link to="/health-tips" className="hover:text-gray-600">
                Health Tips
              </Link>

              <Link to="/blogs" className="hover:text-gray-600">
                Blogs
              </Link>

              <Link to="/store" className="hover:text-gray-600">
                Store
              </Link>

              

              {/* Appointment Button */}
              <a
                href="/book-appointment"
                className="bg-[#C4531A] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-2xl"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        {/* Mobile Fullscreen Menu */}
<div
  className={`fixed inset-0 bg-[#FDFBF3] z-50 transform ${
    mobileOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-500 ease-in-out md:hidden`}
>
  {/* Close Button */}
  <div className="flex justify-end p-6">
    <button
      onClick={() => setMobileOpen(false)}
      className="text-3xl text-[#7A3E1D]"
    >
      ✕
    </button>
  </div>

  {/* Menu Items */}
  {/* Premium Fullscreen Mobile Menu */}
<div
  className={`fixed inset-0 bg-[#FDFBF3] z-50 transform ${
    mobileOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-500 ease-in-out md:hidden`}
>
  {/* Close Button */}
  <div className="flex justify-end p-6">
    <button
      onClick={() => setMobileOpen(false)}
      className="text-3xl text-[#7A3E1D]"
    >
      ✕
    </button>
  </div>

  <div className="px-10 space-y-6 text-md tracking-widest text-gray-800">

    <a href="/" className="block">
      HOME
    </a>

    {/* DISEASES */}
    
    <div>
      <button
        onClick={() =>
          setMobileDropdown(
            mobileDropdown === "diseases" ? null : "diseases"
          )
        }
        className="flex justify-between items-center w-full"
      >
        DISEASES
        <span
          className={`transition-transform ${
            mobileDropdown === "diseases" ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {mobileDropdown === "diseases" && (
        <div className="mt-4 ml-4 space-y-3 text-base tracking-normal text-gray-600">
          <a href="/diseases/lifestyle" className="block">
            Lifestyle Disorders
          </a>
          <a href="/diseases/age-related" className="block">
            Age Related Disorders
          </a>
          <a href="/diseases/digestive" className="block">Digestive Disorders</a>
          <a href="/diseases/skin" className="block">Skin Disorders</a>
          <a href="/diseases/gynae" className="block">Gynae Disorders</a>
          <a href="/diseases/renal" className="block">Renal Disorders</a>
          <a href="/diseases/joint-pain" className="block">Joint Pain</a>
          <a href="/diseases/hair-skin" className="block">Hair & Skin</a>
          <a href="/diseases/respiratory" className="block">Respiratory</a>
          <a href="/diseases" className="block">& Many More.....</a>
        </div>
      )}
    </div>

    {/* THERAPY */}
    <div>
      <button
        onClick={() =>
          setMobileDropdown(
            mobileDropdown === "therapy" ? null : "therapy"
          )
        }
        className="flex justify-between items-center w-full"
      >
        THERAPY
        <span
          className={`transition-transform ${
            mobileDropdown === "therapy" ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {mobileDropdown === "therapy" && (
        <div className="mt-4 ml-4 space-y-3 text-base tracking-normal text-gray-600">
          <a href="/therapy/shirodhara" className="block">
            Shirodhara
          </a>
          <a href="/therapy/abhyanga" className="block">
            Abhyanga
          </a>
          <a href="/therapy/nasya" className="block">
            Nasya
          </a>
          <a href="/therapy/panchkarma" className="block">
            Panchkarma
          </a>
          <a href="/therapy/kati-basti" className="block">
            Kati Basti
          </a>
          <a href="/therapy/janu-basti" className="block">
            Janu Basti
          </a>
          <a href="/therapies" className="block">& Many More.....</a>
        </div>
      )}
    </div>

    {/* SERVICES */}
    <div>
      <button
        onClick={() =>
          setMobileDropdown(
            mobileDropdown === "services" ? null : "services"
          )
        }
        className="flex justify-between items-center w-full"
      >
        SERVICES
        <span
          className={`transition-transform ${
            mobileDropdown === "services" ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {mobileDropdown === "services" && (
        <div className="mt-4 ml-4 space-y-3 text-base tracking-normal text-gray-600">
          <a href="/services/video-consultation" className="block">
            Video Consultation
          </a>
          <a href="/services/clinical-consultation" className="block">
            Clinical Consultation
          </a>
          <a href="/services/telephonic-consultation" className="block">
            Telephonic Consultation
          </a>
          <a href="/services/panchkarma" className="block">
            Panchkarma
          </a>
        </div>
      )}
    </div>

    {/* Other Links */}
    <a href="/health-tips" className="block">
      HEALTH TIPS
    </a>

    <a href="/blogs" className="block">
      BLOGS
    </a>


    <a href="/testimonials" className="block">
      TESTIMONIALS
    </a>

    <a href="/store" className="block">
      STORE
    </a>



     {/* Booking Appointmenr */}
    <div className="pt-8 flex flex-col gap-4 items-center">
      <a
        href="/book-appointment"
        className="inline-flex items-center gap-3 bg-[#C4531A] text-white px-6 py-3 rounded-full shadow-md"
      >
        Book Consultation
      </a>
      <a
        href="tel:+919795053040"
        className="inline-flex items-center gap-3 bg-[#C4531A] text-white px-6 py-3 rounded-full shadow-md"
      >
        📞 +91 9795053040
      </a>
    </div>


    {/* Call Button */}
    <div className="pt-8">
      
    </div>
  </div>
</div>
</div>
      </nav>

      {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919795053040"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
>
  <div className="relative">
    
    {/* Pulse Ring */}
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

    {/* Main Button */}
    <div className="relative bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
      
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.885.755 5.701 2.191 8.176L.089 31.91l7.51-2.064A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16.004C32 7.56 24.837.396 16 .396zm0 29.26c-2.545 0-5.042-.674-7.217-1.952l-.516-.305-4.455 1.223 1.191-4.338-.335-.561A13.63 13.63 0 012.37 16.396c0-7.518 6.112-13.63 13.63-13.63 7.518 0 13.63 6.112 13.63 13.63 0 7.518-6.112 13.63-13.63 13.63zm7.437-10.183c-.406-.203-2.402-1.186-2.775-1.321-.373-.135-.645-.203-.917.203-.271.406-1.053 1.321-1.29 1.593-.237.271-.474.305-.88.101-.406-.203-1.713-.632-3.262-2.015-1.206-1.075-2.02-2.404-2.258-2.81-.237-.406-.025-.626.178-.828.182-.181.406-.474.609-.711.203-.237.271-.406.406-.677.135-.271.068-.508-.034-.711-.101-.203-.917-2.21-1.256-3.027-.331-.797-.668-.689-.917-.701l-.781-.014c-.271 0-.711.101-1.084.508-.373.406-1.425 1.393-1.425 3.396 0 2.003 1.459 3.937 1.662 4.208.203.271 2.871 4.384 6.957 6.148.973.42 1.732.671 2.325.859.977.31 1.867.266 2.571.161.784-.117 2.402-.981 2.742-1.929.339-.948.339-1.76.237-1.929-.101-.169-.373-.271-.779-.474z" />
      </svg>
    </div>
  </div>
</a>

      {/* Marquee Animation */}
      <style>
        {`
        .marquee-track {
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </>
  );
};

export default Navbar;