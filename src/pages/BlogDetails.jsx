// import { useNavigate, useParams } from "react-router-dom";


// import { blogs } from "../data/blogs";
// import ReactMarkdown from 'react-markdown'

// const BlogDetails = () => {

//   const { slug } = useParams();

//   const navigate = useNavigate();

//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return <div className="text-center py-20">Blog not found</div>;
//   }

//   const handleBooking = () => {
//     const message = `
// Hello, I would like to Book an appointment for a consultation regarding the following blog topic:

// Blog Title: ${blog.title}
// `;

//     const encoded = encodeURIComponent(message);
//     const number = "919795053040";

//     window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
//   };

//   return (
//     <section className="bg-[#FDFBF3] py-10">

//       <div className="max-w-4xl mx-auto px-6">
//         {/* Back Button */}
// <button
//   onClick={() => navigate("/blogs")}
//   className="mb-10 flex items-center gap-2 text-[#C4531A] hover:underline"
// >
//   ← Back to All Blogs
// </button>

//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="rounded-2xl mb-8"
//         />

//         <h1 className="text-4xl font-bold mb-4">
//           {blog.title}
//         </h1>

//         <p className="text-sm text-gray-500 mb-10">
//           {blog.date} by <a className="text-[#C4531A] hover:underline" href="/meet-doctor">Dr. R.K. Pal</a>
//         </p>

//         <div className="text-gray-700 leading-relaxed whitespace-pre-line">
//           <ReactMarkdown>{blog.content}</ReactMarkdown>
//         </div>

//         <div className="bg-white rounded-3xl shadow-lg p-10 mt-2">
//           <h2 className="text-md font-bold text-[#C4531A] mb-2">
//             Next Blog: <span className="text-gray-700"><a className="text-gray-700" href={`/blogs/${blog.nextBlogSlug}`}>{blog.nextBlogTitle}</a></span>
//           </h2>
//         </div>

//         {/* Book Appointment */}

//         <div className="bg-white rounded-3xl shadow-lg p-10 mt-6">
//           <h2 className="text-2xl font-bold text-[#C4531A] mb-6">
//             Why Consult Us?
//           </h2>

//           <ul className="space-y-4 text-gray-700">
//             <li>✔ We Follow 100% Natural & Safe Procedure</li>
//             <li>✔ Performed by Experienced Ayurvedic Expert</li>
//             <li>✔ Personalized Treatment Approach</li>
//             <li>✔ Proven Holistic Healing Results</li>
//           </ul>

//           <div className="mt-10">
//             <button
//               onClick={handleBooking}
//               className="bg-[#C4531A] text-white px-8 py-3 rounded-full hover:opacity-90 transition"
//             >
//               Book Appointment Now
//             </button>
//           </div>
//         </div>

//       </div>

//     </section>
    
    
//   );
  
// };



// export default BlogDetails;


import { useState } from "react"; // Added useState
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from 'react-markdown'

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // State to track selected language: 'en' or 'hi'
  const [language, setLanguage] = useState('en');

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  const handleBooking = () => {
    const message = `Hello, I would like to Book an appointment regarding: ${blog.title}`;
    const encoded = encodeURIComponent(message);
    const number = "919795053040";
    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-[#FDFBF3] py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/blogs")}
          className="mb-10 flex items-center gap-2 text-[#C4531A] hover:underline"
        >
          ← Back to All Blogs
        </button>

        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-2xl mb-6 w-full object-cover"
          loading="lazy"
        />

        {/* Language Selection Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setLanguage('en')}
            className={`px-6 py-2 rounded-full border-2 border-[#C4531A] transition font-medium ${
              language === 'en' 
              ? 'bg-[#C4531A] text-white' 
              : 'bg-transparent text-[#C4531A] hover:bg-[#fceee7]'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-6 py-2 rounded-full border-2 border-[#C4531A] transition font-medium ${
              language === 'hi' 
              ? 'bg-[#C4531A] text-white' 
              : 'bg-transparent text-[#C4531A] hover:bg-[#fceee7]'
            }`}
          >
            हिंदी (Hindi)
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          {language === 'en' ? blog.title : blog.titleHindi || blog.title}
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          {blog.date} by <a className="text-[#C4531A] hover:underline" href="/meet-doctor">Dr. R.K. Pal</a>
        </p>

        {/* Conditional Content Rendering */}
        <div className="text-gray-700 leading-relaxed prose max-w-none">
          <ReactMarkdown>
            {language === 'en' ? blog.content : blog.contentHindi || blog.content}
          </ReactMarkdown>
        </div>

        {/* Next Blog Link */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mt-12">
          <h2 className="text-md font-bold text-[#C4531A] mb-2">
            Next Blog: <span className="text-gray-700">
              <a className="hover:underline" href={`/blogs/${blog.nextBlogSlug}`}>
                <ReactMarkdown>
            {language === 'en' ? blog.nextBlogTitle : blog.nextBlogTitleHindi || blog.nextBlogTitle}
          </ReactMarkdown>
              </a>
            </span>
          </h2>
        </div>

        {/* Book Appointment Section */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mt-6">
          <h2 className="text-2xl font-bold text-[#C4531A] mb-6">Why Consult Us?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✔ We Follow 100% Natural & Safe Procedure</li>
            <li>✔ Performed by Experienced Ayurvedic Expert</li>
            <li>✔ Personalized Treatment Approach</li>
            <li>✔ Proven Holistic Healing Results</li>
          </ul>
          <div className="mt-10">
            <button
              onClick={handleBooking}
              className="bg-[#C4531A] text-white px-8 py-3 rounded-full hover:opacity-90 transition font-semibold"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;