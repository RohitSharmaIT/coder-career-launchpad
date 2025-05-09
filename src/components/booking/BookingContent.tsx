
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
    
    // For payment step, check if payment is verified
    if (currentStep === 4) {
      if (!paymentVerified) {
        showToast("Please complete payment verification to continue", 'error');
        return;
      }
      
      setIsLoading(true);
      
      try {
        // Add the booking to the dashboard
        const selectedService = services.find(s => s.id === service);
        
        if (selectedService) {
          // Create booking ID
          const bookingId = `AWC${Math.floor(10000 + Math.random() * 90000)}`;
          
          addBooking({
            id: Math.floor(Math.random() * 1000),
            service: selectedService.title,
            date: date ? new Date(`${date.toDateString()} ${time}`) : new Date(),
            status: "confirmed",
            notes: notes || `New ${selectedService.title} appointment`
          });
          
          // Send confirmation email
          await sendConfirmationEmail(selectedService.title, bookingId);
        }
        
        // Move to confirmation step
        setCurrentStep(currentStep + 1);
        showToast("Booking confirmed! Details have been sent to your email.", 'success');
      } catch (error) {
        console.error("Error during booking confirmation:", error);
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
  
  // Send confirmation email using EmailJS or your preferred email service
  const sendConfirmationEmail = async (serviceName: string, bookingId: string) => {
    console.log("Sending confirmation email to:", email);
    
    // Format the date for email
    const formattedDate = date ? format(date, "MMMM dd, yyyy") : "N/A";
    
    // Email template parameters
    const emailParams = {
      to_email: email,
      from_email: "bhai565665@gmail.com",
      to_name: name,
      service_name: serviceName,
      booking_date: formattedDate,
      booking_time: time,
      booking_id: bookingId
    };
    
    try {
      // In a real implementation, you would call your email service here
      // For demonstration purposes, we're logging the email content
      console.log("Email would be sent with these parameters:", emailParams);
      console.log(`
Subject: Slot Booking Confirmation

To: ${email}
From: bhai565665@gmail.com

Dear ${name},

Thank you for booking your slot with us.

This is a confirmation that your slot has been successfully booked. If you do not see the confirmation in your inbox, please check your spam or promotions folder.

If you have any questions or face issues, feel free to reach out to us directly.

Booking Details:

Slot Time: ${time}
Date: ${formattedDate}
Service: ${serviceName}
Booking ID: ${bookingId}

We look forward to connecting with you.

Best regards,
Apne Wale Coders Team
📧 bhai565665@gmail.com
      `);
      
      // Log admin notification
      console.log("Admin notification email would be sent to: bhai565665@gmail.com");
      
      return true;
    } catch (error) {
      console.error("Failed to send confirmation email:", error);
      return false;
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
                  onPaymentVerification={handlePaymentVerification}
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

// Helper function to format date
const format = (date: Date, formatString: string) => {
  // Simple format function for MMMM dd, yyyy
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export default BookingContent;
