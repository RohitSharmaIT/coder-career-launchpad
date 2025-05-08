
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import ServiceFields from './ServiceFields';

interface ServiceOption {
  id: string;
  title: string;
  price: string;
  description: string;
}

interface PersonalInformationProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  resumeLink: string;
  setResumeLink: (link: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  service: string;
  services?: ServiceOption[];
  setIsValid?: (isValid: boolean) => void;
}

const PersonalInformation = ({ 
  name, setName, 
  email, setEmail, 
  phone, setPhone, 
  resumeLink, setResumeLink,
  notes, setNotes,
  service,
  services,
  setIsValid
}: PersonalInformationProps) => {
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      phone?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    
    const isValid = Object.keys(newErrors).length === 0;
    if (setIsValid) {
      setIsValid(isValid);
    }
    
    return isValid;
  };

  // Get dynamic fields based on the selected service
  const getDynamicFields = () => {
    if (!service) return null;
    
    return (
      <ServiceFields 
        service={service}
        resumeLink={resumeLink}
        setResumeLink={setResumeLink}
      />
    );
  };

  // Validate when any field changes
  useEffect(() => {
    if (name || email || phone) {
      validateForm();
    }
  }, [name, email, phone]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Your Information</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="required">Full Name</Label>
          <Input 
            id="name" 
            placeholder="John Doe" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "border-red-500" : ""}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email" className="required">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "border-red-500" : ""}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="phone" className="required">Phone Number</Label>
          <Input 
            id="phone" 
            placeholder="1234567890" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone ? "border-red-500" : ""}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        
        {getDynamicFields()}
        
        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea 
            id="notes" 
            placeholder="Any specific requirements or questions" 
            className="resize-none"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {Object.keys(errors).length > 0 && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4 mr-2" />
            <AlertDescription>
              Please fix the errors above before continuing.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
