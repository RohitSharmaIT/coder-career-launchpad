
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesFAQ from "@/components/ServicesFAQ";
import ServicesCTA from "@/components/ServicesCTA";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16 bg-white">
        <ServicesList />
        <ServicesFAQ />
        <ServicesCTA />
      </div>
      <Footer />
    </>
  );
};

export default Services;
