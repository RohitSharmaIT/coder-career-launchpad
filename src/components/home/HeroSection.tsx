
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-brand-red flex items-center justify-center py-16 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none animate-fade-in">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_25%_25%,_white_2px,_transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      {/* Floating Blobs */}
      <div className="absolute top-12 left-6 w-40 h-40 md:w-56 md:h-56 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-12 right-6 w-56 h-56 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      {/* Content */}
      <div className="relative w-full">
        <div className="max-w-5xl mx-auto text-center px-4 md:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">India's Leading Career Platform</span>
          </div>
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Level Up Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Tech Career
            </span>
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 md:mb-8 leading-relaxed animate-fade-in">
            Empowering Careers, One Step at a Time
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed animate-fade-in">
            Expert guidance, mock interviews, and placement support to help you succeed in your tech career journey.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center mb-2 md:mb-6 animate-fade-in">
            <Link to="/book-slot">
              <Button className="bg-brand-red hover:bg-red-600 text-white text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 rounded-full font-semibold group shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 animate-bounce">
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
