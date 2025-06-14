
import React from 'react';
import { 
  FileText, 
  Code, 
  MessageSquare,
  Compass
} from "lucide-react";
import { ServiceItemProps } from './ServiceItem';
import ServicesHeader from './services/ServicesHeader';
import ServiceCardGrid from './services/ServiceCardGrid';

const ServicesList = () => {
  const services: ServiceItemProps[] = [
    {
      id: 1,
      title: "Resume Building",
      shortDescription: "Get your resume crafted by industry experts to highlight your strengths and stand out to recruiters.",
      longDescription: "Our resume building service transforms your professional experience into a compelling document that gets you noticed by recruiters. We focus on highlighting your relevant skills, achievements, and experience, while optimizing for ATS systems. Each resume is crafted by industry experts who understand what recruiters look for in your specific field.",
      icon: <FileText className="w-8 h-8" />,
      price: "₹10",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Person working on resume",
      buttons: {
        learnMore: true,
        bookSlot: true,
        viewPricing: false
      },
      serviceId: "resume",
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
      icon: <Code className="w-8 h-8" />,
      price: "₹10",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Web development workspace",
      buttons: {
        learnMore: true,
        bookSlot: true,
        viewPricing: false
      },
      serviceId: "webdev",
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
      title: "Mock Interview Sessions",
      shortDescription: "Practice with industry experts in realistic interview scenarios with detailed feedback to improve your performance.",
      longDescription: "Our mock interview service prepares you for real-world interviews by simulating the actual experience. You'll practice with industry experts who will challenge you with common and difficult questions, provide constructive feedback, and help you refine your responses. We cover technical, behavioral, and situational interviews with role-specific preparation and company-focused interview strategies.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "₹10",
      imageSrc: "/lovable-uploads/2fa0e0c0-5d16-4404-a0bd-43c106e676d5.png",
      imageAlt: "Mock interview session with industry expert",
      buttons: {
        learnMore: false,
        bookSlot: true,
        viewPricing: false
      },
      serviceId: "interview",
      includes: [
        "Role-Specific Preparation - Tailored interview preparation for front-end, back-end, full-stack, or specialized tech roles",
        "Company-Focused Interview - Strategically prepare for specific company interview styles including FAANG, startups, and enterprise organizations",
        "Comprehensive Feedback - Receive detailed assessments of your performance with actionable insights for continuous improvement",
        "1-hour mock interview session",
        "Industry-specific questions"
      ]
    },
    {
      id: 4,
      title: "Career Guidance",
      shortDescription: "Get personalized career advice based on your goals, strengths, and interests.",
      longDescription: "Our career guidance service provides you with personalized advice from experienced professionals who understand the tech industry landscape. Whether you're just starting out, looking to advance, or considering a career change, we'll help you navigate your options and make informed decisions.",
      icon: <Compass className="w-8 h-8" />,
      price: "₹10",
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Career guidance session",
      buttons: {
        learnMore: false,
        bookSlot: false,
        viewPricing: true
      },
      serviceId: "guidance",
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in">
          <ServicesHeader 
            category="CAREER SERVICES"
            title="Our Professional Services"
            subtitle="We offer tailored services to help you advance your career and achieve your professional goals."
          />
        </div>

        <div className="mt-16">
          <ServiceCardGrid services={services} />
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
