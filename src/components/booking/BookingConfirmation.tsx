
import React from 'react';
import { format } from "date-fns";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceOption {
  id: string;
  title: string;
  price: string;
  description: string;
}

interface BookingConfirmationProps {
  service: string;
  services: ServiceOption[];
  date: Date | undefined;
  time: string;
  email: string;
  onComplete?: () => void;
}

const BookingConfirmation = ({
  service,
  services,
  date,
  time,
  email,
  onComplete
}: BookingConfirmationProps) => {
  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
      
      <p className="text-gray-600 max-w-md mx-auto">
        Thank you for booking with Apne Wale Coders. We've sent a confirmation email to {email} with all the details.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto text-left">
        <h3 className="font-bold mb-4">Booking Details</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium">{services.find(s => s.id === service)?.title}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Date & Time:</span>
            <span className="font-medium">{date ? format(date, "PPP") : ""} at {time}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Booking ID:</span>
            <span className="font-medium">AWC{Math.floor(10000 + Math.random() * 90000)}</span>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <Button
          className="bg-brand-red hover:bg-red-600 text-white"
          onClick={onComplete}
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
