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

import Store from "./pages/Store";

import OnlineBooking from "./pages/OnlineBooking";

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

            {/* Diseases */}
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/diseases/:category" element={<CategoryDiseases />} />
            <Route path="/diseases/:category/:slug" element={<DiseaseDetails />} />
            


            {/* Health Tips */}
            <Route path="/health-tips" element={<HealthTips />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />

            {/* Store */}
            <Route path="/store" element={<Store />} />

            {/* Online Booking */}
            <Route path="/book-appointment" element={<OnlineBooking />} />

          </Routes>
        </main>
        {/* Footer (optional) */}
        <Footer/>

      </div>
    </Router>
  );
}

export default App;