
import React from 'react';
import ServiceItem, { ServiceItemProps } from '../ServiceItem';

interface ServiceListContainerProps {
  services: ServiceItemProps[];
  limit?: number;
}

const ServiceListContainer = ({ services, limit = services.length }: ServiceListContainerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.slice(0, limit).map((service) => (
        <ServiceItem 
          key={service.id}
          {...service}
          bookLink={`/book-slot?service=${service.id}`}
        />
      ))}
    </div>
  );
};

export default ServiceListContainer;
