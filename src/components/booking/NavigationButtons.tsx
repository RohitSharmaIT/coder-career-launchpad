
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavigationButtonsProps {
  currentStep: number;
  handleBackStep: () => void;
  handleNextStep: () => void;
  isLoading: boolean;
  isLastStep: boolean;
  isNextDisabled?: boolean;
}

const NavigationButtons = ({ 
  currentStep, 
  handleBackStep, 
  handleNextStep,
  isLoading,
  isLastStep,
  isNextDisabled = false
}: NavigationButtonsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex ${currentStep > 1 ? 'justify-between' : 'justify-end'} mt-8`}>
      {currentStep > 1 && (
        <Button
          type="button"
          variant="outline"
          onClick={handleBackStep}
          className="px-3"
        >
          Back
        </Button>
      )}
      
      {!isLastStep ? (
        <Button
          type="button"
          className="bg-brand-red hover:bg-red-600 text-white"
          onClick={handleNextStep}
          disabled={isNextDisabled}
        >
          {isMobile ? "Next" : "Continue"}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      ) : (
        <Button
          type="button"
          className="bg-brand-red hover:bg-red-600 text-white"
          onClick={handleNextStep}
          disabled={isLoading || isNextDisabled}
        >
          {isLoading ? "Processing..." : "Pay & Confirm"}
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
