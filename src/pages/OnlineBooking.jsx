// import { useState } from "react";

// const OnlineBooking = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     consultation: "",
//     date: "",
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [showUnavailableModal, setShowUnavailableModal] = useState(false);
//   const [unavailableMessage, setUnavailableMessage] = useState("");

//   const consultationFee = 500;
//   const clinicNumber = "919795053040";

//   // 🔴 MANUALLY BLOCK DOCTOR UNAVAILABLE DATES
//   const blockedDates = [
//     "2026-03-12","2026-03-13",
//   ];

//   // 🔹 Disable past dates
//   const today = new Date().toISOString().split("T")[0];

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // 🔹 Check Sunday
//   const isSunday = (dateString) => {
//     const date = new Date(dateString);
//     return date.getDay() === 0;
//   };

//   // 🔥 Find Next Available Date Automatically
//   const getNextAvailableDate = (selectedDate) => {
//     let nextDate = new Date(selectedDate);
//     nextDate.setDate(nextDate.getDate() + 1);

//     while (true) {
//       const formatted = nextDate.toISOString().split("T")[0];

//       const isPast =
//         nextDate < new Date(new Date().toISOString().split("T")[0]);

//       const isSun = nextDate.getDay() === 0;

//       const isBlocked = blockedDates.includes(formatted);

//       if (!isPast && !isSun && !isBlocked) {
//         return formatted;
//       }

//       nextDate.setDate(nextDate.getDate() + 1);
//     }
//   };

//   const handleInitialSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.name ||
//       !formData.mobile ||
//       !formData.consultation ||
//       !formData.date
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     // Sunday Check
//     if (isSunday(formData.date)) {
//       const suggestion = getNextAvailableDate(formData.date);

//       setUnavailableMessage(
//         `Doctor is not available on Sundays.\n\nNext available date is: ${suggestion}`
//       );
//       setShowUnavailableModal(true);
//       return;
//     }

//     // Blocked Date Check
//     if (blockedDates.includes(formData.date)) {
//       const suggestion = getNextAvailableDate(formData.date);

//       setUnavailableMessage(
//         `Doctor is not available on the selected date.\n\nNext available date is: ${suggestion}`
//       );
//       setShowUnavailableModal(true);
//       return;
//     }

//     setShowModal(true);
//   };

//   const handleConfirm = () => {
//     const message = `
// New Consultation Booking Request

// Patient Name: ${formData.name}
// Mobile Number: ${formData.mobile}
// Consultation Type: ${formData.consultation}
// Preferred Date: ${formData.date}

// Patient has agreed to pay ₹${consultationFee} before consultation.
// `;

//     const whatsappURL = `https://wa.me/${clinicNumber}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(whatsappURL, "_blank");

//     setShowModal(false);

//     setFormData({
//       name: "",
//       mobile: "",
//       consultation: "",
//       date: "",
//     });
//   };

//   return (
//     <section className="bg-[#FDFBF3] min-h-screen py-10">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

//         {/* LEFT SIDE */}
//         <div>
//           <h1 className="text-4xl font-bold mb-6">
//             Book Online Consultation
//           </h1>

//           <p className="text-gray-600 mb-8">
//             Fill the form below to request an appointment.
//             After submission, we will connect with you on WhatsApp to confirm your consultation timing.
//           </p>

//           <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
//             <h3 className="text-xl font-semibold text-[#C4531A]">
//               Consultation Fee
//             </h3>
//             <p className="text-3xl font-bold mt-2">₹{consultationFee}</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="text-xl font-semibold text-[#C4531A]">
//               Important
//             </h3>
//             <p className="text-gray-600 mt-2">
//               Consultation charges must be paid before confirmation of appointment.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div className="bg-white p-10 rounded-2xl shadow-lg">
//           <h2 className="text-2xl font-bold mb-8">
//             Appointment Details
//           </h2>

//           <form onSubmit={handleInitialSubmit} className="space-y-6">

//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border p-4 rounded-md focus:ring-2 focus:ring-[#C4531A]"
//             />

//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full border p-4 rounded-md focus:ring-2 focus:ring-[#C4531A]"
//             />

