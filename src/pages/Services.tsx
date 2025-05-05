
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Code, 
  MessageSquare, 
  GraduationCap, 
  Compass, 
  Briefcase, 
  Laptop 
} from "lucide-react";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Resume Building",
      shortDescription: "Get your resume crafted by industry experts to highlight your strengths and stand out to recruiters.",
      longDescription: "Our resume building service transforms your professional experience into a compelling document that gets you noticed by recruiters. We focus on highlighting your relevant skills, achievements, and experience, while optimizing for ATS systems. Each resume is crafted by industry experts who understand what recruiters look for in your specific field.",
      icon: <FileText className="w-10 h-10" />,
      price: "₹999",
      includes: [
        "Professional resume crafting",
        "ATS optimization",
        "2 rounds of revisions",
        "Cover letter (optional)",
        "LinkedIn profile recommendations"
      ]
    },
    {
      id: 2,
      title: "Web Design & Development",
      shortDescription: "Custom website development tailored to your professional needs with a focus on UI/UX.",
      longDescription: "Our web design and development service creates beautiful, functional websites that showcase your professional brand. Whether you need a portfolio site, a blog, or a business website, our team of designers and developers will create a custom solution that meets your specific needs and goals.",
      icon: <Code className="w-10 h-10" />,
      price: "₹4999",
      includes: [
        "Custom design",
        "Mobile-responsive layouts",
        "SEO optimization",
        "Content management system",
        "3 rounds of revisions",
        "1 month of technical support"
      ]
    },
    {
      id: 3,
      title: "Interview Preparation",
      shortDescription: "Practice with industry experts in realistic interview scenarios with detailed feedback.",
      longDescription: "Our mock interview service prepares you for real-world interviews by simulating the actual experience. You'll practice with industry experts who will challenge you with common and difficult questions, provide constructive feedback, and help you refine your responses. We cover technical, behavioral, and situational interviews.",
      icon: <MessageSquare className="w-10 h-10" />,
      price: "₹1499",
      includes: [
        "1-hour mock interview session",
        "Industry-specific questions",
        "Detailed feedback report",
        "Response improvement suggestions",
        "Follow-up session (optional)"
      ]
    },
    {
      id: 4,
      title: "Company Assessment Preparation",
      shortDescription: "Prepare for specific company assessments and tests with tailored strategies and practice.",
      longDescription: "Our company assessment preparation service helps you succeed in the specific tests and assessments used by your target companies. We cover aptitude tests, technical assessments, case studies, and other evaluation methods commonly used in the hiring process.",
      icon: <GraduationCap className="w-10 h-10" />,
      price: "₹1299",
      includes: [
        "Company-specific test preparation",
        "Practice materials and resources",
        "Personalized strategy session",
        "Performance analysis",
        "Improvement recommendations"
      ]
    },
    {
      id: 5,
      title: "Career Guidance",
      shortDescription: "Get personalized advice on career paths, skill development, and industry trends.",
      longDescription: "Our career guidance service provides you with personalized advice from experienced professionals who understand the tech industry landscape. Whether you're just starting out, looking to advance, or considering a career change, we'll help you navigate your options and make informed decisions.",
      icon: <Compass className="w-10 h-10" />,
      price: "₹899",
      includes: [
        "1-hour consultation session",
        "Personalized career roadmap",
        "Skill gap analysis",
        "Learning resource recommendations",
        "Follow-up email support"
      ]
    },
    {
      id: 6,
      title: "Career Strategy & Projects",
      shortDescription: "Develop a comprehensive career strategy with projects to enhance your portfolio.",
      longDescription: "Our career strategy and projects service helps you build a comprehensive plan for your professional growth, complemented by meaningful projects that enhance your portfolio. We identify the skills you need to develop, the experiences you should seek, and the projects that will showcase your abilities to potential employers.",
      icon: <Briefcase className="w-10 h-10" />,
      price: "₹2499",
      includes: [
        "Career strategy development",
        "Portfolio project planning",
        "Project guidance and feedback",
        "Skill development roadmap",
        "3 months of email support"
      ]
    },
    {
      id: 7,
      title: "Take-home Projects",
      shortDescription: "Guidance and review for take-home coding challenges and project assignments.",
      longDescription: "Our take-home projects service provides guidance and review for coding challenges and project assignments that are increasingly common in the tech hiring process. We'll help you understand requirements, plan your approach, and review your solution before submission to ensure you present your best work.",
      icon: <Laptop className="w-10 h-10" />,
      price: "₹1999",
      includes: [
        "Project requirement analysis",
        "Solution planning assistance",
        "Code review and feedback",
        "Best practices recommendations",
        "Documentation guidance"
      ]
    }
  ];

  const toggleService = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We offer a range of specialized services designed to help you advance in your tech career journey.
          </p>
          <Link to="/book-slot">
            <Button className="bg-brand-red hover:bg-red-600 text-white">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-card transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="text-brand-red mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">
                      {expandedService === service.id ? service.longDescription : service.shortDescription}
                    </p>
                  </div>
                </div>
                
                {expandedService === service.id && (
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">What's Included:</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        {service.includes.map((item, index) => (
                          <li key={index} className="mb-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold">Starting from:</h4>
                      <p className="text-brand-red font-bold text-xl">{service.price}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => toggleService(service.id)}
                    className="text-brand-red font-medium hover:underline"
                  >
                    {expandedService === service.id ? "Show Less" : "Learn More"}
                  </button>
                  
                  <Link to="/book-slot">
                    <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                      Book Slot
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Book a service today and take the next step in your professional journey.
          </p>
          <Link to="/book-slot">
            <Button className="bg-brand-red hover:bg-red-600 text-white text-lg px-8 py-6">
              Book a Slot Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
