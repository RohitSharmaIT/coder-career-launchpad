
import React from 'react';
import { ServiceItemProps } from '../ServiceItem';
import ModernServiceCard from './ModernServiceCard';

interface ServiceCardGridProps {
  services: ServiceItemProps[];
}

const ServiceCardGrid = ({ services }: ServiceCardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div 
          key={service.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ModernServiceCard {...service} />
        </div>
      ))}
    </div>
  );
};

export default ServiceCardGrid;
