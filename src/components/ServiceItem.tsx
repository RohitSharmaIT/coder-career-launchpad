
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
    <div className={`border-t-4 border-t-brand-red bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${expanded ? 'shadow-md' : ''}`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="bg-red-100 rounded-full p-2 text-brand-red mt-1">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-600 ml-12 mb-4">
        {expanded ? longDescription : shortDescription}
      </p>
      
      {expanded && (
        <div className="mt-4 border-t border-gray-100 pt-4 ml-12">
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
      
      <div className="flex justify-between items-center mt-4 ml-12">
        <button
          onClick={toggleExpand}
          className="text-brand-red font-medium hover:underline"
        >
          {expanded ? "Show Less" : "Learn More"}
        </button>
        
        <Link to="/book-slot">
          <Button variant="default" className="bg-brand-red hover:bg-red-600 text-white">
            Book Slot
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
