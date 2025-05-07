
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import ServiceFields from "@/components/booking/ServiceFields";
import BookingSteps from "@/components/booking/BookingSteps";
import ServiceSelection from "@/components/booking/ServiceSelection";
import PersonalInformation from "@/components/booking/PersonalInformation";
import DateTimeSelection from "@/components/booking/DateTimeSelection";
import PaymentSummary from "@/components/booking/PaymentSummary";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import NavigationButtons from "@/components/booking/NavigationButtons";
import { useBookingForm } from "@/hooks/useBookingForm";

const BookSlot = () => {
  const navigate = useNavigate();
  const {
    // Form state
    service, setService,
    name, setName,
    email, setEmail,
    phone, setPhone,
    resumeLink, setResumeLink,
    notes, setNotes,
    date, setDate,
    time, setTime,
    
    // UI state
    currentStep, setCurrentStep,
    isLoading, setIsLoading,
    serviceParam,
    
    // Validation state
    isServiceValid, setIsServiceValid,
    isPersonalInfoValid, setIsPersonalInfoValid,
    isDateTimeValid, setIsDateTimeValid,
    isTermsAccepted, setIsTermsAccepted,
    
    // Constants
    timeSlots,
    services,
    steps,
    
    // Auth
    isAuthenticated,
    
    // Utility
    showToast
  } = useBookingForm();
  
  // Dynamic fields based on selected service
  const getDynamicFields = () => {
    return (
      <ServiceFields
        service={service}
        resumeLink={resumeLink}
        setResumeLink={setResumeLink}
      />
    );
  };
  
  // Handle next step
  const handleNextStep = () => {
    // Validation for each step
    if (currentStep === 1) {
      if (!service) {
        showToast("Please select a service", 'error');
        return;
      }
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2) {
      if (!isPersonalInfoValid) {
        showToast("Please fill all required fields correctly", 'error');
        return;
      }
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      if (!isDateTimeValid) {
        showToast("Please select both date and time", 'error');
        return;
      }
      
      // If not logged in and moving to final step, redirect to login
      if (!isAuthenticated) {
        showToast("Please log in to complete your booking", 'error');
        navigate("/login");
        return;
      }
      
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 4) {
      handleSubmitBooking();
    }
  };
  
  // Handle back step
  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  // Handle booking submission
  const handleSubmitBooking = () => {
    if (!isTermsAccepted) {
      showToast("Please accept the terms and conditions", 'error');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      showToast("Your booking has been confirmed!", 'success');
      
      // Move to confirmation step
      setCurrentStep(5);
      setIsLoading(false);
    }, 2000);
  };
  
  // Render step content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelection 
            services={services}
            selectedService={service}
            onServiceSelect={(selectedService) => {
              setService(selectedService);
              setIsServiceValid(true);
            }}
          />
        );
      case 2:
        return (
          <PersonalInformation
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            resumeLink={resumeLink}
            setResumeLink={setResumeLink}
            notes={notes}
            setNotes={setNotes}
            service={service}
            getDynamicFields={getDynamicFields}
            setIsValid={setIsPersonalInfoValid}
          />
        );
      case 3:
        return (
          <DateTimeSelection
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            timeSlots={timeSlots}
            setIsValid={setIsDateTimeValid}
          />
        );
      case 4:
        return (
          <PaymentSummary
            service={service}
            services={services}
            date={date}
            time={time}
            name={name}
            email={email}
            phone={phone}
            notes={notes}
            isLoading={isLoading}
            onSubmit={handleSubmitBooking}
            isTermsAccepted={isTermsAccepted}
            setIsTermsAccepted={setIsTermsAccepted}
            setIsValid={setIsValid => {}} // We handle this in the component
          />
        );
      case 5:
        return (
          <BookingConfirmation
            service={service}
            services={services}
            date={date}
            time={time}
            email={email}
          />
        );
      default:
        return null;
    }
  };

  // Determine if next button should be disabled based on current step
  const isNextButtonDisabled = () => {
    switch (currentStep) {
      case 1:
        return !isServiceValid;
      case 2:
        return !isPersonalInfoValid;
      case 3:
        return !isDateTimeValid;
      case 4:
        return !isTermsAccepted;
      default:
        return false;
    }
  };
  
  // If checking authentication status, show loading
  if (isLoading && currentStep !== 5 && currentStep !== 4) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto"></div>
          <p className="mt-4 text-lg">Loading booking form...</p>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <section className="py-16 bg-gray-50 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Book a Session</h1>
            
            {/* Step Indicator */}
            <BookingSteps 
              currentStep={currentStep}
              steps={steps}
              serviceParam={serviceParam}
            />
            
            {/* Step Content */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              {currentStep < 5 && currentStep !== 4 && (
                <NavigationButtons
                  currentStep={currentStep}
                  handleBackStep={handleBackStep}
                  handleNextStep={handleNextStep}
                  isLoading={isLoading}
                  isLastStep={currentStep === 4}
                  isNextDisabled={isNextButtonDisabled()}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default BookSlot;
