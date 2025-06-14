
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-brand-red overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_25%_25%,_white_2px,_transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative container mx-auto pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">India's Leading Career Platform</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in text-white leading-tight" style={{animationDelay: '0.2s'}}>
            Level Up Your{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Tech Career
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Empowering Careers, One Step at a Time
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
            Expert guidance, mock interviews, and placement support to help you succeed in your tech career journey.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Link to="/book-slot">
              <Button className="bg-brand-red hover:bg-red-600 text-white text-lg px-8 py-6 rounded-full font-semibold group shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                Explore Services
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-8 border-t border-white/20 animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-gray-300 text-sm">Happy Students</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
