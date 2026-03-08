import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
// import { Si1Mg } from "react-icons/si";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(
    product?.images[0]
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back Button */}
        <Link
          to="/store"
          className="text-[#C4531A] mb-8 inline-block"
        >
          ← Back to Store
        </Link>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Image Gallery */}
          <div>
            <img
              src={activeImage}
              alt={product.name}
              className="rounded-3xl shadow-lg mb-6"
            />

            <div className="flex gap-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setActiveImage(img)}
                  className={`h-20 w-20 object-cover rounded-xl cursor-pointer border-2 ${
                    activeImage === img
                      ? "border-[#C4531A]"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-[#C4531A] text-2xl font-bold mb-6">
              {product.price}
            </p>

            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            <h3 className="font-semibold mb-3">Benefits:</h3>
            <ul className="list-disc ml-6 mb-6 text-gray-700">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h3 className="font-semibold mb-3">Usage:</h3>
            <p className="text-gray-700 mb-8">
              {product.usage}
            </p>

            {/* Buy Buttons */}
            <div className="flex flex-col gap-4">

              <h3 className="font-semibold mb-3">Buy Links:</h3>

              <button
                onClick={() =>
                  window.open(product.buyLinks.amazon, "_blank")
                }
                className="bg-[#C4531A] text-white py-3 rounded-full"
              >
              <FaAmazon className="inline ml-2" /> Amazon
              </button>

              <button
                onClick={() =>
                  window.open(product.buyLinks.flipkart, "_blank")
                }
                className="bg-blue-600 text-white py-3 rounded-full"
              >
               <SiFlipkart className="inline ml-2" /> Flipkart 
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;