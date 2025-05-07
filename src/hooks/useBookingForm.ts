
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface ServiceOption {
  id: string;
  title: string;
  price: string;
  description: string;
}

export const useBookingForm = () => {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  // Get service from URL parameters if available
  const queryParams = new URLSearchParams(location.search);
  const serviceParam = queryParams.get('service');
  
  // Form state
  const [service, setService] = useState(serviceParam || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  
  // Validation state
  const [isServiceValid, setIsServiceValid] = useState(!!serviceParam);
  const [isPersonalInfoValid, setIsPersonalInfoValid] = useState(false);
  const [isDateTimeValid, setIsDateTimeValid] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  
  // Set initial step based on whether service is already selected
  const [currentStep, setCurrentStep] = useState(serviceParam ? 2 : 1);
  
  // Available time slots
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];
  
  // Service options
  const services: ServiceOption[] = [
    {
      id: "resume",
      title: "Resume Building",
      price: "₹999",
      description: "Get your resume crafted by industry experts to highlight your strengths"
    },
    {
      id: "webdev",
      title: "Web Design & Development",
      price: "₹4999",
      description: "Custom website development tailored to your professional needs"
    },
    {
      id: "interview",
      title: "Mock Interview",
      price: "₹1499",
      description: "Practice with industry experts in realistic interview scenarios"
    },
    {
      id: "assessment",
      title: "Company Assessment Preparation",
      price: "₹1299",
      description: "Prepare for specific company assessments and tests"
    },
    {
      id: "guidance",
      title: "Career Guidance",
      price: "₹899",
      description: "Get personalized advice on career paths and skill development"
    },
    {
      id: "strategy",
      title: "Career Strategy & Projects",
      price: "₹2499",
      description: "Develop a comprehensive career strategy with portfolio projects"
    },
    {
      id: "projects",
      title: "Take-home Projects",
      price: "₹1999",
      description: "Guidance and review for take-home coding challenges"
    }
  ];
  
  // Prefill user information if logged in
  useEffect(() => {
    if (isAuthenticated && user) {
      setName(user.name || '');
      setEmail(user.email || '');
    }
  }, [isAuthenticated, user]);

  // Step state management
  const steps = ["Service", "Information", "Date & Time", "Payment", "Confirmation"];
  
  return {
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
    serviceParam,
    
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
    
    // Validation helpers
    validateEmail: (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    
    validatePhone: (phone: string) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    },
    
    // Utility functions  
    showToast: (message: string, type: 'success' | 'error') => {
      if (type === 'success') {
        toast.success(message);
      } else {
        toast.error(message);
      }
    }
  };
};
