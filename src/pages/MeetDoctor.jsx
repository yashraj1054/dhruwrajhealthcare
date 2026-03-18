import React from "react";
import { Link } from "react-router-dom";

const MeetDoctor = () => {
  return (
    <section className="bg-[#FDFBF3] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Meet Our Doctor
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining ancient Ayurvedic wisdom with modern clinical practice,
            our expert doctor is dedicated to providing personalized and
            holistic healthcare solutions.
          </p>
        </div>

        {/* Doctor Profile */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Doctor Image */}
          <div className="flex justify-center">
            <img
              src="/images/doctor3.jpg"
              alt="Dr RK Pal"
              className="rounded-3xl shadow-xl w-full max-w-md object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div>

            <h2 className="text-3xl font-bold mb-2">
              Dr. R.K Pal
            </h2>

            <h3 className="text-lg text-[#7A3E1D] mb-4">
              Ayurvedic Expert & Panchkarma Specialist
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Dr. R.K. Pal is a highly experienced Ayurvedic physician with more than 12 years of clinical as well as academic experience. 
              He is currently working as an Associate Professor in the Department of Panchakarma. 
              He is also an author of Ayurvedic academic books and has published many articles in journals related to Ayurveda and Panchakarma therapies. 
              He has successfully treated thousands of patients suffering from chronic diseases using authentic Ayurvedic treatments.
            </p>

            {/* Qualification */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-[#C4531A]">
                Qualifications
              </h4>

              <ul className="space-y-1 text-gray-700">
                <li> <b>1. B.A.M.S.</b>  – Bachelor of Ayurvedic Medicine & Surgery</li>
                <li> <b>2. M.D.</b>  – Panchkarma </li>
                <li> <b>3. C.A.R.D</b> – Certificate in Anorectal Disease</li>
                <li> <b>4. Ph.D. (Sch.)</b> – Ayurveda Medicine</li>
              </ul>
            </div>

            {/* Expertise */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-2 text-[#C4531A]">
                Areas of Expertise
              </h4>

              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                <li>✔ Joint Pain & Arthritis</li>
                <li>✔ Diabetes Management</li>
                <li>✔ Thyroid & PCOD</li>
                <li>✔ Infertility Treatment</li>
                <li>✔ Digestive Disorders</li>
                <li>✔ Panchkarma Detox</li>
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">

              <div className="bg-white rounded-xl p-4 shadow text-center">
                <h3 className="text-2xl font-bold text-[#C4531A]">13+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow text-center">
                <h3 className="text-2xl font-bold text-[#C4531A]">8000+</h3>
                <p className="text-sm text-gray-600">Patients Treated</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow text-center">
                <h3 className="text-2xl font-bold text-[#C4531A]">20+</h3>
                <p className="text-sm text-gray-600">Therapies</p>
              </div>

            </div>

            {/* CTA Button */}
            <Link
              to="/book-appointment"
              className="inline-block bg-[#C4531A] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Book Consultation
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MeetDoctor;