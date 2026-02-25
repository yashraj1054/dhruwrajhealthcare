import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Footer from "./components/Footer";

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
          </Routes>
        </main>
        {/* Footer (optional) */}
        <Footer/>

      </div>
    </Router>
  );
}

export default App;