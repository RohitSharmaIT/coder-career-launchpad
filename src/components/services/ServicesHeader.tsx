
import React from 'react';

interface ServicesHeaderProps {
  title: string;
  subtitle: string;
  category?: string;
}

const ServicesHeader = ({ title, subtitle, category }: ServicesHeaderProps) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      {category && (
        <div className="inline-block mb-4">
          <span className="text-brand-red uppercase font-semibold text-sm tracking-wider bg-red-50 px-4 py-2 rounded-full">
            {category}
          </span>
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h2>
      
      <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
        {subtitle}
      </p>
      
      {/* Decorative element */}
      <div className="mt-8 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-red-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default ServicesHeader;
