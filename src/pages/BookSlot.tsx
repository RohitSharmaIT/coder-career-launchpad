
import React from 'react';
import BookingContent from '@/components/booking/BookingContent';
import ProtectedRoute from "@/components/ProtectedRoute";

// Wrap the BookingContent in a ProtectedRoute to require login
const BookSlot = () => {
  return (
    <ProtectedRoute>
      <BookingContent />
    </ProtectedRoute>
  );
};

export default BookSlot;
