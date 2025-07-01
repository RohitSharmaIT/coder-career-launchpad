
import React from 'react';
import BookingContent from '@/components/booking/BookingContent';
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Wrap the BookingContent in a ProtectedRoute to require login
const BookSlot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Book Your Session
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Take the next step in your career journey. Choose from our expert-led sessions designed to accelerate your professional growth.
            </p>
          </div>
          
          {/* Main Content */}
          <div className="animate-fade-in">
            <ProtectedRoute>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <BookingContent />
              </div>
            </ProtectedRoute>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookSlot;
