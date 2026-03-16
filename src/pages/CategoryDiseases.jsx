import { useParams, useNavigate, Link } from "react-router-dom";
import { diseases } from "../data/diseases";

const CategoryDiseases = () => {
  const { category } = useParams();

  const navigate = useNavigate();

  const categoryData = diseases.find(
    (cat) => cat.categorySlug === category
  );

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Category Not Found</h1>
      </div>
    );
  }

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back Button */}
<button
  onClick={() => navigate("/diseases")}
  className="mb-10 flex items-center gap-2 text-[#C4531A] hover:underline"
>
  ← Back to All Diseases
</button>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">
            {categoryData.categoryName}
          </h1>
          <p className="text-gray-600 mt-4">
            Ayurvedic Treatment for {categoryData.categoryName}
          </p>
        </div>

        {/* Disease Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {categoryData.diseases.map((disease) => (
            <Link
              key={disease.slug}
              to={`/diseases/${category}/${disease.slug}`}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            >

              <img
                src={disease.image}
                alt={disease.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {disease.name} ( {disease.nameHindi} )
                </h2>

                <p className="text-gray-500 mt-2">
                  Click to know more about Ayurvedic treatment.
                </p>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CategoryDiseases;