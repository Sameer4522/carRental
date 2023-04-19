import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import VehicleModalPage from "./pages/VehicleModalPage";
import TestimonialPage from "./pages/TestimonialPage";
import OurTeamPage from "./pages/OurTeamPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/models" element={<VehicleModalPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
