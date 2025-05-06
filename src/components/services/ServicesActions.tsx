
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesActions = () => {
  return (
    <div className="mt-8">
      <Link to="/book-slot" className="inline-block">
        <Button className="bg-brand-red hover:bg-red-600 text-white mr-4">
          Book Career Guidance
        </Button>
      </Link>
      <Link to="/pricing" className="inline-block">
        <Button variant="outline" className="border-gray-300 text-gray-600">
          View Pricing
        </Button>
      </Link>
    </div>
  );
};

export default ServicesActions;
