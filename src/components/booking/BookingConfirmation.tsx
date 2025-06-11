
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
  // Get booking ID from session storage or generate one
  const bookingId = sessionStorage.getItem('lastBookingId') || `AWC${Math.floor(10000 + Math.random() * 90000)}`;
  
  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
      
      <p className="text-gray-600 max-w-md mx-auto">
        Thank you for booking with Apne Wale Coders. Your payment has been verified and we've sent a confirmation email to <strong>{email}</strong> with all the details.
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
            <span className="font-medium text-brand-red">{bookingId}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Status:</span>
            <span className="font-medium text-green-600">Paid</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className="font-medium text-blue-600">Scheduled</span>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg max-w-md mx-auto text-left">
        <h4 className="font-medium text-blue-800 mb-2">What's Next?</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Check your email for detailed confirmation</li>
          <li>• You'll receive a calendar invite shortly</li>
          <li>• Our team will contact you 24 hours before</li>
          <li>• Join the session 5 minutes early</li>
        </ul>
      </div>
      
      <div className="pt-4">
        <Button
          className="bg-brand-red hover:bg-red-600 text-white"
          onClick={() => {
            // Set booking success flag for dashboard
            sessionStorage.setItem('bookingSuccess', 'true');
            onComplete?.();
          }}
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
