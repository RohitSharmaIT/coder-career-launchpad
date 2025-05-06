
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  handleBackStep: () => void;
  handleNextStep: () => void;
  isLoading: boolean;
  isLastStep: boolean;
}

const NavigationButtons = ({ 
  currentStep, 
  handleBackStep, 
  handleNextStep,
  isLoading,
  isLastStep
}: NavigationButtonsProps) => {
  return (
    <div className={`flex ${currentStep > 1 ? 'justify-between' : 'justify-end'} mt-8`}>
      {currentStep > 1 && (
        <Button
          type="button"
          variant="outline"
          onClick={handleBackStep}
        >
          Back
        </Button>
      )}
      
      {!isLastStep ? (
        <Button
          type="button"
          className="bg-brand-red hover:bg-red-600 text-white"
          onClick={handleNextStep}
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button
          type="button"
          className="bg-brand-red hover:bg-red-600 text-white"
          onClick={handleNextStep}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Confirm & Pay"}
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
