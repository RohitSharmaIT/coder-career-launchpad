
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  onSelect: (serviceId: string) => void;
  isSelected: boolean;
}

const ServiceCard = ({ 
  id, 
  title, 
  description, 
  price, 
  features, 
  onSelect, 
  isSelected 
}: ServiceCardProps) => {
  return (
    <div 
      className={`
        bg-white rounded-lg border-2 p-6 cursor-pointer transition-all duration-200 hover:shadow-md
        ${isSelected ? 'border-brand-red shadow-lg' : 'border-gray-200 hover:border-gray-300'}
      `}
      onClick={() => onSelect(id)}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-2xl font-bold text-gray-900">{price}</div>
      </div>
      
      <div className="mb-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={`
          w-full py-2 px-4 rounded font-medium transition-colors
          ${isSelected 
            ? 'bg-brand-red text-white hover:bg-red-600' 
            : 'bg-brand-red text-white hover:bg-red-600'
          }
        `}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(id);
        }}
      >
        {isSelected ? 'Selected' : 'Book Now'}
      </Button>
    </div>
  );
};

export default ServiceCard;
