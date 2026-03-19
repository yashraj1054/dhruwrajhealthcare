import React, { useState } from "react";
import { products, productCategories } from "../data/products";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; 
<Helmet>

<title>
Ayurvedic Products Store | Natural Herbal Medicines
</title>

<meta
name="description"
content="Buy recommended Ayurvedic medicines, herbal supplements and natural health products from Dhruwraj Healthcare store."
/>

<link rel="canonical" href="https://dhruwraj.com/store" />

</Helmet>

const Store = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

        const navigate = useNavigate();

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Ayurvedic Wellness Store
          </h1>
          <p className="text-gray-600">
            Explore our recommended Ayurvedic products available on Amazon.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {productCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-[#C4531A] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-[#EAD8B3]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {filteredProducts.map((product) => {
            const finalPrice = Math.round(
              product.originalPrice -
                (product.originalPrice * product.discount) / 100
            );

            const savings =
              product.originalPrice - finalPrice;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden flex flex-col relative"
              >
                {/* OUT OF STOCK Badge */}
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10">
                    Out of Stock
                  </div>
                )}

                {/* Discount Badge */}
                {product.inStock && (
                  <div className="absolute top-4 left-4 bg-[#C4531A] text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10">
                    {product.discount}% OFF
                  </div>
                )}

                {/* Product Image */}
                <img
                  src={product.productImage}
                  alt={product.name}
                  loading="lazy"
                  className={`h-60 w-full object-cover ${
                    !product.inStock ? "grayscale opacity-70" : ""
                  }`}
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3">
                    {product.name}
                  </h3>

                  {/* Price Section */}
                  <div className="mb-4">
                    <span className="text-gray-400 line-through mr-2 text-sm">
                      ₹{product.originalPrice}
                    </span>

                    <span className="text-[#C4531A] font-bold text-xl">
                      ₹{finalPrice}
                    </span>

                    <p className="text-green-600 text-xs mt-1">
                      You save ₹{savings}
                    </p>
                  </div>

                  {/* Buy Button */}
                  <button
  disabled={!product.inStock}
  onClick={() =>
    product.inStock &&
    navigate(`/store/${product.slug}`)
  }
  className={`mt-auto py-2 rounded-full transition ${
    product.inStock
      ? "bg-[#C4531A] text-white hover:opacity-90"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  {product.inStock ? "View Details" : "Currently Unavailable"}
</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Store;