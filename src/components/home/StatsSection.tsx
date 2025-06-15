
import React from 'react';
import { Rocket, Users, CheckCircle } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {/* Stat Card 1 */}
        <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-scale-in">
          <div className="w-12 h-12 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mb-2 md:mb-4">
            <Rocket className="w-6 h-6" />
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">5000+</div>
          <div className="text-gray-600 text-base md:text-lg text-center">Placements</div>
        </div>

        {/* Stat Card 2 */}
        <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-scale-in">
          <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center mb-2 md:mb-4">
            <Users className="w-6 h-6" />
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">1000+</div>
          <div className="text-gray-600 text-base md:text-lg text-center">Happy Students</div>
        </div>

        {/* Stat Card 3 */}
        <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-scale-in">
          <div className="w-12 h-12 rounded-full bg-green-200 text-green-600 flex items-center justify-center mb-2 md:mb-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">95%</div>
          <div className="text-gray-600 text-base md:text-lg text-center">Success Rate</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
