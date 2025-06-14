
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesFAQ from "@/components/ServicesFAQ";
import ServicesCTA from "@/components/ServicesCTA";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20">
        <ServicesHero />
      </div>
      
      {/* Main Content */}
      <div className="bg-white">
        <ServicesList />
        <ServicesFAQ />
        <ServicesCTA />
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
