import React, { useState } from "react";
import { blogs, blogCategories } from "../data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section className="bg-[#FDFBF3] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Ayurvedic Health Blogs
          </h1>

          <p className="text-gray-600">
            Learn Ayurveda, home remedies and health tips.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {blogCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-[#C4531A] text-white"
                  : "bg-white text-gray-700 hover:bg-[#EAD8B3]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {filteredBlogs.map((blog) => (

            <Link
              key={blog.slug}
              to={`/blogs/${blog.slug}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />

              <div className="p-6">

                <p className="text-xs text-[#C4531A] mb-2">
                  {blog.category}
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {blog.excerpt}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Blogs;