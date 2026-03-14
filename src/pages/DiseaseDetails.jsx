import { useParams, useNavigate } from "react-router-dom";
import { diseases } from "../data/diseases";

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

  return (
    <section className="bg-white min-h-screen">

      <div className="relative h-[60vh]">
        <img
          src={disease.image}
          alt={disease.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">{disease.name}</h1>
          <button
          onClick={() => navigate("/diseases")}
          className="absolute top-6 left-6 z-20 bg-white/90 text-black backdrop-blur px-5 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white transition"
        >
          ← Back to Diseases
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
          {disease.content}
        </p>
      </div>
    </section>
  );
};

export default DiseaseDetails;