
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSteps from "@/components/booking/BookingSteps";
import BookingStepRenderer from "@/components/booking/BookingStepRenderer";
import NavigationButtons from "@/components/booking/NavigationButtons";
import { useBookingForm } from "@/hooks/useBookingForm";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";

const BookingContent = () => {
  const {
    // Form state
    service,
    setService,
    name,
    setName,
    email, 
    setEmail,
    phone,
    setPhone,
    resumeLink,
    setResumeLink,
    notes,
    setNotes,
    date,
    setDate,
    time,
    setTime,
    
    // UI state
    currentStep,
    setCurrentStep,
    isLoading,
    setIsLoading,
    
    // Payment state
    paymentVerified,
    setPaymentVerified,
    
    // Validation state
    isServiceValid,
    setIsServiceValid,
    isPersonalInfoValid,
    setIsPersonalInfoValid,
    isDateTimeValid,
    setIsDateTimeValid,
    isTermsAccepted,
    setIsTermsAccepted,
    
    // Constants
    timeSlots,
    services,
    steps,
    
    // Auth
    isAuthenticated,
    user,
    
    // Utility functions
    showToast
  } = useBookingForm();
  
  // Handle payment verification
  const handlePaymentVerification = (verified: boolean) => {
    if (verified) {
      setPaymentVerified(true);
      showToast("Payment verified successfully", 'success');
    } else {
      setPaymentVerified(false);
      showToast("Payment verification failed", 'error');
    }
  };

  const { handleBackStep, handleNextStep, handleComplete } = useBookingNavigation(
    { service, name, email, phone, date, time, notes },
    services,
    currentStep,
    setCurrentStep,
    setIsLoading,
    showToast,
    user,
    paymentVerified,
    isTermsAccepted,
    isServiceValid,
    isPersonalInfoValid,
    isDateTimeValid
  );
  
  // Determine if current step is last step
  const isLastStep = currentStep === 4; // Payment is the last actionable step
  
  // Determine next button disabled state
  const isNextDisabled = 
    (currentStep === 1 && !isServiceValid) ||
    (currentStep === 2 && !isPersonalInfoValid) ||
    (currentStep === 3 && !isDateTimeValid) ||
    (currentStep === 4 && (!isTermsAccepted || !paymentVerified));
  
  return (
    <>
      <Navbar />
      
      <div className="py-10 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Book a Service</h1>
            
            <BookingSteps
              steps={steps}
              currentStep={currentStep}
            />
            
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <BookingStepRenderer
                currentStep={currentStep}
                services={services}
                service={service}
                setService={setService}
                setIsServiceValid={setIsServiceValid}
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
                setIsPersonalInfoValid={setIsPersonalInfoValid}
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                timeSlots={timeSlots}
                setIsDateTimeValid={setIsDateTimeValid}
                isTermsAccepted={isTermsAccepted}
                setIsTermsAccepted={setIsTermsAccepted}
                onPaymentVerification={handlePaymentVerification}
                onComplete={handleComplete}
              />
              
              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <NavigationButtons
                  currentStep={currentStep}
                  handleBackStep={handleBackStep}
                  handleNextStep={handleNextStep}
                  isLoading={isLoading}
                  isLastStep={isLastStep}
                  isNextDisabled={isNextDisabled}
                  isFreeConsultation={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BookingContent;
