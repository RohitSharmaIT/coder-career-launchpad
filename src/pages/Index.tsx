import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import JobCard from "@/components/JobCard";
import BlogCard from "@/components/BlogCard";
import Counter from "@/components/Counter";
import SubscribeBox from "@/components/SubscribeBox";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, Star, CheckCircle, Users, Award, Zap } from "lucide-react";

// Sample data
const services = [
  {
    id: 1,
    title: "Resume Building",
    description: "Get your resume crafted by industry experts to highlight your strengths and stand out to recruiters.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>,
    link: "/services#resume-building"
  },
  {
    id: 2,
    title: "Web Design & Development",
    description: "Custom website development tailored to your professional needs with a focus on UI/UX.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>,
    link: "/services#web-development"
  },
  {
    id: 3,
    title: "Mock Interviews",
    description: "Practice with industry experts in realistic interview scenarios with detailed feedback.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>,
    link: "/services#mock-interview"
  }
];

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "Bangalore, India",
    type: "Full-time",
    postedDate: "2 days ago"
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "InnovateTech",
    location: "Remote",
    type: "Full-time",
    postedDate: "1 week ago"
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataMinds",
    location: "Mumbai, India",
    type: "Part-time",
    postedDate: "3 days ago"
  }
];

const blogs = [
  {
    id: 1,
    title: "Top 10 Interview Questions for Frontend Developers",
    excerpt: "Prepare for your next frontend interview with these commonly asked questions and expert answers.",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "Interview",
    date: "May 10, 2024"
  },
  {
    id: 2,
    title: "How to Optimize Your Resume for ATS Systems",
    excerpt: "Learn how to structure your resume to pass through Applicant Tracking Systems and reach human recruiters.",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    category: "Resume",
    date: "May 5, 2024"
  },
  {
    id: 3,
    title: "Learning Data Structures: A Complete Guide",
    excerpt: "Master the fundamentals of data structures to ace your coding interviews and become a better programmer.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "Learning",
    date: "April 28, 2024"
  }
];

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

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-brand-red overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_25%_25%,_white_2px,_transparent_2px)] bg-[length:60px_60px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container mx-auto pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-white font-medium">India's Leading Career Platform</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in text-white leading-tight" style={{animationDelay: '0.2s'}}>
              Level Up Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Tech Career
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              Empowering Careers, One Step at a Time
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
              Expert guidance, mock interviews, and placement support to help you succeed in your tech career journey.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Link to="/book-slot">
                <Button className="bg-brand-red hover:bg-red-600 text-white text-lg px-8 py-6 rounded-full font-semibold group shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                  Explore Services
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-20 pt-8 border-t border-white/20 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">5000+</div>
                <div className="text-gray-300 text-sm">Happy Students</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_theme(colors.brand.red)_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red rounded-full px-4 py-2 mb-4 font-medium text-sm">
              <Zap className="h-4 w-4" />
              PROFESSIONAL SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Transform Your Career Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of services designed to accelerate your professional growth and help you achieve your career aspirations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={service.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-red/20 transform hover:-translate-y-2">
                  <div className="text-brand-red mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link to={service.link}>
                    <Button className="w-full bg-brand-red hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="bg-gradient-to-r from-brand-red via-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Building success stories across the tech industry with measurable results and lasting impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <Counter target={5000} label="Subscribers" suffix="+" />
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Counter target={500000} label="Views" suffix="+" />
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Counter target={1200} label="Mock Interviews" suffix="+" />
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Counter target={1100} label="Learners Helped" suffix="+" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Jobs Section */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4 font-medium text-sm">
              <Users className="h-4 w-4" />
              CAREER OPPORTUNITIES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Job Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover exciting career opportunities curated specifically for our community members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {jobs.map((job, index) => (
              <div key={job.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <JobCard
                  id={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  type={job.type}
                  postedDate={job.postedDate}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/jobs">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg">
                Browse All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Recent Blogs Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 rounded-full px-4 py-2 mb-4 font-medium text-sm">
              <Award className="h-4 w-4" />
              KNOWLEDGE HUB
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Latest Insights & Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with expert insights, career advice, and industry trends from our knowledge base.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  thumbnail={blog.thumbnail}
                  category={blog.category}
                  date={blog.date}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/blogs">
              <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg">
                Read More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 mb-4 font-medium text-sm">
              <CheckCircle className="h-4 w-4" />
              SUCCESS STORIES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from professionals who transformed their careers with our guidance and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-red/20 transform hover:-translate-y-1">
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

      {/* Enhanced Subscribe Section */}
      <div className="animate-fade-in">
        <SubscribeBox />
      </div>
      
      <Footer />
    </>
  );
};

export default HomePage;
