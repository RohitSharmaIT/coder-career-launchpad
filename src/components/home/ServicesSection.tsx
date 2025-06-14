
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Resume Building",
      description: "Get your resume crafted by industry experts to highlight your strengths and stand out to recruiters.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>,
      link: "/services#resume-building"
    },
    {
      id: 2,
      title: "Web Design & Development",
      description: "Custom website development tailored to your professional needs with a focus on UI/UX.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>,
      link: "/services#web-development"
    },
    {
      id: 3,
      title: "Mock Interviews",
      description: "Practice with industry experts in realistic interview scenarios with detailed feedback.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>,
      link: "/services#mock-interview"
    }
  ];

  return (
    <section className="section-gradient relative overflow-hidden section-padding">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_theme(colors.brand.red)_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container-full relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red rounded-full px-6 py-3 mb-6 font-medium text-lg">
            <Zap className="h-5 w-5" />
            PROFESSIONAL SERVICES
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Transform Your Career Journey
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer a comprehensive range of services designed to accelerate your professional growth and help you achieve your career aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => (
            <div key={service.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-card p-10 h-full">
                <div className="text-brand-red mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                <Link to={service.link}>
                  <Button className="w-full bg-brand-red hover:bg-red-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 group-hover:shadow-lg text-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Link to="/services">
            <Button variant="outline" className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-300 hover:shadow-lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
