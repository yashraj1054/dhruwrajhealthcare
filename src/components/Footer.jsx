import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

  const [email,setEmail] = useState("");
  const [showPopup,setShowPopup] = useState(false);

  const handleSubscribe = () => {

    if(!email){
      alert("Please enter your email address");
      return;
    }

    const subject = "Subscription Request - Dhruwraj Healthcare";

    const body = `
Hi Dhruwraj Healthcare,

I would like to subscribe to your health tips and updates.

Subscriber Email: ${email}

Please keep me updated with Ayurvedic health tips.

Regards
`;

    const mailLink = `mailto:info@dhruwraj.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailLink;

    setShowPopup(true);
    setEmail("");
  };

  return (
    <>
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Clinic Info */}
        <div>
          <img
            src="/images/darklogo.png"
            alt="Dhruwraj Healthcare"
            className="h-18 mb-4 object-contain"
            loading="lazy"
          />

          <p className="text-sm mb-6">
            Treating The Route Cause, Not Just the Symptoms, is The Aim of Dhruwraj Healthcare.
          </p>

          <div className="flex gap-4">

            <a href="https://www.facebook.com/drrkpaldhruwraj/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C4531A] transition">
              <FaFacebookF className="text-white text-sm"/>
            </a>

            <a href="https://www.instagram.com/dr_rk_pal_ayurveda/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C4531A] transition">
              <FaInstagram className="text-white text-sm"/>
            </a>

            <a href="https://www.youtube.com/@drrkpaldruwrajayurveda" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C4531A] transition">
              <FaYoutube className="text-white text-sm"/>
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/diseases" className="hover:text-[#C4531A]">Diseases</a></li>
            <li><a href="/therapies" className="hover:text-[#C4531A]">Therapies</a></li>
            <li><a href="/health-tips" className="hover:text-[#C4531A]">Health Tips</a></li>
            <li><a href="/testimonials" className="hover:text-[#C4531A]">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          
          <p className="text-sm mb-2">📍 Kanpur : <a href="https://maps.app.goo.gl/LxW2B1RDZ5Wy9b449" className="hover:text-[#C4531A]">20, Zoo Rd, Vikas Nagar, Nawabganj, Kanpur, Uttar Pradesh - 208002</a> </p>
          <p className="text-sm mb-2 ">📍 Auraiya : <a href="https://maps.app.goo.gl/nwNg7y2Dg3B7GYFw6" className="hover:text-[#C4531A]">H.No 227A Mangalpur Road , Kakor, Auraiya, Uttar Pradesh - 206244</a>  </p>

          <p className="text-sm mb-2">📞 Call Us : <a href="tel:+919795053040" className="hover:text-[#C4531A]">+91 9795053040</a> </p>
          <p className="text-sm mb-2">☎️ Help Desk : <a href="tel:+919196053040" className="hover:text-[#C4531A]">+91 9196053040</a></p>

          <p className="text-sm mb-2">
          📧 E-mail : <a href="mailto:queries@dhruwraj.com" className="hover:text-[#C4531A]">queries@dhruwraj.com</a> </p>

          <p className="text-sm">🕒 Timings :</p>
          <p className="text-sm">• Kanpur : Mon – Sat | 4PM – 8PM</p>
          <p className="text-sm">• Auraiya : Sun | 10AM – 4PM</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>

          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-2 mb-3 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-[#C4531A]"
          />

          <button
            onClick={handleSubscribe}
            className="w-full bg-[#C4531A] text-white py-2 rounded hover:opacity-90 transition">
            Subscribe
          </button>

          <p className="text-xs text-gray-400 mt-2">
            We respect your privacy. No spam, only health tips.
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Dhruwraj Healthcare. All Rights Reserved.
      </div>

    </footer>


{/* SUCCESS POPUP */}
{showPopup && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">

    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm text-center animate-fadeIn">

      <h3 className="text-xl font-bold text-[#C4531A] mb-3">
      Thank You For Subscribing!
      </h3>

      <p className="text-gray-600 mb-6">
      <p>We hope you send us an email with your subscription request.</p>  
      <p>We will get back to you soon with Ayurvedic health tips and updates.</p>  
      <p>Stay tuned for valuable insights on natural wellness and holistic health.</p>   
      </p>

      <button
      onClick={()=>setShowPopup(false)}
      className="bg-[#C4531A] text-white px-6 py-2 rounded-full">
      Close
      </button>

    </div>

  </div>
)}

</>
  );
};

export default Footer;