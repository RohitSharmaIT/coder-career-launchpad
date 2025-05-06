
import React from 'react';

interface ServicesHeaderProps {
  title: string;
  subtitle: string;
}

const ServicesHeader = ({ title, subtitle }: ServicesHeaderProps) => {
  return (
    <div className="mb-12">
      <div className="text-brand-red uppercase font-medium mb-2">CAREER DEVELOPMENT</div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <p className="text-gray-600 max-w-2xl">
        {subtitle}
      </p>
      <div className="mt-4 w-24 h-1 bg-brand-red"></div>
    </div>
  );
};

export default ServicesHeader;
