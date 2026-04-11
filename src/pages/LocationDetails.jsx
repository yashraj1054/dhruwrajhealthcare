import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { locations } from "../data/locations";

const LocationDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const loc = locations.find((l) => l.slug === slug);

  if (!loc) return <div className="text-center py-20">Location not found</div>;

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        <button onClick={() => navigate("/locations")} className="mb-6 text-[#C4531A] font-medium">
          ← Back to Locations
        </button>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img src={loc.images[0]} alt={loc.name} className="rounded-3xl h-full w-full object-cover shadow-lg" />
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{loc.name}</h1>
            <p className="text-[#C4531A] font-medium mb-4">Established: {loc.inceptionDate}</p>
            <p className="text-gray-600 mb-6">{loc.description}</p>
            <div className="space-y-2 text-gray-700">
              <p>📍 {loc.address}</p>
              <p>📞 {loc.phone}</p>
              <p>⏰ {loc.timings}</p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loc.facilities.map((f, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-[#EAD8B3] text-center">
                <span className="text-[#C4531A] block mb-2">✔</span>
                <p className="text-sm font-medium">{f}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Expert Staff</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {loc.staff.map((member, i) => (
              <div key={i} className="text-center">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-[#C4531A]" />
                <h4 className="font-bold text-gray-800">{member.name}</h4>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;