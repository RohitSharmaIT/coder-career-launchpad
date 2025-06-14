
import React from 'react';
import { Check } from "lucide-react";

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
  serviceParam?: string | null;
}

const BookingSteps = ({ currentStep, steps, serviceParam }: BookingStepsProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep > index + 1
                  ? "bg-green-500 text-white"
                  : currentStep === index + 1
                  ? "bg-brand-red text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {currentStep > index + 1 ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            
            <span
              className={`hidden sm:block ml-2 text-sm ${
                currentStep === index + 1 ? "font-bold" : "text-gray-600"
              }`}
            >
              {step}
            </span>
            
            {index < steps.length - 1 && (
              <div
                className={`w-10 sm:w-16 h-1 mx-2 ${
                  currentStep > index + 1 ? "bg-green-500" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
