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

  // 🔴 MANUALLY BLOCK DOCTOR UNAVAILABLE DATES
  const blockedDates = [
    "2026-03-12","2026-03-13",
  ];

  // 🔹 Disable past dates
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Check Sunday
  const isSunday = (dateString) => {
    const date = new Date(dateString);
    return date.getDay() === 0;
  };

  // 🔥 Find Next Available Date Automatically
  const getNextAvailableDate = (selectedDate) => {
    let nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);

    while (true) {
      const formatted = nextDate.toISOString().split("T")[0];

      const isPast =
        nextDate < new Date(new Date().toISOString().split("T")[0]);

      const isSun = nextDate.getDay() === 0;

      const isBlocked = blockedDates.includes(formatted);

      if (!isPast && !isSun && !isBlocked) {
        return formatted;
      }

      nextDate.setDate(nextDate.getDate() + 1);
    }
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.consultation ||
      !formData.date
    ) {
      alert("Please fill all fields");
      return;
    }

    // Sunday Check
    if (isSunday(formData.date)) {
      const suggestion = getNextAvailableDate(formData.date);

      setUnavailableMessage(
        `Doctor is not available on Sundays.\n\nNext available date is: ${suggestion}`
      );
      setShowUnavailableModal(true);
      return;
    }

    // Blocked Date Check
    if (blockedDates.includes(formData.date)) {
      const suggestion = getNextAvailableDate(formData.date);

      setUnavailableMessage(
        `Doctor is not available on the selected date.\n\nNext available date is: ${suggestion}`
      );
      setShowUnavailableModal(true);
      return;
    }

    setShowModal(true);
  };

  const handleConfirm = () => {
    const message = `
New Consultation Booking Request

Patient Name: ${formData.name}
Mobile Number: ${formData.mobile}
Consultation Type: ${formData.consultation}
Preferred Date: ${formData.date}

Patient has agreed to pay ₹${consultationFee} before consultation.
`;

    const whatsappURL = `https://wa.me/${clinicNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setShowModal(false);

    setFormData({
      name: "",
      mobile: "",
      consultation: "",
      date: "",
    });
  };

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Book Online Consultation
          </h1>

          <p className="text-gray-600 mb-8">
            Fill the form below to request an appointment.
            After submission, we will connect with you on WhatsApp to confirm your consultation timing.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h3 className="text-xl font-semibold text-[#C4531A]">
              Consultation Fee
            </h3>
            <p className="text-3xl font-bold mt-2">₹{consultationFee}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-[#C4531A]">
              Important
            </h3>
            <p className="text-gray-600 mt-2">
              Consultation charges must be paid before confirmation of appointment.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-8">
            Appointment Details
          </h2>

          <form onSubmit={handleInitialSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-4 rounded-md focus:ring-2 focus:ring-[#C4531A]"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border p-4 rounded-md focus:ring-2 focus:ring-[#C4531A]"
            />

            <select
              name="consultation"
              value={formData.consultation}
              onChange={handleChange}
              className="w-full border p-4 rounded-md focus:ring-2 focus:ring-[#C4531A]"
            >
              <option value="">Select Consultation Type</option>
              <option>Video Consultation</option>
              <option>Clinical Consultation</option>
              <option>Telephonic Consultation</option>
            </select>

            {/* Date Input */}
            <input
              type="date"
              name="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              className="w-full border p-4 rounded-md focus:ring-2 focus:ring-[#C4531A]"
            />

            <button
              type="submit"
              className="w-full bg-[#C4531A] text-white py-4 rounded-md font-semibold tracking-widest hover:opacity-90 transition"
            >
              Submit Inquiry
            </button>

          </form>
        </div>
      </div>

      {/* PREMIUM CONSULTATION CHARGE MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">

            <h3 className="text-2xl font-bold mb-4 text-[#C4531A]">
              Consultation Charges
            </h3>

            <p className="text-gray-700 mb-6">
              Consultation charges are ₹{consultationFee}.  
              You will have to pay before consultation.
              <br /><br />
              Do you wish to proceed?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                className="px-6 py-2 bg-[#C4531A] text-white rounded-full hover:opacity-90 transition"
              >
                Proceed
              </button>
            </div>

          </div>
        </div>
      )}

      {/* PREMIUM UNAVAILABLE DATE MODAL */}
      {showUnavailableModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">

            <h3 className="text-2xl font-bold mb-4 text-red-600">
              Doctor Not Available
            </h3>

            <p className="text-gray-700 whitespace-pre-line mb-6">
              {unavailableMessage}
            </p>

            <button
              onClick={() => setShowUnavailableModal(false)}
              className="px-6 py-2 bg-[#C4531A] text-white rounded-full hover:opacity-90 transition"
            >
              Select New Date
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default OnlineBooking;