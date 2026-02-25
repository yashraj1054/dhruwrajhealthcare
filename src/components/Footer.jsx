import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[black] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Clinic Info */}
        <div>
          <img
    src="/images/darklogo.png"  
    alt="Dhruwraj Healthcare"
    className="h-18 mb-4 object-contain"
  />
          <p className="text-sm mb-6">
            Authentic Ayurvedic & Panchkarma treatments for holistic healing.
          </p>

          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/drrkpaldhruwraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C4531A] transition"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>

            <a
              href="https://www.instagram.com/dr_rk_pal_ayurveda/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C4531A] transition"
            >
              <FaInstagram className="text-white text-sm" />
            </a>

            <a
              href="https://www.youtube.com/@drrkpaldruwrajayurveda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C4531A] transition"
            >
              <FaYoutube className="text-white text-sm" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/diseases" className="hover:text-white">Diseases</a></li>
            <li><a href="/therapy" className="hover:text-white">Therapies</a></li>
            <li><a href="/healthtips" className="hover:text-white">Health Tips</a></li>
            <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2">📍 20, Zoo Rd, Vikas Nagar, Nawabganj, Kanpur, Uttar Pradesh 208002</p>
          <p className="text-sm mb-2">
            📞 <a href="tel:+919795053040" className="hover:text-white">+91 97950 53040</a>
          </p>
          <p className="text-sm">🕒 Mon – Sat | 4PM – 8PM</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Stay Connected
          </h4>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-3 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-[#C4531A]"
          />
          <button className="w-full bg-[#C4531A] text-white py-2 rounded hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Dhruwraj Healthcare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;