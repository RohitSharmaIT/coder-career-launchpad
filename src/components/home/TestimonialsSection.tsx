
import TestimonialCard from "@/components/TestimonialCard";
import { CheckCircle } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "Google",
      testimonial: "The mock interview sessions were incredibly helpful. The feedback was detailed and actionable, which helped me improve rapidly. I landed my dream job at Google!",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Priya Patel",
      role: "Frontend Developer",
      company: "Microsoft",
      testimonial: "Apne Wale Coders helped me refine my resume and prepare for technical interviews. Their guidance was invaluable in my job search journey.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Amit Kumar",
      role: "Data Scientist",
      company: "Amazon",
      testimonial: "The personalized career strategy sessions helped me transition from a junior to senior role. Highly recommended for anyone looking to advance their tech career.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-full">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-6 py-3 mb-6 font-medium text-lg">
            <CheckCircle className="h-5 w-5" />
            SUCCESS STORIES
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real stories from professionals who transformed their careers with our guidance and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-red/20 transform hover:-translate-y-2 p-2">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                  avatar={testimonial.avatar}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
