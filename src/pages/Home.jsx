import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>KMRU Fertilizers & Pesticides</title>
        <meta name="description" content="Explore our 100% organic fertilizers and effective eco-friendly pesticides for healthy crop growth." />
        <meta name="keywords" content="organic fertilizers, pesticides, eco farming, agriculture products" />
        <meta name="author" content="Fertilizers & Pesticides Team" />
        <meta property="og:title" content="Fertilizers & Pesticides - 100% Organic Products" />
        <meta property="og:description" content="Discover a range of trusted and affordable farming solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.jpeg" />
        <meta property="og:url" content="https://kmrv-fertilizers.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kmrv-fertilizers.vercel.app/" />
      </Helmet>
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default Home;
