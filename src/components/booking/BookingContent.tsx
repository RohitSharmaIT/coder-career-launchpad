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
        
        if (selectedService && date) {
          // Create booking ID
          const bookingId = `AWC${Math.floor(10000 + Math.random() * 90000)}`;
          
          // Create the booking date with proper time
          const [timeValue, period] = time.split(' ');
          const [hours, minutes] = timeValue.split(':');
          let hour24 = parseInt(hours);
          
          if (period === 'PM' && hour24 !== 12) {
            hour24 += 12;
          } else if (period === 'AM' && hour24 === 12) {
            hour24 = 0;
          }
          
          const bookingDate = new Date(date);
          bookingDate.setHours(hour24, parseInt(minutes), 0, 0);
          
          const newBooking = {
            id: Date.now(), // Use timestamp as unique ID
            service: selectedService.title,
            date: bookingDate,
            status: "scheduled",
            notes: notes || `New ${selectedService.title} appointment - ${bookingId}`
          };
          
          console.log("Creating new booking:", newBooking);
          console.log("Booking will appear in upcoming tab - date:", bookingDate.toISOString());
          
          // Add booking to context immediately
          addBooking(newBooking);
          
          // Send confirmation email
          await sendConfirmationEmail(selectedService.title, bookingId, bookingDate);
          
          // Store booking ID for confirmation display
          sessionStorage.setItem('lastBookingId', bookingId);
          
          // Set success flag for dashboard
          sessionStorage.setItem('bookingSuccess', 'true');
        }
        
        // Move to confirmation step
        setCurrentStep(currentStep + 1);
        showToast("Booking confirmed! It will appear in your upcoming services.", 'success');
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
  const sendConfirmationEmail = async (serviceName: string, bookingId: string, bookingDate: Date) => {
    const userEmail = email || user?.email || '';
    console.log("Sending confirmation email to:", userEmail);
    
    // Format the date for email
    const formattedDate = bookingDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const formattedTime = bookingDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    // Email template parameters
    const emailParams = {
      to_email: userEmail,
      from_email: "bhai565665@gmail.com",
      to_name: name || user?.name || 'Valued Customer',
      service_name: serviceName,
      booking_date: formattedDate,
      booking_time: formattedTime,
      booking_id: bookingId,
      notes: notes || 'No additional notes'
    };
    
    try {
      // In a real implementation, you would call your email service here
      // For demonstration purposes, we're logging the email content
      console.log("Email would be sent with these parameters:", emailParams);
      console.log(`
Subject: Booking Confirmation - ${serviceName}

To: ${userEmail}
From: bhai565665@gmail.com

Dear ${emailParams.to_name},

Thank you for booking your slot with Apne Wale Coders!

Your booking has been successfully confirmed. Please save this email for your records.

BOOKING DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service: ${serviceName}
Date: ${formattedDate}
Time: ${formattedTime}
Booking ID: ${bookingId}
${notes ? `Notes: ${notes}` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT'S NEXT?
• You will receive a calendar invite shortly
• Our team will contact you 24 hours before your appointment
• Please join the session 5 minutes early
• Have any relevant documents ready (resume, portfolio, etc.)

If you need to reschedule or cancel, please contact us at least 24 hours in advance.

Questions? Feel free to reach out to us at bhai565665@gmail.com

Best regards,
Apne Wale Coders Team
📧 bhai565665@gmail.com
🌐 www.apnewalecoders.com
      `);
      
      // Log admin notification
      console.log("Admin notification would be sent to: bhai565665@gmail.com");
      console.log(`New booking received: ${serviceName} on ${formattedDate} at ${formattedTime} for ${emailParams.to_name}`);
      
      return true;
    } catch (error) {
      console.error("Failed to send confirmation email:", error);
      return false;
    }
  };
  
  // Handle booking completion
  const handleComplete = () => {
    // Clear any stored form data
    sessionStorage.removeItem('lastBookingId');
    
    // Navigate to dashboard with success message
    navigate('/dashboard');
    
    // Show success message after navigation
    setTimeout(() => {
      showToast("Your booking is confirmed! Check the 'Upcoming' tab in Services.", 'success');
    }, 500);
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

export default BookingContent;
