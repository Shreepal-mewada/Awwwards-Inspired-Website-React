import React from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import Features from "./components/Features";
import ImgBand from "./components/ImgBand";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Features />
      <ImgBand />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
