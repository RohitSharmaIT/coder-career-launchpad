
import TestimonialCard from "@/components/TestimonialCard";
import { CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    testimonial:
      "This platform helped me ace my interviews and land a dream job. The community and guidance were top-notch!"
  },
  {
    name: "Rajat Mehra",
    role: "Frontend Developer",
    company: "InnovateTech",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    testimonial:
      "The mentorship and study resources are amazing. The job board is regularly updated with great opportunities."
  },
  {
    name: "Sarah Ali",
    role: "Data Scientist",
    company: "DataMinds",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    testimonial:
      "Super supportive community and excellent interview preparation modules. Highly recommend!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-6 py-3 mb-4 md:mb-6 font-medium text-lg animate-scale-in">
            <CheckCircle className="h-5 w-5" />
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-in">
            What Our Students Say
          </h2>
          <p className="text-base md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Real stories from professionals who transformed their careers with our guidance and support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-2 md:mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in">
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
