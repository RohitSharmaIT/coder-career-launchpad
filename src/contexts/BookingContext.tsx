
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BookedService {
  id: number;
  service: string;
  date: Date;
  status: string;
  notes: string;
}

interface BookingContextType {
  bookedServices: BookedService[];
  addBooking: (booking: BookedService) => void;
  updateBookingStatus: (id: number, status: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  // Mock data for booked services - keep the same initial data as in Dashboard
  const [bookedServices, setBookedServices] = useState<BookedService[]>([
    {
      id: 1,
      service: "Resume Building",
      date: new Date("2024-05-15T10:00:00"),
      status: "scheduled",
      notes: "Focus on highlighting my Java and Spring Boot experience"
    },
    {
      id: 2,
      service: "Mock Interview",
      date: new Date("2024-05-20T14:00:00"),
      status: "scheduled",
      notes: "Practice for Google technical interview"
    },
    {
      id: 3,
      service: "Resume Building",
      date: new Date("2024-04-10T11:00:00"),
      status: "completed",
      notes: "Resume was delivered and I got positive feedback"
    }
  ]);

  const addBooking = (booking: BookedService) => {
    console.log("Adding new booking to context:", booking);
    setBookedServices(prevServices => [booking, ...prevServices]);
  };

  const updateBookingStatus = (id: number, status: string) => {
    setBookedServices(prevServices => 
      prevServices.map(service => 
        service.id === id ? { ...service, status } : service
      )
    );
  };

  return (
    <BookingContext.Provider value={{ bookedServices, addBooking, updateBookingStatus }}>
      {children}
    </BookingContext.Provider>
  );
};
