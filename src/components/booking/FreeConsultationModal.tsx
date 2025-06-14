
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

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

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM"
];

const FreeConsultationModal = ({ isOpen, onClose }: FreeConsultationModalProps) => {
  const [step, setStep] = useState(1);
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

  const validateStep1 = () => {
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
  };

  const validateStep2 = () => {
    if (!formData.selectedDate || !formData.selectedTime) {
      toast.error("Please select both date and time");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBooking = () => {
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
    setStep(1);
    onClose();
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book a Free Consultation</DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 1: Information</h3>
            
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <Label htmlFor="contactDetail">Contact Detail *</Label>
              <Input
                id="contactDetail"
                value={formData.contactDetail}
                onChange={(e) => handleInputChange('contactDetail', e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <Label htmlFor="requirement">Requirement to Connect *</Label>
              <Textarea
                id="requirement"
                value={formData.requirement}
                onChange={(e) => handleInputChange('requirement', e.target.value)}
                placeholder="Describe your requirements or questions"
                rows={4}
              />
            </div>

            <Button onClick={handleNext} className="w-full">
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 2: Select Date and Time</h3>
            
            <div>
              <Label>Select Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.selectedDate ? format(formData.selectedDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.selectedDate}
                    onSelect={(date) => handleInputChange('selectedDate', date)}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>Select Time *</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={formData.selectedTime === time ? "default" : "outline"}
                    className="text-sm"
                    onClick={() => handleInputChange('selectedTime', time)}
                  >
                    <Clock className="mr-1 h-3 w-3" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button onClick={handleNext} className="flex-1">
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 3: Review and Confirm</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div><strong>Name:</strong> {formData.name}</div>
              {formData.companyName && <div><strong>Company:</strong> {formData.companyName}</div>}
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Contact:</strong> {formData.contactDetail}</div>
              <div><strong>Requirement:</strong> {formData.requirement}</div>
              <div><strong>Date:</strong> {formData.selectedDate ? format(formData.selectedDate, "PPP") : ''}</div>
              <div><strong>Time:</strong> {formData.selectedTime}</div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Back
              </Button>
              <Button onClick={handleBooking} className="flex-1 bg-brand-red hover:bg-red-600">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FreeConsultationModal;
