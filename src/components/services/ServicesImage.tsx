
import React from 'react';
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ServicesImage = () => {
  return (
    <Card className="border-0 shadow-md overflow-hidden">
      <AspectRatio ratio={4/3}>
        <img 
          src="/lovable-uploads/5105666c-eb2c-4b5b-a040-b069b241e082.png"
          alt="Person working on laptop" 
          className="object-cover w-full h-full"
        />
      </AspectRatio>
    </Card>
  );
};

export default ServicesImage;
