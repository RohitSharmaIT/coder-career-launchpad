
import React from 'react';
import { Separator } from "@/components/ui/separator";

interface ServicesHeaderProps {
  title: string;
  subtitle: string;
  category?: string;
}

const ServicesHeader = ({ title, subtitle, category }: ServicesHeaderProps) => {
  return (
    <div className="mb-12">
      {category && <div className="text-brand-red uppercase font-medium mb-2">{category}</div>}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <p className="text-gray-600 max-w-2xl">
        {subtitle}
      </p>
      <Separator className="mt-6 bg-brand-red h-1 w-24" />
    </div>
  );
};

export default ServicesHeader;
