
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscribeBox from "@/components/SubscribeBox";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import JobsSection from "@/components/home/JobsSection";
import BlogsSection from "@/components/home/BlogsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Enhanced Services Section */}
      <ServicesSection />

      {/* Enhanced Stats Section */}
      <StatsSection />

      {/* Enhanced Featured Jobs Section */}
      <JobsSection />

      {/* Enhanced Recent Blogs Section */}
      <BlogsSection />

      {/* Enhanced Testimonials Section */}
      <TestimonialsSection />

      {/* Enhanced Subscribe Section */}
      <div className="animate-fade-in">
        <SubscribeBox />
      </div>
      
      <Footer />
    </>
  );
};

export default HomePage;
