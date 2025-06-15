
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] w-full bg-gradient-to-br from-gray-900 via-gray-800 to-brand-red flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none animate-fade-in" style={{animationDelay:'0s'}} >
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_25%_25%,_white_2px,_transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      {/* Floating Blobs */}
      <div className="absolute top-12 left-6 w-56 h-56 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-12 right-6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      {/* Content */}
      <div className="relative container-full flex items-center justify-center min-h-[70vh]">
        <div className="max-w-5xl mx-auto text-center px-4 md:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: "both" }}>
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">India's Leading Career Platform</span>
          </div>
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent" 
              style={{animationDelay: '0.3s', animationFillMode: "both"}}>
            Level Up Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Tech Career
            </span>
          </h1>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-in" style={{animationDelay: '0.5s', animationFillMode:"both"}}>
            Empowering Careers, One Step at a Time
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: "both" }}>
            Expert guidance, mock interviews, and placement support to help you succeed in your tech career journey.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: "both" }}>
            <Link to="/book-slot">
              <Button className="bg-brand-red hover:bg-red-600 text-white text-xl px-10 py-6 rounded-full font-semibold group shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 animate-bounce" style={{animationDelay:"1s",animationDuration:"1s"}} >
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-xl px-10 py-6 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                Explore Services
              </Button>
            </Link>
          </div>
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 mt-16 pt-8 border-t border-white/20 animate-fade-in" style={{animationDelay: '1s', animationFillMode: "both"}}>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300 animate-scale-in" style={{animationDelay: '1.2s', animationFillMode:"both"}}>5000+</div>
              <div className="text-gray-300 text-lg">Happy Students</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300 animate-scale-in" style={{animationDelay: '1.3s', animationFillMode:"both"}}>95%</div>
              <div className="text-gray-300 text-lg">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300 animate-scale-in" style={{animationDelay: '1.4s', animationFillMode:"both"}}>24/7</div>
              <div className="text-gray-300 text-lg">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
