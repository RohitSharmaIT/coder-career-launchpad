
import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';

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

  // Enhanced service data with features
  const enhancedServices = [
    {
      ...services.find(s => s.id === "guidance"),
      features: [
        "Professional career advice",
        "Resume review",
        "Interview preparation", 
        "Industry insights"
      ]
    },
    {
      ...services.find(s => s.id === "resume"),
      features: [
        "ATS-friendly format",
        "Content optimization",
        "Professional formatting",
        "Cover letter tips"
      ]
    },
    {
      ...services.find(s => s.id === "interview"),
      features: [
        "Real interview simulation",
        "Detailed feedback",
        "Common questions practice",
        "Body language tips"
      ]
    },
    {
      ...services.find(s => s.id === "assessment"),
      features: [
        "Code review",
        "Problem-solving guidance", 
        "Optimization tips",
        "Best practices advice"
      ]
    },
    {
      ...services.find(s => s.id === "webdev"),
      features: [
        "Algorithm practice",
        "System design guidance",
        "Technical questions review",
        "Problem-solving strategies"
      ]
    },
    {
      ...services.find(s => s.id === "projects"),
      features: [
        "Code review",
        "Architecture consulting",
        "Debugging assistance", 
        "Project planning"
      ]
    }
  ].filter(Boolean);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Service</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the service that best fits your career development needs. All sessions are conducted by industry experts.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enhancedServices.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
            features={service.features}
            onSelect={onServiceSelect}
            isSelected={selectedService === service.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
