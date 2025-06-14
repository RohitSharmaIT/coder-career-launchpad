
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
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      {/* Full-screen Hero Section */}
      <HeroSection />

      {/* Full-width Services Section */}
      <div className="full-width">
        <ServicesSection />
      </div>

      {/* Full-width Stats Section */}
      <div className="full-width">
        <StatsSection />
      </div>

      {/* Full-width Featured Jobs Section */}
      <div className="full-width">
        <JobsSection />
      </div>

      {/* Full-width Recent Blogs Section */}
      <div className="full-width">
        <BlogsSection />
      </div>

      {/* Full-width Testimonials Section */}
      <div className="full-width">
        <TestimonialsSection />
      </div>

      {/* Full-width Subscribe Section */}
      <div className="full-width">
        <SubscribeBox />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
