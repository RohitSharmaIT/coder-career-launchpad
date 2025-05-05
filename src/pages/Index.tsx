
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
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')" 
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Level Up Your Career with <span className="text-brand-red">Apne Wale Coders</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering Careers, One Step at a Time
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-300">
              Expert guidance, mock interviews, and placement support to help
              you succeed in your tech career journey.
            </p>
            <Link to="/book-slot">
              <Button className="bg-brand-red hover:bg-red-600 text-white text-lg px-8 py-6">
                Book a Slot
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of services designed to help you advance in your tech career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Strength in Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our impact speaks for itself through the success of our community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Counter target={5000} label="Subscribers" suffix="+" />
            <Counter target={500000} label="Views" suffix="+" />
            <Counter target={1200} label="Mock Interviews" suffix="+" />
            <Counter target={1100} label="Learners Helped" suffix="+" />
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the latest job opportunities curated for our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                type={job.type}
                postedDate={job.postedDate}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs">
              <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                View All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Blogs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest tech insights and career advice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                thumbnail={blog.thumbnail}
                category={blog.category}
                date={blog.date}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blogs">
              <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                View All Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Reviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what our students have to say about their experience with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <SubscribeBox />
      
      <Footer />
    </>
  );
};

export default HomePage;
