
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
      {/* Main content with consistent padding */}
      <main className="flex-1">
        <div className="pt-16 pb-8 md:pt-24 md:pb-12">
          <HeroSection />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 space-y-16 md:space-y-24">
          <ServicesSection />
          <StatsSection />
          <JobsSection />
          <BlogsSection />
          <TestimonialsSection />
          <SubscribeBox />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
