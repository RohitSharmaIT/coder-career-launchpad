
import React from 'react';

const ServicesFAQ = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? Find answers to common queries below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-2">How do I book a service?</h3>
              <p className="text-gray-600">
                You can book any service by clicking the "Book Slot" button, which will take you to our booking page. You'll need to create an account or log in to complete your booking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-2">What is your refund policy?</h3>
              <p className="text-gray-600">
                We offer full refunds if you cancel at least 24 hours before your scheduled appointment. For cancellations with less notice, we offer rescheduling options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-2">How long does each service typically take?</h3>
              <p className="text-gray-600">
                Service durations vary. Resume building typically takes 3-5 business days, mock interviews last 1-2 hours, and consultation sessions are usually 45-60 minutes. The timeline for web development projects depends on the scope.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-2">Do you offer package discounts?</h3>
              <p className="text-gray-600">
                Yes, we offer discounted rates when you book multiple services together. Contact us for more information about our package options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
