
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col h-full">
      <div className="text-brand-red mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="mt-auto w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
