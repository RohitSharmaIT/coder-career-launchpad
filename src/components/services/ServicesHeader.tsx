
import React from 'react';

interface ServicesHeaderProps {
  title: string;
  subtitle: string;
  category?: string;
}

const ServicesHeader = ({ title, subtitle, category }: ServicesHeaderProps) => {
  return (
    <div className="text-center max-w-5xl mx-auto">
      {category && (
        <div className="inline-block mb-6">
          <span className="text-brand-red uppercase font-bold text-sm tracking-wider bg-red-50 px-6 py-3 rounded-full border border-red-100">
            {category}
          </span>
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h2>
      
      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
        {subtitle}
      </p>
      
      {/* Decorative elements */}
      <div className="mt-10 flex justify-center items-center gap-4">
        <div className="w-16 h-1 bg-gradient-to-r from-brand-red to-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-brand-red rounded-full"></div>
        <div className="w-16 h-1 bg-gradient-to-l from-brand-red to-red-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default ServicesHeader;
