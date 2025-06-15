import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Briefcase, BookOpen, Users } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Briefcase className="w-10 h-10" />,
    title: "Career Coaching",
    description: "Expert 1:1 guidance to advance your professional journey and land your dream role.",
    link: "/services/career-coaching"
  },
  {
    id: 2,
    icon: <BookOpen className="w-10 h-10" />,
    title: "Interview Prep",
    description: "Comprehensive preparation for interviews in tech, business, and more.",
    link: "/services/interview-prep"
  },
  {
    id: 3,
    icon: <Users className="w-10 h-10" />,
    title: "Networking Events",
    description: "Exclusive access to our network and opportunities for career expansion.",
    link: "/services/networking"
  }
];

const ServicesSection = () => {
  return (
    <section className="section-gradient py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode:'both'}}>
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red rounded-full px-6 py-3 mb-6 font-medium text-lg animate-scale-in" style={{animationDelay: '0.2s', animationFillMode:'both'}}>
            <Zap className="h-5 w-5" />
            PROFESSIONAL SERVICES
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-in" style={{animationDelay: '0.3s', animationFillMode:'both'}}>
            Transform Your Career Journey
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s', animationFillMode:'both'}}>
            We offer a comprehensive range of services designed to accelerate your professional growth and help you achieve your career aspirations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
          {services.map((service, index) => (
            <div key={service.id} className="animate-fade-in" style={{animationDelay: `${0.2 + index*0.1}s`, animationFillMode:"both"}}>
              <div className="service-card p-10 h-full hover:scale-105 transition-transform">
                <div className="text-brand-red mb-8 group-hover:scale-110 transition-transform duration-300 animate-scale-in">{service.icon}</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                <Link to={service.link}>
                  <Button className="w-full bg-brand-red hover:bg-red-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 group-hover:shadow-lg text-lg animate-shake" style={{animationDelay: `${0.5 + index*0.1}s` }}>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center animate-fade-in" style={{animationDelay: '0.6s', animationFillMode:'both'}}>
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
