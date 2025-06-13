
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServicesActionsProps {
  showLearnMore?: boolean;
  showBookSlot?: boolean;
  showPricing?: boolean;
  bookLink?: string;
}

const ServicesActions = ({ 
  showLearnMore = true, 
  showBookSlot = true,
  showPricing = false,
  bookLink = "/book-a-consultation"
}: ServicesActionsProps) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {showLearnMore && (
        <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
          Learn More
        </Button>
      )}
      
      {showBookSlot && (
        <Link to={bookLink} className="inline-block">
          <Button className="bg-brand-red hover:bg-red-600 text-white">
            Book Slot
          </Button>
        </Link>
      )}
      
      {showPricing && (
        <Link to="/pricing" className="inline-block">
          <Button className="bg-brand-red hover:bg-red-600 text-white">
            View Pricing
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ServicesActions;
