
import { Card, CardContent } from "@/components/ui/card";
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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="text-brand-red uppercase font-medium mb-2">CAREER DEVELOPMENT</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Career Strategy & Projects</h2>
          <p className="text-gray-600 max-w-2xl">
            Strategic guidance for your career growth and practical projects to enhance your portfolio and marketability
          </p>
          <div className="mt-4 w-24 h-1 bg-brand-red"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-3/5">
            <div className="space-y-6">
              {services.slice(0, 3).map((service) => (
                <ServiceItem 
                  key={service.id}
                  {...service}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <Link to="/book-slot" className="inline-block">
                <Button className="bg-brand-red hover:bg-red-600 text-white mr-4">
                  Book Career Guidance
                </Button>
              </Link>
              <Link to="/pricing" className="inline-block">
                <Button variant="outline" className="border-gray-300 text-gray-600">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:w-2/5">
            <Card className="border-0 shadow-md overflow-hidden">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/5105666c-eb2c-4b5b-a040-b069b241e082.png"
                  alt="Person working on laptop" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
