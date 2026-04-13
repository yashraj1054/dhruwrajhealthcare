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


// import { useState } from "react"; // Added useState
// import { useNavigate, useParams } from "react-router-dom";
// import { blogs } from "../data/blogs";
// import ReactMarkdown from 'react-markdown'

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
  
//   // State to track selected language: 'en' or 'hi'
//   const [language, setLanguage] = useState('en');

//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return <div className="text-center py-20">Blog not found</div>;
//   }

//   const handleBooking = () => {
//     const message = `Hello, I would like to Book an appointment regarding: ${blog.title}`;
//     const encoded = encodeURIComponent(message);
//     const number = "919795053040";
//     window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
//   };

//   return (
//     <section className="bg-[#FDFBF3] py-10">
//       <div className="max-w-4xl mx-auto px-6">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate("/blogs")}
//           className="mb-10 flex items-center gap-2 text-[#C4531A] hover:underline"
//         >
//           ← Back to All Blogs
//         </button>

//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="rounded-2xl mb-6 w-full object-cover"
//           loading="lazy"
//         />

//         {/* Language Selection Buttons */}
//         <div className="flex gap-4 mb-8">
//           <button
//             onClick={() => setLanguage('en')}
//             className={`px-6 py-2 rounded-full border-2 border-[#C4531A] transition font-medium ${
//               language === 'en' 
//               ? 'bg-[#C4531A] text-white' 
//               : 'bg-transparent text-[#C4531A] hover:bg-[#fceee7]'
//             }`}
//           >
//             English
//           </button>
//           <button
//             onClick={() => setLanguage('hi')}
//             className={`px-6 py-2 rounded-full border-2 border-[#C4531A] transition font-medium ${
//               language === 'hi' 
//               ? 'bg-[#C4531A] text-white' 
//               : 'bg-transparent text-[#C4531A] hover:bg-[#fceee7]'
//             }`}
//           >
//             हिंदी (Hindi)
//           </button>
//         </div>

//         <h1 className="text-4xl font-bold mb-4">
//           {language === 'en' ? blog.title : blog.titleHindi || blog.title}
//         </h1>

//         <p className="text-sm text-gray-500 mb-10">
//           {blog.date} by <a className="text-[#C4531A] hover:underline" href="/meet-doctor">Dr. R.K. Pal</a>
//         </p>

//         {/* Conditional Content Rendering */}
//         <div className="text-gray-700 leading-relaxed prose max-w-none">
//           <ReactMarkdown>
//             {language === 'en' ? blog.content : blog.contentHindi || blog.content}
//           </ReactMarkdown>
//         </div>

//         {/* Next Blog Link */}
//         <div className="bg-white rounded-3xl shadow-lg p-10 mt-12">
//           <h2 className="text-md font-bold text-[#C4531A] mb-2">
//             Next Blog: <span className="text-gray-700">
//               <a className="hover:underline" href={`/blogs/${blog.nextBlogSlug}`}>
//                 <ReactMarkdown>
//             {language === 'en' ? blog.nextBlogTitle : blog.nextBlogTitleHindi || blog.nextBlogTitle}
//           </ReactMarkdown>
//               </a>
//             </span>
//           </h2>
//         </div>

//         {/* Book Appointment Section */}
//         <div className="bg-white rounded-3xl shadow-lg p-10 mt-6">
//           <h2 className="text-2xl font-bold text-[#C4531A] mb-6">Why Consult Us?</h2>
//           <ul className="space-y-4 text-gray-700">
//             <li>✔ We Follow 100% Natural & Safe Procedure</li>
//             <li>✔ Performed by Experienced Ayurvedic Expert</li>
//             <li>✔ Personalized Treatment Approach</li>
//             <li>✔ Proven Holistic Healing Results</li>
//           </ul>
//           <div className="mt-10">
//             <button
//               onClick={handleBooking}
//               className="bg-[#C4531A] text-white px-8 py-3 rounded-full hover:opacity-90 transition font-semibold"
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


