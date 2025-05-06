
import React from 'react';
import { format } from "date-fns";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceOption {
  id: string;
  title: string;
  price: string;
  description: string;
}

interface PaymentSummaryProps {
  service: string;
  services: ServiceOption[];
  date: Date | undefined;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  isLoading: boolean;
  onSubmit: () => void;
}

const PaymentSummary = ({
  service,
  services,
  date,
  time,
  name,
  email,
  phone,
  notes,
  isLoading,
  onSubmit
}: PaymentSummaryProps) => {
  const getServicePrice = () => {
    const selectedService = services.find(s => s.id === service);
    return selectedService ? selectedService.price : "₹0";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Booking Summary & Payment</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Service:</span>
            <span>{services.find(s => s.id === service)?.title}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{date ? format(date, "PPP") : ""}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Time:</span>
            <span>{time}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Name:</span>
            <span>{name}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{email}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Phone:</span>
            <span>{phone}</span>
          </div>
          
          {notes && (
            <div>
              <span className="font-medium">Additional Notes:</span>
              <p className="mt-1 text-gray-600">{notes}</p>
            </div>
          )}
          
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-brand-red">{getServicePrice()}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-bold">Payment Method</h3>
        
        <div className="border rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="razorpay"
                name="payment-method"
                type="radio"
                className="h-4 w-4 text-brand-red focus:ring-brand-red"
                defaultChecked
              />
              <label htmlFor="razorpay" className="ml-3 font-medium">
                Pay with Razorpay
              </label>
            </div>
            <img 
              src="https://razorpay.com/blog-content/uploads/2020/10/rzp-glyph-positive.png" 
              alt="Razorpay" 
              className="h-6" 
            />
          </div>
        </div>
        
        <div className="border rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="card"
                name="payment-method"
                type="radio"
                className="h-4 w-4 text-brand-red focus:ring-brand-red"
              />
              <label htmlFor="card" className="ml-3 font-medium">
                Credit/Debit Card
              </label>
            </div>
            <CreditCard className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 mt-6">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 mt-1 text-brand-red focus:ring-brand-red"
          required
        />
        <label htmlFor="terms" className="text-sm">
          I agree to the{" "}
          <a href="#" className="text-brand-red hover:underline">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-brand-red hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>
      
      <div className="pt-4">
        <Button
          type="button"
          className="bg-brand-red hover:bg-red-600 text-white w-full"
          onClick={onSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Confirm & Pay"}
        </Button>
      </div>
    </div>
  );
};

export default PaymentSummary;
