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

import HealthTips from "./pages/HealthTips";

function App() {
  return (
    <Router>
      {/* Main Layout */}
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Therapies */}
            <Route path="/therapies" element={<Therapies />} />
            <Route path="/therapy/:slug" element={<TherapyDetails />} />

            {/* Testimonials */}
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/testimonials/:slug" element={<TestimonialDetails />} />

            {/* Health Tips */}
            <Route path="/health-tips" element={<HealthTips />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />

          </Routes>
        </main>
        {/* Footer (optional) */}
        <Footer/>

      </div>
    </Router>
  );
}

export default App;