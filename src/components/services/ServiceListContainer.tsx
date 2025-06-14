
import React from 'react';
import ServiceItem, { ServiceItemProps } from '../ServiceItem';

interface ServiceListContainerProps {
  services: ServiceItemProps[];
}

const ServiceListContainer = ({ services }: ServiceListContainerProps) => {
  return (
    <div className="space-y-12">
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          id={service.id}
          title={service.title}
          shortDescription={service.shortDescription}
          longDescription={service.longDescription}
          icon={service.icon}
          price={service.price}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          serviceId={service.serviceId}
          buttons={service.buttons}
          includes={service.includes}
        />
      ))}
    </div>
  );
};

export default ServiceListContainer;
