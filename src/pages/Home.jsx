import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery/>
      <Testimonials />
      <FAQ />
    </>
  );
}

export default Home;
