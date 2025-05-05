
import { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export interface ServiceItemProps {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ReactNode;
  price: string;
  includes: string[];
}

const ServiceItem = ({ 
  id, 
  title, 
  shortDescription, 
  longDescription, 
  icon, 
  price, 
  includes 
}: ServiceItemProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className="service-card transition-all duration-300">
      <div className="flex items-start mb-4">
        <div className="text-brand-red mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">
            {expanded ? longDescription : shortDescription}
          </p>
        </div>
      </div>
      
      {expanded && (
        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="mb-4">
            <h4 className="font-bold mb-2">What's Included:</h4>
            <ul className="list-disc pl-5 text-gray-600">
              {includes.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Starting from:</h4>
            <p className="text-brand-red font-bold text-xl">{price}</p>
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={toggleExpand}
          className="text-brand-red font-medium hover:underline"
        >
          {expanded ? "Show Less" : "Learn More"}
        </button>
        
        <Link to="/book-slot">
          <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
            Book Slot
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
