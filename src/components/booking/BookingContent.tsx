
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSteps from "@/components/booking/BookingSteps";
import ServiceSelection from "@/components/booking/ServiceSelection";
import PersonalInformation from "@/components/booking/PersonalInformation";
import DateTimeSelection from "@/components/booking/DateTimeSelection";
import PaymentSummary from "@/components/booking/PaymentSummary";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import NavigationButtons from "@/components/booking/NavigationButtons";
import { useBooking } from '@/contexts/BookingContext';
import { useBookingForm } from "@/hooks/useBookingForm";
import { toast } from "sonner";

const BookingContent = () => {
  const navigate = useNavigate();
  const { addBooking } = useBooking();
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
  
  // Back button handler
  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Next button handler
  const handleNextStep = async () => {
    // Validate current step
    if (currentStep === 1 && !isServiceValid) {
      showToast("Please select a service to continue", 'error');
      return;
    }
    
    if (currentStep === 2 && !isPersonalInfoValid) {
      showToast("Please fill in all required fields correctly", 'error');
      return;
    }
    
    if (currentStep === 3 && !isDateTimeValid) {
      showToast("Please select both date and time", 'error');
      return;
    }
    
    if (currentStep === 4 && !isTermsAccepted) {
      showToast("Please accept the terms and conditions", 'error');
      return;
    }
    
    // For payment step, we now rely on Razorpay external link
    // so we just need to simulate success for the booking record
    if (currentStep === 4) {
      setIsLoading(true);
      
      try {
        // Add the booking to the dashboard
        const selectedService = services.find(s => s.id === service);
        
        if (selectedService) {
          addBooking({
            id: Math.floor(Math.random() * 1000),
            service: selectedService.title,
            date: date ? new Date(`${date.toDateString()} ${time}`) : new Date(),
            status: "payment pending",
            notes: notes || `New ${selectedService.title} appointment`
          });
        }
        
        // Move to confirmation step
        setCurrentStep(currentStep + 1);
        showToast("Booking successful! Please complete payment via Razorpay.", 'success');
      } catch (error) {
        showToast("Booking failed. Please try again.", 'error');
      } finally {
        setIsLoading(false);
      }
      return;
    }
    
    // Move to next step for steps 1-3
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Handle booking completion
  const handleComplete = () => {
    navigate('/dashboard');
  };
  
  // Determine if current step is last step
  const isLastStep = currentStep === 4; // Payment is the last actionable step
  
  // Determine next button disabled state
  const isNextDisabled = 
    (currentStep === 1 && !isServiceValid) ||
    (currentStep === 2 && !isPersonalInfoValid) ||
    (currentStep === 3 && !isDateTimeValid) ||
    (currentStep === 4 && !isTermsAccepted);
  
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
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <ServiceSelection 
                  services={services}
                  selectedService={service}
                  onServiceSelect={setService}
                  setIsValid={setIsServiceValid}
                />
              )}
              
              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
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
                  services={services}
                  setIsValid={setIsPersonalInfoValid}
                />
              )}
              
              {/* Step 3: Date & Time Selection */}
              {currentStep === 3 && (
                <DateTimeSelection
                  date={date}
                  setDate={setDate}
                  time={time}
                  setTime={setTime}
                  timeSlots={timeSlots}
                  setIsValid={setIsDateTimeValid}
                />
              )}
              
              {/* Step 4: Payment Summary */}
              {currentStep === 4 && (
                <PaymentSummary
                  service={service}
                  services={services}
                  date={date}
                  time={time}
                  name={name}
                  email={email}
                  phone={phone}
                  notes={notes}
                  isTermsAccepted={isTermsAccepted}
                  onTermsAcceptedChange={setIsTermsAccepted}
                  setIsValid={setIsDateTimeValid}
                />
              )}
              
              {/* Step 5: Confirmation */}
              {currentStep === 5 && (
                <BookingConfirmation
                  service={service}
                  services={services}
                  date={date}
                  time={time}
                  email={email}
                  onComplete={handleComplete}
                />
              )}
              
              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <NavigationButtons
                  currentStep={currentStep}
                  handleBackStep={handleBackStep}
                  handleNextStep={handleNextStep}
                  isLoading={isLoading}
                  isLastStep={isLastStep}
                  isNextDisabled={isNextDisabled}
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
