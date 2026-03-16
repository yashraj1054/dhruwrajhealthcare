import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from 'react-markdown'

const BlogDetails = () => {

  const { slug } = useParams();

  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  const handleBooking = () => {
    const message = `
Hello, I would like to Book an appointment for a consultation regarding the following blog topic:

Blog Title: ${blog.title}
`;

    const encoded = encodeURIComponent(message);
    const number = "919795053040";

    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-[#FDFBF3] py-24">

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
          className="rounded-2xl mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          {blog.date} by <a className="text-[#C4531A] hover:underline" href="/meet-doctor">Dr. R.K. Pal</a>
        </p>

        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-10 mt-2">
          <h2 className="text-md font-bold text-[#C4531A] mb-2">
            Next Blog: <span className="text-gray-700"><a className="text-gray-700" href={`/blogs/${blog.nextBlogSlug}`}>{blog.nextBlogTitle}</a></span>
          </h2>
        </div>

        {/* Book Appointment */}

        <div className="bg-white rounded-3xl shadow-lg p-10 mt-6">
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



export default BlogDetails;