
import React from 'react';
import ServiceSelection from './ServiceSelection';
import PersonalInformation from './PersonalInformation';
import DateTimeSelection from './DateTimeSelection';
import PaymentSummary from './PaymentSummary';
import BookingConfirmation from './BookingConfirmation';
import { ServiceOption } from '@/hooks/useBookingForm';

interface BookingStepRendererProps {
  currentStep: number;
  // Service Selection props
  services: ServiceOption[];
  service: string;
  setService: (service: string) => void;
  setIsServiceValid: (valid: boolean) => void;
  
  // Personal Information props
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
  setIsPersonalInfoValid: (valid: boolean) => void;
  
  // Date & Time props
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  time: string;
  setTime: (time: string) => void;
  timeSlots: string[];
  setIsDateTimeValid: (valid: boolean) => void;
  
  // Payment props
  isTermsAccepted: boolean;
  setIsTermsAccepted: (accepted: boolean) => void;
  onPaymentVerification: (verified: boolean) => void;
  
  // Confirmation props
  onComplete: () => void;
}

const BookingStepRenderer = ({
  currentStep,
  services,
  service,
  setService,
  setIsServiceValid,
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
  setIsPersonalInfoValid,
  date,
  setDate,
  time,
  setTime,
  timeSlots,
  setIsDateTimeValid,
  isTermsAccepted,
  setIsTermsAccepted,
  onPaymentVerification,
  onComplete
}: BookingStepRendererProps) => {
  switch (currentStep) {
    case 1:
      return (
        <ServiceSelection 
          services={services}
          selectedService={service}
          onServiceSelect={setService}
          setIsValid={setIsServiceValid}
        />
      );
      
    case 2:
      return (
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
      );
      
    case 3:
      return (
        <DateTimeSelection
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          timeSlots={timeSlots}
          setIsValid={setIsDateTimeValid}
        />
      );
      
    case 4:
      return (
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
          onPaymentVerification={onPaymentVerification}
        />
      );
      
    case 5:
      return (
        <BookingConfirmation
          service={service}
          services={services}
          date={date}
          time={time}
          email={email}
          onComplete={onComplete}
        />
      );
      
    default:
      return null;
  }
};

export default BookingStepRenderer;
