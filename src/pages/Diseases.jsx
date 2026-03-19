import { Link } from "react-router-dom";
import { diseases } from "../data/diseases";
import { Helmet } from "react-helmet-async";

<Helmet>

<title>
Ayurvedic Treatment for Diseases | Dhruwraj Healthcare
</title>

<meta
name="description"
content="Explore Ayurvedic treatment for diabetes, thyroid, joint pain, skin diseases and other chronic conditions at Dhruwraj Healthcare."
/>

<link rel="canonical" href="https://dhruwraj.com/diseases" />

</Helmet>

const Diseases = () => {
  return (
    <section className="bg-[#FDFBF3] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">
            Diseases We Treat
          </h1>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {diseases.map((category) => (
            <Link
              key={category.categorySlug}
              to={`/diseases/${category.categorySlug}`}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >

              {/* Image (First disease image as thumbnail) */}
              <img
                src={category.image}
                alt={category.categoryName}
                className="w-full h-56 object-cover"
                loading="lazy"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {category.categoryName}
                </h2>
                <h4 className="text-2xl font-semibold text-gray-800">
                  ( {category.categoryNameHindi} )
                </h4>

                <p className="text-gray-500 mt-2">
                  {category.diseases.length} Conditions Covered
                </p>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Diseases;