import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Comparison from "./components/Comparison";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <Comparison />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