import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from 'react-markdown';

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-40 bg-[#FDFBF3] min-h-screen font-serif italic text-xl">
        The wisdom you seek could not be found.
      </div>
    );
  }

  const handleBooking = () => {
    const message = `Hello, I would like to Book an appointment regarding: ${blog.title}`;
    const encoded = encodeURIComponent(message);
    const number = "919795053040";
    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-[#FDFBF3] min-h-screen pb-24 selection:bg-[#C4531A]/10">
      {/* Editorial Hero Header */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF3] via-transparent to-transparent" />
        
        <div className="absolute top-8 left-8">
          <button
            onClick={() => navigate("/blogs")}
            className="group flex items-center gap-3 text-white bg-black/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-[#C4531A] transition-all duration-500"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> 
            <span className="text-xs uppercase tracking-[0.2em] font-bold">Back to Journal</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-22 relative z-10">
        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.05)] p-8 md:p-16">
          
          {/* Language Toggle & Category */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 pb-8 border-b border-gray-50">
            <span className="text-[#C4531A] text-[10px] font-bold uppercase tracking-[0.3em] bg-[#FDFBF3] px-4 py-1.5 rounded-lg">
              {blog.category}
            </span>
            
            <div className="flex bg-[#FDFBF3] p-1.5 rounded-full border border-[#EAD8B3]/30">
              <button
                onClick={() => setLanguage('en')}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  language === 'en' ? 'bg-[#C4531A] text-white shadow-md' : 'text-gray-400'
                }`}
              >
                ENGLISH
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  language === 'hi' ? 'bg-[#C4531A] text-white shadow-md' : 'text-gray-400'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Title & Meta */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-tight mb-6">
              {language === 'en' ? blog.title : blog.titleHindi || blog.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full  flex items-center justify-center  font-serif italic text-lg border border-[#C4531A]/10">
                <img src="/images/doctor2.jpg" alt="" className="w-10 h-10 rounded-full" />
              </div>
              <p className="text-sm text-gray-500">
                Curated by <Link to="/meet-doctor" className="text-[#C4531A] font-bold hover:underline">Dr. R.K. Pal</Link>
                <span className="mx-3 text-gray-300">•</span>
                {blog.date}
              </p>
            </div>
          </header>

          {/* Markdown Content with Premium Styling */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-[#C4531A] prose-li:text-gray-600">
            <ReactMarkdown>
              {language === 'en' ? blog.content : blog.contentHindi || blog.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Next Read - Subtle & Elegant */}
        <div className="mt-16 group">
          <Link to={`/blogs/${blog.nextBlogSlug}`} className="flex flex-col md:flex-row items-center justify-between p-8 rounded-[2rem] bg-white border border-[#EAD8B3]/20 hover:border-[#C4531A]/30 transition-all duration-500 shadow-sm">
            <div className="mb-4 md:mb-0">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#C4531A] uppercase mb-1">Coming Up Next</p>
              <h4 className="text-xl font-serif text-gray-800 italic">
                {language === 'en' ? blog.nextBlogTitle : blog.nextBlogTitleHindi || blog.nextBlogTitle}
              </h4>
            </div>
            <span className="w-12 h-12 rounded-full bg-[#FDFBF3] flex items-center justify-center text-[#C4531A] group-hover:bg-[#C4531A] group-hover:text-white transition-all duration-500">
              →
            </span>
          </Link>
        </div>

        {/* Call to Action - The Consultation Sanctuary */}
        <div className="mt-12 bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-[#EAD8B3]/20 flex flex-col md:flex-row">
          <div className="bg-[#C4531A] p-12 md:w-2/5 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-serif mb-4 leading-tight italic">Deepen Your Healing Journey</h2>
            <p className="text-white/80 font-light text-sm leading-relaxed">
              Every body is unique. Let us design a personalized Ayurvedic path tailored specifically to your prakriti.
            </p>
          </div>
          <div className="p-12 md:w-3/5 flex flex-col justify-center bg-white">
            <ul className="space-y-4 mb-10">
              {["100% Natural & Safe Procedures", "Experienced Ayurvedic Experts", "Personalized Treatment Approach"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#FDFBF3] border border-[#C4531A]/20 flex items-center justify-center text-[#C4531A] text-[10px]">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={handleBooking}
              className="w-full md:w-max bg-[#C4531A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#a34415] transition-all shadow-lg shadow-[#C4531A]/20"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;