
import { useNavigate } from 'react-router-dom';
import { useBooking } from '@/contexts/BookingContext';
import { sendConfirmationEmail } from '@/utils/emailService';
import { ServiceOption } from './useBookingForm';

export const useBookingNavigation = (
  formData: {
    service: string;
    name: string;
    email: string;
    phone: string;
    date: Date | undefined;
    time: string;
    notes: string;
  },
  services: ServiceOption[],
  currentStep: number,
  setCurrentStep: (step: number) => void,
  setIsLoading: (loading: boolean) => void,
  showToast: (message: string, type: 'success' | 'error') => void,
  user: any,
  paymentVerified: boolean,
  isTermsAccepted: boolean,
  isServiceValid: boolean,
  isPersonalInfoValid: boolean,
  isDateTimeValid: boolean
) => {
  const navigate = useNavigate();
  const { addBooking } = useBooking();

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
        const selectedService = services.find(s => s.id === formData.service);
        
        if (selectedService && formData.date) {
          // Create booking ID
          const bookingId = `AWC${Math.floor(10000 + Math.random() * 90000)}`;
          
          // Create the booking date with proper time
          const [timeValue, period] = formData.time.split(' ');
          const [hours, minutes] = timeValue.split(':');
          let hour24 = parseInt(hours);
          
          if (period === 'PM' && hour24 !== 12) {
            hour24 += 12;
          } else if (period === 'AM' && hour24 === 12) {
            hour24 = 0;
          }
          
          const bookingDate = new Date(formData.date);
          bookingDate.setHours(hour24, parseInt(minutes), 0, 0);
          
          const newBooking = {
            id: Date.now(), // Use timestamp as unique ID
            service: selectedService.title,
            date: bookingDate,
            status: "scheduled",
            notes: formData.notes || `New ${selectedService.title} appointment - ${bookingId}`
          };
          
          console.log("Creating new booking:", newBooking);
          console.log("Booking will appear in upcoming tab - date:", bookingDate.toISOString());
          
          // Add booking to context immediately
          addBooking(newBooking);
          
          // Send confirmation email
          await sendConfirmationEmail(
            selectedService.title, 
            bookingId, 
            bookingDate,
            formData.email || user?.email || '',
            formData.name || user?.name || 'Valued Customer',
            formData.notes
          );
          
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
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

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

  return {
    handleBackStep,
    handleNextStep,
    handleComplete
  };
};
