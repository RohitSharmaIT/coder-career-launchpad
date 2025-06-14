
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
  imageSrc, 
  imageAlt,
  serviceId,
  buttons,
  includes 
}: ServiceItemProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-full flex flex-col">
      {/* Image Section with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon Overlay */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 text-brand-red transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {shortDescription}
          </p>
        </div>
        
        {/* Features */}
        <div className="mb-6 flex-1">
          <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-red rounded-full"></div>
            What's Included
          </h4>
          <ul className="space-y-3">
            {includes.map((item, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-sm text-gray-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Action Button */}
        <div className="mt-auto">
          {buttons.bookSlot && (
            <Link 
              to={serviceId ? `/book-slot?service=${serviceId}` : "/book-slot"}
              className="block"
            >
              <Button className="w-full bg-brand-red hover:bg-red-600 text-white group/btn relative overflow-hidden py-3 text-base font-semibold">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Service
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernServiceCard;