//             <select
//               name="consultation"
//               value={formData.consultation}
//               onChange={handleChange}
//               className="w-full border p-4 rounded-md focus:ring-2 focus:ring-[#C4531A]"
//             >
//               <option value="">Select Consultation Type</option>
//               <option>Video Consultation</option>
//               <option>Clinical Consultation</option>
//               <option>Telephonic Consultation</option>
//             </select>

//             {/* Date Input */}
//             <input
//               type="date"
//               name="date"
//               min={today}
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full border p-4 rounded-md focus:ring-2 focus:ring-[#C4531A]"
//             />

//             <button
//               type="submit"
//               className="w-full bg-[#C4531A] text-white py-4 rounded-md font-semibold tracking-widest hover:opacity-90 transition"
//             >
//               Submit Inquiry
//             </button>

//           </form>
//         </div>
//       </div>

//       {/* PREMIUM CONSULTATION CHARGE MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">

//             <h3 className="text-2xl font-bold mb-4 text-[#C4531A]">
//               Consultation Charges
//             </h3>

//             <p className="text-gray-700 mb-6">
//               Consultation charges are ₹{consultationFee}.  
//               You will have to pay before consultation.
//               <br /><br />
//               Do you wish to proceed?
//             </p>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleConfirm}
//                 className="px-6 py-2 bg-[#C4531A] text-white rounded-full hover:opacity-90 transition"
//               >
//                 Proceed
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* PREMIUM UNAVAILABLE DATE MODAL */}
//       {showUnavailableModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">

//             <h3 className="text-2xl font-bold mb-4 text-red-600">
//               Doctor Not Available
//             </h3>

//             <p className="text-gray-700 whitespace-pre-line mb-6">
//               {unavailableMessage}
//             </p>

//             <button
//               onClick={() => setShowUnavailableModal(false)}
//               className="px-6 py-2 bg-[#C4531A] text-white rounded-full hover:opacity-90 transition"
//             >
//               Select New Date
//             </button>

//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default OnlineBooking;

import { useState } from "react";

const OnlineBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    consultation: "",
    date: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);
  const [unavailableMessage, setUnavailableMessage] = useState("");

  const consultationFee = 500;
  const clinicNumber = "919795053040";

  const blockedDates = ["2026-03-12", "2026-03-13"];
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isSunday = (dateString) => new Date(dateString).getDay() === 0;

  const getNextAvailableDate = (selectedDate) => {
    let nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    while (true) {
      const formatted = nextDate.toISOString().split("T")[0];
      const isPast = nextDate < new Date(today);
      const isSun = nextDate.getDay() === 0;
      const isBlocked = blockedDates.includes(formatted);
      if (!isPast && !isSun && !isBlocked) return formatted;
      nextDate.setDate(nextDate.getDate() + 1);
    }
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.consultation || !formData.date) {
      alert("Please fill all fields");
      return;
    }
    if (isSunday(formData.date)) {
      const suggestion = getNextAvailableDate(formData.date);
      setUnavailableMessage(`Doctor is not available on Sundays.\n\nNext available date is: ${suggestion}`);
      setShowUnavailableModal(true);
      return;
    }
    if (blockedDates.includes(formData.date)) {
      const suggestion = getNextAvailableDate(formData.date);
      setUnavailableMessage(`Doctor is not available on the selected date.\n\nNext available date is: ${suggestion}`);
      setShowUnavailableModal(true);
      return;
    }
    setShowModal(true);
  };

  const handleConfirm = () => {
    const message = `New Consultation Booking Request\n\nPatient Name: ${formData.name}\nMobile Number: ${formData.mobile}\nConsultation Type: ${formData.consultation}\nPreferred Date: ${formData.date}\n\nPatient has agreed to pay ₹${consultationFee} before consultation.`;
    window.open(`https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`, "_blank");
    setShowModal(false);
    setFormData({ name: "", mobile: "", consultation: "", date: "" });
  };

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-16 md:py-24 selection:bg-[#C4531A]/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Editorial Watermark Header */}
        <div className="relative mb-20">
          <div className="absolute -top-10 left-0 text-4xl md:text-[110px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            Appointment
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-4">
              Book Your <span className="italic font-light text-[#C4531A]">Consultation</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-xl text-base md:text-lg font-light leading-relaxed">
              Begin your path to restoration. Fill the reservation details, and our concierge will connect via WhatsApp to finalize your session.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: GUIDELINES */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-[#EAD8B3]/20">
              <span className="text-[10px] font-bold text-[#C4531A] tracking-[0.3em] uppercase block mb-2">Professional Fee</span>
              <h3 className="text-4xl font-serif text-gray-900 mb-4">₹{consultationFee}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed italic">
                A non-refundable consultation fee to ensure dedicated time with our senior Ayurvedic experts.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-[#EAD8B3]/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#C4531A]/5 rounded-bl-full" />
              <h3 className="text-xl font-serif mb-6 italic">Arrival Guide</h3>
              <ul className="space-y-4">
                {[
                  "Digital sessions are hosted via Secure Video/Call.",
                  "Payments must be finalized before confirmation.",
                  "Slots are confirmed within 2 business hours.",
                  "Rescheduling allowed 24 hours in advance."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-sm text-gray-600 font-light">
                    <span className="text-[#C4531A] font-bold">0{i+1}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: THE RESERVATION DESK */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-[#EAD8B3]/20">
              <h2 className="text-2xl font-serif italic text-gray-800 mb-10 text-center">Reservation Details</h2>
              <form onSubmit={handleInitialSubmit} className="space-y-8">
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 block px-2">Patient Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#FDFBF3]/50 border-b border-[#EAD8B3] py-4 px-4 focus:border-[#C4531A] outline-none transition-all placeholder:text-gray-300 font-light"
                    />
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 block px-2">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="+91 00000 00000"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full bg-[#FDFBF3]/50 border-b border-[#EAD8B3] py-4 px-4 focus:border-[#C4531A] outline-none transition-all placeholder:text-gray-300 font-light"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 block px-2">Session Mode</label>
                    <select
                      name="consultation"
                      value={formData.consultation}
                      onChange={handleChange}
                      className="w-full bg-[#FDFBF3]/50 border-b border-[#EAD8B3] py-4 px-4 focus:border-[#C4531A] outline-none transition-all font-light"
                    >
                      <option value="">Select Mode</option>
                      <option>Video Consultation</option>
                      <option>Clinical Consultation</option>
                      <option>Telephonic Consultation</option>
                    </select>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 block px-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#FDFBF3]/50 border-b border-[#EAD8B3] py-4 px-4 focus:border-[#C4531A] outline-none transition-all font-light"
                    />
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full bg-[#C4531A] text-white py-5 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#a34415] transition-all shadow-xl shadow-[#C4531A]/20 active:scale-95"
                  >
                    Send Reservation Request
                  </button>
                  {/* <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-widest">
                    Secure 256-bit encrypted booking
                  </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- PREMIUM CONFIRMATION MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 max-w-lg w-full text-center shadow-2xl relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4531A]/5 rounded-bl-full -z-0" />
            <h3 className="text-3xl font-serif italic mb-6 text-gray-900 relative z-10">Confirmation</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-10 relative z-10 text-lg">
              To honor the expertise of our doctors, we require the <span className="text-[#C4531A] font-bold">₹{consultationFee}</span> fee to be settled prior to the session.
              <br /><br />
              Shall we proceed to WhatsApp?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button
                onClick={() => setShowModal(false)}
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-600 transition"
              >
                Go Back
              </button>
              <button
                onClick={handleConfirm}
                className="px-10 py-4 bg-[#C4531A] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#a34415] transition-all shadow-lg"
              >
                Proceed to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- UNAVAILABLE MODAL --- */}
      {showUnavailableModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 max-w-lg w-full text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-red-500 text-2xl font-serif">!</span>
            </div>
            <h3 className="text-2xl font-serif italic mb-4 text-red-600">Rest Day</h3>
            <p className="text-gray-600 font-light whitespace-pre-line mb-10 leading-relaxed">
              {unavailableMessage}
            </p>
            <button
              onClick={() => setShowUnavailableModal(false)}
              className="w-full py-4 border-2 border-[#C4531A] text-[#C4531A] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C4531A] hover:text-white transition-all"
            >
              Select Another Date
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OnlineBooking;