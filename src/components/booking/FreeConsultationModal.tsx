
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import DateTimeSelection from './DateTimeSelection';
import BookingSteps from './BookingSteps';
import NavigationButtons from './NavigationButtons';

interface ConsultationData {
  name: string;
  companyName: string;
  email: string;
  contactDetail: string;
  requirement: string;
  selectedDate: Date | undefined;
  selectedTime: string;
}

interface FreeConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 10-minute time slots throughout the day
const timeSlots = [
  "09:00 AM", "09:10 AM", "09:20 AM", "09:30 AM", "09:40 AM", "09:50 AM",
  "10:00 AM", "10:10 AM", "10:20 AM", "10:30 AM", "10:40 AM", "10:50 AM",
  "11:00 AM", "11:10 AM", "11:20 AM", "11:30 AM", "11:40 AM", "11:50 AM",
  "12:00 PM", "12:10 PM", "12:20 PM", "12:30 PM", "12:40 PM", "12:50 PM",
  "01:00 PM", "01:10 PM", "01:20 PM", "01:30 PM", "01:40 PM", "01:50 PM",
  "02:00 PM", "02:10 PM", "02:20 PM", "02:30 PM", "02:40 PM", "02:50 PM",
  "03:00 PM", "03:10 PM", "03:20 PM", "03:30 PM", "03:40 PM", "03:50 PM",
  "04:00 PM", "04:10 PM", "04:20 PM", "04:30 PM", "04:40 PM", "04:50 PM",
  "05:00 PM", "05:10 PM", "05:20 PM", "05:30 PM", "05:40 PM", "05:50 PM"
];

const steps = ["Information", "Date & Time", "Review & Confirm"];

const FreeConsultationModal = ({ isOpen, onClose }: FreeConsultationModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ConsultationData>({
    name: '',
    companyName: '',
    email: '',
    contactDetail: '',
    requirement: '',
    selectedDate: undefined,
    selectedTime: ''
  });

  const handleInputChange = (field: keyof ConsultationData, value: string | Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.name || !formData.email || !formData.contactDetail || !formData.requirement) {
          toast.error("Please fill in all required fields");
          return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          toast.error("Please enter a valid email address");
          return false;
        }
        return true;
        
      case 2:
        if (!formData.selectedDate || !formData.selectedTime) {
          toast.error("Please select both date and time");
          return false;
        }
        return true;
        
      default:
        return true;
    }
  };

  const handleNextStep = () => {
    if (currentStep < 3 && validateStep()) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === 3) {
      handleBooking();
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleBooking = async () => {
    setIsLoading(true);
    
    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Your consultation has been booked successfully. You will receive a confirmation email shortly.");
      console.log('Booking data:', formData);
      
      // Reset form and close modal
      setFormData({
        name: '',
        companyName: '',
        email: '',
        contactDetail: '',
        requirement: '',
        selectedDate: undefined,
        selectedTime: ''
      });
      setCurrentStep(1);
      onClose();
    } catch (error) {
      toast.error("Failed to book consultation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    onClose();
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !formData.name || !formData.email || !formData.contactDetail || !formData.requirement;
      case 2:
        return !formData.selectedDate || !formData.selectedTime;
      default:
        return false;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Book a Free Consultation</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <BookingSteps currentStep={currentStep} steps={steps} />

          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Enter your company name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contactDetail">Contact Number *</Label>
                  <Input
                    id="contactDetail"
                    value={formData.contactDetail}
                    onChange={(e) => handleInputChange('contactDetail', e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="requirement">Requirement to Connect *</Label>
                <Textarea
                  id="requirement"
                  value={formData.requirement}
                  onChange={(e) => handleInputChange('requirement', e.target.value)}
                  placeholder="Describe your requirements or questions"
                  rows={4}
                  className="mt-2"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <DateTimeSelection
              date={formData.selectedDate}
              setDate={(date) => handleInputChange('selectedDate', date)}
              time={formData.selectedTime}
              setTime={(time) => handleInputChange('selectedTime', time)}
              timeSlots={timeSlots}
            />
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold text-gray-700">Full Name</div>
                    <div>{formData.name}</div>
                  </div>
                  
                  {formData.companyName && (
                    <div>
                      <div className="font-semibold text-gray-700">Company</div>
                      <div>{formData.companyName}</div>
                    </div>
                  )}
                  
                  <div>
                    <div className="font-semibold text-gray-700">Email</div>
                    <div>{formData.email}</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-700">Contact</div>
                    <div>{formData.contactDetail}</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-700">Date</div>
                    <div>{formData.selectedDate ? formData.selectedDate.toLocaleDateString() : ''}</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-700">Time</div>
                    <div>{formData.selectedTime}</div>
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-700">Requirement</div>
                  <div className="mt-1">{formData.requirement}</div>
                </div>
              </div>
            </div>
          )}

          <NavigationButtons
            currentStep={currentStep}
            handleBackStep={handleBackStep}
            handleNextStep={handleNextStep}
            isLoading={isLoading}
            isLastStep={currentStep === 3}
            isNextDisabled={isNextDisabled()}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FreeConsultationModal;
