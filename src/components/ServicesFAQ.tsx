
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServicesFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How do I book a service?",
      answer: "You can book any service by clicking the 'Book Service' button, which will take you to our booking page. You'll need to create an account or log in to complete your booking."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer full refunds if you cancel at least 24 hours before your scheduled appointment. For cancellations with less notice, we offer rescheduling options."
    },
    {
      question: "How long does each service typically take?",
      answer: "Service durations vary. Resume building typically takes 3-5 business days, mock interviews last 1-2 hours, and consultation sessions are usually 45-60 minutes. The timeline for web development projects depends on the scope."
    },
    {
      question: "Do you offer package discounts?",
      answer: "Yes, we offer discounted rates when you book multiple services together. Contact us for more information about our package options."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-brand-red uppercase font-semibold text-sm tracking-wider bg-red-50 px-4 py-2 rounded-full inline-block mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? Find answers to common queries below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-brand-red flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
