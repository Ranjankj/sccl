// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import VisionSection from "./components/Vision";
import Services from "./components/Services";
import ClientsCard from "./components/ClientsCard";
import WhyChooseUs from "./components/WhyUs";
import Team from "./components/Team";
import Footer from "./components/Footer";
import AboutPage from "./components/about/AboutPage";
import ContactUs from "./components/contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import FAQPage from "./components/faqs/Faq";
import GetAQuotePage from "./components/getQuote/Index";
import ComingSoon from "./components/comingSoon/Index";
const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <VisionSection />
              <Services />
              <ClientsCard />
              <WhyChooseUs />
              <Team />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/getQuote" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
