
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { ServiceItemProps } from '../ServiceItem';

const ModernServiceCard = ({ 
  title, 
  shortDescription, 
  icon, 
  price, 
  imageSrc, 
  imageAlt,
  serviceId,
  buttons,
  includes 
}: ServiceItemProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
      {/* Image Section with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-brand-red transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          {icon}
        </div>
      </div>

      <CardContent className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-red transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {shortDescription}
          </p>
        </div>
        
        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-brand-red">{price}</span>
            <span className="text-gray-500 text-sm">per session</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
            What's included:
          </h4>
          <ul className="space-y-2">
            {includes.slice(0, 3).map((item, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-sm text-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
            {includes.length > 3 && (
              <li className="text-sm text-gray-500 italic">
                +{includes.length - 3} more features
              </li>
            )}
          </ul>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          {buttons.bookSlot && (
            <Link 
              to={serviceId ? `/book-slot?service=${serviceId}` : "/book-slot"}
              className="block"
            >
              <Button className="w-full bg-brand-red hover:bg-red-600 text-white group/btn relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>
          )}
          
          {buttons.learnMore && (
            <Button 
              variant="outline" 
              className="w-full border-gray-200 text-gray-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all duration-300"
            >
              Learn More
            </Button>
          )}
          
          {buttons.viewPricing && (
            <Link to="/pricing" className="block">
              <Button className="w-full bg-brand-red hover:bg-red-600 text-white">
                View Pricing
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernServiceCard;
