
import { useState, ReactNode } from 'react';
import ServicesImage from './services/ServicesImage';
import ServicesActions from './services/ServicesActions';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export interface ServiceItemProps {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ReactNode;
  price: string;
  imageSrc: string;
  imageAlt: string;
  buttons: {
    learnMore: boolean;
    bookSlot: boolean;
    viewPricing: boolean;
  };
  includes: string[];
}

const ServiceItem = ({ 
  id, 
  title, 
  shortDescription, 
  icon, 
  imageSrc,
  imageAlt,
  buttons
}: ServiceItemProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <ServicesImage imageSrc={imageSrc} altText={imageAlt} />
        <div className="absolute top-0 left-0 bg-brand-red text-white px-4 py-2 text-xs uppercase font-bold">
          {id === 1 && "Popular"}
          {id === 3 && "Featured"}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-red-100 rounded-full p-3 text-brand-red">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{shortDescription}</p>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <ServicesActions 
          showLearnMore={buttons.learnMore}
          showBookSlot={buttons.bookSlot}
          showPricing={buttons.viewPricing}
        />
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
