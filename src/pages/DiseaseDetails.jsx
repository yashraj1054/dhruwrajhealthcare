import { useParams, useNavigate } from "react-router-dom";
import { diseases } from "../data/diseases";
import ReactMarkdown from 'react-markdown'

const DiseaseDetails = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  const categoryData = diseases.find(
    (cat) => cat.categorySlug === category
  );

  const disease =
    categoryData?.diseases.find((d) => d.slug === slug);

  if (!disease) {
    return <div className="p-20 text-center">Not Found</div>;
  }

  const handleBooking = () => {
    const message = `
Hello, I would like to conusult for the following disease:

Disease Name: ${disease.name}
`;

    const encoded = encodeURIComponent(message);
    const number = "919795053040";

    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-[#FDFBF3] min-h-screen">

      <div className="relative h-[60vh]">
        <img
          src={disease.image}
          alt={disease.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col gap-1 items-center justify-center text-white">
          <h1 className="text-4xl font-bold text-center">{disease.name}</h1>
          <h4 className="text-xl font-bold text-center">{disease.nameHindi}</h4>
          <button
          onClick={() => navigate(`/diseases/${category}`)}
          className="absolute top-6 left-6 z-20 bg-white/90 text-black backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
        >
          ← Back to {categoryData.categoryName}
        </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* <button
          onClick={() => navigate("/diseases")}
          className="text-[#C4531A] mb-6"
        >
          ← Back to Diseases
        </button> */}

        <p className="whitespace-pre-line text-lg text-gray-700">
          <div className="prose prose-slate max-w-none">
  <ReactMarkdown>
    {disease.content}
  </ReactMarkdown>
</div>
        </p>
       
  <div className="aspect-video mt-2">
    <iframe
      className="w-full h-full rounded-2xl"
      src={`https://www.youtube.com/embed/${disease.patient1_youtubeId}`}
      title="Patient Testimonial 1"
      allowFullScreen
    ></iframe>
    <p className="text-right  text-[#C4531A] mt-2"><a href="/testimonials">and Many More Happy Patients - View All</a></p>
  </div>

<div className="bg-white rounded-3xl shadow-lg p-10 mt-4">
          <h2 className="text-2xl font-bold text-[#C4531A] mb-6">
            Why Consult Us?
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>✔ We Follow 100% Natural & Safe Procedure</li>
            <li>✔ Performed by Experienced Ayurvedic Expert</li>
            <li>✔ Personalized Treatment Approach</li>
            <li>✔ Proven Holistic Healing Results</li>
          </ul>

          <div className="mt-10">
            <button
              onClick={handleBooking}
              className="bg-[#C4531A] text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseaseDetails;