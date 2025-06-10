
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesList from "@/components/ServicesList";
import ServicesFAQ from "@/components/ServicesFAQ";
import ServicesCTA from "@/components/ServicesCTA";

const Services = () => {
  return (
    <div className="pt-20">
      <Navbar />
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
