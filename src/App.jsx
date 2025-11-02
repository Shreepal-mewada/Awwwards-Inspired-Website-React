import React from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import Features from "./components/Features";
import ImgBand from "./components/ImgBand";
import Footer from "./components/Footer";
import Loader from "./components/Loader";                                   
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until all images, videos, etc. are loaded
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  // return (
  //   <div>
  //     <Navbar />
  //     <Hero />
  //     <Section />
  //     <Features />
  //     <ImgBand />
  //     <Section2 />
  //     <Footer />
  //   </div>
  // );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Section />
          <Features />
          <ImgBand />
          <Section2 />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
