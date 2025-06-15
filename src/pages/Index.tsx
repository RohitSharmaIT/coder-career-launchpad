
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
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <Navbar />
      {/* Hero Section with Padding */}
      <main className="flex-1">
        <div className="pt-20 pb-16">
          <HeroSection />
        </div>
        {/* Container for Main Content */}
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 space-y-20">
          {/* Animate-in for each section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: "both" }}>
            <ServicesSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: "both" }}>
            <StatsSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: "both" }}>
            <JobsSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: "both" }}>
            <BlogsSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: "both" }}>
            <TestimonialsSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: "both" }}>
            <SubscribeBox />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
