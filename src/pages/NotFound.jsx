import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-[#FDFBF3] min-h-screen flex items-center justify-center px-6">

      <div className="max-w-xl text-center">

        {/* 404 Number */}
        <h1 className="text-7xl font-bold text-[#C4531A] mb-4">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="bg-[#C4531A] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            Go Back Home
          </Link>

          <Link
            to="/book-appointment"
            className="border border-[#C4531A] text-[#C4531A] px-6 py-3 rounded-full hover:bg-[#C4531A] hover:text-white transition"
          >
            Book Consultation
          </Link>

        </div>

      </div>

    </section>
  );
};

export default NotFound;