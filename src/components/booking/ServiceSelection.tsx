
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface ServiceOption {
  id: string;
  title: string;
  price: string;
  description: string;
}

interface ServiceSelectionProps {
  services: ServiceOption[];
  selectedService: string;
  onServiceSelect: (serviceId: string) => void;
  setIsValid?: (isValid: boolean) => void;
}

const ServiceSelection = ({ services, selectedService, onServiceSelect, setIsValid }: ServiceSelectionProps) => {
  // Set validity whenever the selection changes
  useEffect(() => {
    if (setIsValid) {
      setIsValid(!!selectedService);
    }
  }, [selectedService, setIsValid]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Select a Service</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((item) => (
          <div 
            key={item.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedService === item.id 
                ? 'border-brand-red bg-red-50' 
                : 'border-gray-200 hover:border-brand-red'
            }`}
            onClick={() => onServiceSelect(item.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="text-brand-red font-bold">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
