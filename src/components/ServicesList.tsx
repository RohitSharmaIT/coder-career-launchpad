
import ServiceItem, { ServiceItemProps } from './ServiceItem';
import { 
  FileText, 
  Code, 
  MessageSquare, 
  GraduationCap, 
  Compass, 
  Briefcase, 
  Laptop 
} from "lucide-react";

const ServicesList = () => {
  const services: ServiceItemProps[] = [
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceItem 
              key={service.id}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
