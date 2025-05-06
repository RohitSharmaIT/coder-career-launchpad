
import React from 'react';
import { 
  FileText, 
  Code, 
  MessageSquare,
  Compass
} from "lucide-react";
import { ServiceItemProps } from './ServiceItem';
import ServicesHeader from './services/ServicesHeader';
import ServiceListContainer from './services/ServiceListContainer';

const ServicesList = () => {
  const services: ServiceItemProps[] = [
    {
      id: 1,
      title: "Resume Building",
      shortDescription: "Get your resume crafted by industry experts to highlight your strengths and stand out to recruiters.",
      longDescription: "Our resume building service transforms your professional experience into a compelling document that gets you noticed by recruiters. We focus on highlighting your relevant skills, achievements, and experience, while optimizing for ATS systems. Each resume is crafted by industry experts who understand what recruiters look for in your specific field.",
      icon: <FileText className="w-10 h-10" />,
      price: "₹999",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Person working on resume",
      buttons: {
        learnMore: true,
        bookSlot: true,
        viewPricing: false
      },
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
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Web development workspace",
      buttons: {
        learnMore: true,
        bookSlot: true,
        viewPricing: false
      },
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
      imageSrc: "/lovable-uploads/cff881fb-3608-47ae-86a8-aec53fd7fa66.png",
      imageAlt: "Mock interview session",
      buttons: {
        learnMore: true,
        bookSlot: true,
        viewPricing: false
      },
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
      title: "Career Guidance",
      shortDescription: "Get personalized career advice based on your goals, strengths, and interests.",
      longDescription: "Our career guidance service provides you with personalized advice from experienced professionals who understand the tech industry landscape. Whether you're just starting out, looking to advance, or considering a career change, we'll help you navigate your options and make informed decisions.",
      icon: <Compass className="w-10 h-10" />,
      price: "₹899",
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Career guidance session",
      buttons: {
        learnMore: false,
        bookSlot: false,
        viewPricing: true
      },
      includes: [
        "1-hour consultation session",
        "Personalized career roadmap",
        "Skill gap analysis",
        "Learning resource recommendations",
        "Follow-up email support"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ServicesHeader 
          category="CAREER SERVICES"
          title="Our Professional Services"
          subtitle="We offer tailored services to help you advance your career and achieve your professional goals."
        />

        <div className="mt-12">
          <ServiceListContainer services={services} />
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
