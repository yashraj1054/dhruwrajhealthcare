// import React, { useState } from "react";
// import { blogs, blogCategories } from "../data/blogs";
// import { Link } from "react-router-dom";

// const Blogs = () => {

//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredBlogs =
//     activeCategory === "All"
//       ? blogs
//       : blogs.filter((blog) => blog.category === activeCategory);

//   return (
//     <section className="bg-[#FDFBF3] min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold mb-4">
//             Ayurvedic Health Blogs
//           </h1>

//           <p className="text-gray-600">
//             Learn Ayurveda, home remedies and health tips.
//           </p>
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">

//           {blogCategories.map((category, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition ${
//                 activeCategory === category
//                   ? "bg-[#C4531A] text-white"
//                   : "bg-white text-gray-700 hover:bg-[#EAD8B3]"
//               }`}
//             >
//               {category}
//             </button>
//           ))}

//         </div>

//         {/* Blog Grid */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {filteredBlogs.map((blog) => (

//             <Link
//               key={blog.slug}
//               to={`/blogs/${blog.slug}`}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
//             >

//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="h-48 w-full object-cover"
//                 loading="lazy"
//               />

//               <div className="p-6">

//                 <p className="text-xs text-[#C4531A] mb-2">
//                   {blog.category}
//                 </p>

//                 <h3 className="text-lg font-semibold mb-3">
//                   {blog.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm">
//                   {blog.excerpt}
//                 </p>

//               </div>

//             </Link>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Blogs;

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
    <section className="bg-[#FDFBF3] min-h-screen py-16 md:py-24 selection:bg-[#C4531A]/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Editorial Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl md:text-[140px] font-serif font-black text-[#C4531A]/5 whitespace-nowrap select-none uppercase tracking-widest">
            Journal
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 text-[#1A1A1A] tracking-tight">
              Ancient <span className="italic font-light text-[#C4531A]">Insights</span>
            </h1>
            <p className="text-[#6B6B6B] max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed px-4">
              Explore our curated chronicles of Ayurvedic wisdom, natural healing, and mindful living.
            </p>
          </div>
        </div>

        {/* Minimalist Filter Navigation */}
        <div className="w-full max-w-full overflow-x-auto no-scrollbar mb-16 md:mb-20 border-b border-[#EAD8B3]/40">
          <div className="flex md:justify-center items-center gap-6 md:gap-10 pb-4 md:pb-8 min-w-max md:min-w-0 px-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative py-2 text-[11px] md:text-sm uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                  activeCategory === category
                    ? "text-[#C4531A] font-bold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C4531A] transition-all duration-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid - Sophisticated Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {filteredBlogs.map((blog, index) => (
            <Link
              key={blog.slug}
              to={`/blogs/${blog.slug}`}
              className="group flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image Container with Elegant Overlay */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-8 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_50px_-12px_rgba(196,83,26,0.15)] transition-all duration-500">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Minimal Read Time or Date overlay if you have it */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-[#C4531A] text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-lg">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog Metadata */}
              <div className="flex flex-col flex-1 px-2">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 group-hover:text-[#C4531A] transition-colors duration-300 leading-snug">
                  {blog.title}
                </h3>
                
                <p className="text-[#6B6B6B] text-sm md:text-base font-light leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Signature-style Link */}
                <div className="mt-auto flex items-center gap-3 text-[#C4531A] text-xs font-bold uppercase tracking-widest">
                  <span>Read Article</span>
                  <span className="w-10 h-[1px] bg-[#C4531A] transition-all duration-500 group-hover:w-16"></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-40 border-t border-[#EAD8B3]/20">
            <p className="font-serif italic text-2xl text-gray-300">New wisdom is being written...</p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Blogs;