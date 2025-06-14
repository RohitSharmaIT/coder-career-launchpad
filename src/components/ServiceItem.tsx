
import React from 'react';
import ServicesActions from './services/ServicesActions';

export interface ServiceItemProps {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: React.ReactNode;
  price: string;
  imageSrc: string;
  imageAlt: string;
  serviceId?: string;
  buttons: {
    learnMore: boolean;
    bookSlot: boolean;
    viewPricing: boolean;
  };
  includes: string[];
}

const ServiceItem = ({ 
  title, 
  shortDescription, 
  longDescription, 
  icon, 
  price, 
  imageSrc, 
  imageAlt,
  serviceId,
  buttons,
  includes 
}: ServiceItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="md:w-2/3 p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-brand-red flex-shrink-0">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{shortDescription}</p>
              <p className="text-gray-700 mb-6">{longDescription}</p>
            </div>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-brand-red">{price}</span>
            <span className="text-gray-600 ml-2">per session</span>
          </div>
          
          {/* What's Included */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">What's included:</h4>
            <ul className="space-y-2">
              {includes.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-500 text-sm">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Action Buttons */}
          <ServicesActions 
            showLearnMore={buttons.learnMore}
            showBookSlot={buttons.bookSlot}
            showPricing={buttons.viewPricing}
            serviceId={serviceId}
            serviceName={title}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
