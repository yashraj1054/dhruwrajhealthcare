import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Footer from "./components/Footer";

import Therapies from "./pages/Therapies";
import TherapyDetails from "./pages/TherapyDetails";

import Testimonials from "./pages/Testimonials";
import TestimonialDetails from "./pages/TestimonialDetails";

import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";

import Diseases from "./pages/Diseases";
import CategoryDiseases from "./pages/CategoryDiseases";
import DiseaseDetails from "./pages/DiseaseDetails";

import HealthTips from "./pages/HealthTips";

import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";

import OnlineBooking from "./pages/OnlineBooking";

import ScrollToTop from "./hooks/ScrollToTop";

import NotFound from "./pages/NotFound";
import ValidateSlug from "./hooks/ValidateSlug";

import { therapies } from "./data/therapies";

import MeetDoctor from "./pages/MeetDoctor";

import { testimonials } from "./data/testimonials";
import { services } from "./data/services";
import { diseases } from "./data/diseases";
import { products } from "./data/products";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Main Layout */}
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Therapies */}
            <Route path="/therapies" element={<Therapies />} />
            <Route path="/therapy/:slug" element={<ValidateSlug data={therapies} paramName="slug">
      <TherapyDetails />
    </ValidateSlug>} />

            {/* Testimonials */}
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/testimonials/:slug" element={<TestimonialDetails />} />

            {/* Diseases */}
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/diseases/:category" element={<CategoryDiseases />} />
            <Route path="/diseases/:category/:slug" element={ <DiseaseDetails />} />
            


            {/* Health Tips */}
            <Route path="/health-tips" element={<HealthTips />} />

            {/* Blogs */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />

            {/* Store */}
            <Route path="/store" element={<Store />} />
            <Route path="/store/:slug" element={<ProductDetails />} />

            {/* Online Booking */}
            <Route path="/book-appointment" element={<OnlineBooking />} />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />

{/* Our Doctor*/}
<Route path="/meet-doctor" element={<MeetDoctor />} />

          </Routes>
        </main>
        {/* Footer */}
        <Footer/>

      </div>
    </Router>
  );
}

export default App;