
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Rahul Kumar",
      role: "Founder & Lead Mentor",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "With 8+ years in tech and a passion for mentoring"
    },
    {
      name: "Priya Singh",
      role: "Resume Expert",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Ex-recruiter helping candidates stand out"
    },
    {
      name: "Aman Gupta",
      role: "Technical Coach",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "Full-stack developer with expertise in interview preparation"
    },
    {
      name: "Neha Sharma",
      role: "Career Strategist",
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
      bio: "Helping professionals navigate career transitions"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started as a YouTube channel sharing interview tips and coding tutorials"
    },
    {
      year: "2021",
      title: "Growing Community",
      description: "Expanded to personalized career mentorship and resume reviews"
    },
    {
      year: "2022",
      title: "Formalized Services",
      description: "Launched structured services including mock interviews and career strategy sessions"
    },
    {
      year: "2023",
      title: "Digital Expansion",
      description: "Introduced online platform with resources, job listings, and community features"
    },
    {
      year: "2024",
      title: "Today & Beyond",
      description: "Continuing to innovate with new tools and resources for tech professionals"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">About Apne Wale Coders</h1>
              <p className="text-lg text-gray-700 mb-6">
                At Apne Wale Coders, we're driven by a simple mission: to help tech professionals navigate and succeed in their careers. 
                We believe that everyone deserves access to quality career guidance, regardless of their background or experience level.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                What started as a small initiative has grown into a community of learners and mentors, all working together to make the tech industry more accessible and navigable.
              </p>
              <Link to="/services">
                <Button className="bg-brand-red hover:bg-red-600 text-white">
                  Explore Our Services
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From a small initiative to a leading career platform, our journey has been guided by our commitment to supporting tech professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-brand-red">Mission</h3>
              <p className="text-gray-700">
                To empower tech professionals with the guidance, tools, and resources they need to advance their careers, overcome challenges, and achieve their professional goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-brand-red">Vision</h3>
              <p className="text-gray-700">
                To create a world where every tech professional has access to quality career guidance and personalized support, regardless of their background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The evolution of Apne Wale Coders has been an exciting journey of growth and impact.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* Timeline Items */}
              {timeline.map((item, index) => (
                <div key={index} className={`relative z-10 mb-8 flex ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} items-center w-full`}>
                  <div className="order-1 w-5/12"></div>
                  
                  <div className="z-20 flex items-center order-1 bg-brand-red shadow-xl w-8 h-8 rounded-full">
                    <div className="mx-auto font-semibold text-lg text-white">{item.year.slice(-2)}</div>
                  </div>
                  
                  <div className={`order-1 rounded-lg shadow-md px-6 py-4 border border-gray-100 bg-white ${index % 2 === 0 ? 'md:mr-12 mr-0 ml-12 md:ml-0' : 'ml-12'} w-5/12`}>
                    <h3 className="font-bold text-brand-red text-xl">{item.year}: {item.title}</h3>
                    <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to helping you succeed in your tech career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="mb-4 w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-brand-red font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              What makes Apne Wale Coders different from other career platforms?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg shadow-md border border-gray-100 bg-white text-center">
              <div className="text-brand-red text-3xl mb-4 mx-auto w-16 h-16 flex items-center justify-center bg-red-50 rounded-full">
                <GraduationCap size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                We tailor our guidance to your specific needs, goals, and career stage, ensuring relevant and actionable advice.
              </p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md border border-gray-100 bg-white text-center">
              <div className="text-brand-red text-3xl mb-4 mx-auto w-16 h-16 flex items-center justify-center bg-red-50 rounded-full">
                <Users size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Experience</h3>
              <p className="text-gray-600">
                Our mentors bring real-world experience from top tech companies, offering insights that go beyond theoretical knowledge.
              </p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md border border-gray-100 bg-white text-center">
              <div className="text-brand-red text-3xl mb-4 mx-auto w-16 h-16 flex items-center justify-center bg-red-50 rounded-full">
                <Award size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Excellence</h3>
              <p className="text-gray-600">
                We believe quality career guidance should be accessible to all, which is why we offer competitive pricing and flexible options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
