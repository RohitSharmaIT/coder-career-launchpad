
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-red to-red-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_25%_25%,_white_2px,_transparent_2px)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-300 fill-current" />
            <span className="text-white text-sm font-medium">Ready to Get Started?</span>
          </div>
          
          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join thousands of professionals who have transformed their careers with our expert services. 
            Take the next step in your professional journey today.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center items-center">
            <Link to="/book-slot">
              <Button 
                size="lg"
                className="bg-white text-brand-red hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold group shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book a Service Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-red-100 text-sm mb-4">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">Google</div>
              <div className="text-white font-semibold">Microsoft</div>
              <div className="text-white font-semibold">Amazon</div>
              <div className="text-white font-semibold">Netflix</div>
              <div className="text-white font-semibold">Meta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
