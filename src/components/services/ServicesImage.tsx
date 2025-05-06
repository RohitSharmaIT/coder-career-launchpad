
import React from 'react';
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ServicesImageProps {
  imageSrc: string;
  altText: string;
}

const ServicesImage = ({ imageSrc, altText }: ServicesImageProps) => {
  return (
    <Card className="border-0 shadow-md overflow-hidden rounded-lg">
      <AspectRatio ratio={4/3}>
        <img 
          src={imageSrc}
          alt={altText} 
          className="object-cover w-full h-full"
        />
      </AspectRatio>
    </Card>
  );
};

export default ServicesImage;
