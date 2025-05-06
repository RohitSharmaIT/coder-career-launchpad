
import React from 'react';
import ServiceItem, { ServiceItemProps } from '../ServiceItem';

interface ServiceListContainerProps {
  services: ServiceItemProps[];
  limit?: number;
}

const ServiceListContainer = ({ services, limit = services.length }: ServiceListContainerProps) => {
  return (
    <div className="space-y-6">
      {services.slice(0, limit).map((service) => (
        <ServiceItem 
          key={service.id}
          {...service}
        />
      ))}
    </div>
  );
};

export default ServiceListContainer;
