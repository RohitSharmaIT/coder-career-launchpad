
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, Target, Eye, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Rahul Kumar",
      role: "Founder & Lead Mentor",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "With 8+ years in tech and a passion for mentoring, Rahul has helped hundreds of professionals land their dream jobs.",
      expertise: ["System Design", "Career Strategy", "Technical Leadership"]
    },
    {
      name: "Priya Singh",
      role: "Resume Expert",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Ex-recruiter with insider knowledge helping candidates create compelling resumes that stand out.",
      expertise: ["Resume Writing", "ATS Optimization", "LinkedIn Strategy"]
    },
    {
      name: "Aman Gupta",
      role: "Technical Coach",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "Full-stack developer with expertise in preparing candidates for technical interviews.",
      expertise: ["DSA", "Mock Interviews", "Coding Challenges"]
    },
    {
      name: "Neha Sharma",
      role: "Career Strategist",
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
      bio: "Specializing in career transitions and helping professionals navigate the tech industry.",
      expertise: ["Career Planning", "Salary Negotiation", "Industry Insights"]
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started as a YouTube channel sharing interview tips and coding tutorials",
      icon: "🚀"
    },
    {
      year: "2021",
      title: "Growing Community",
      description: "Expanded to personalized career mentorship and resume reviews",
      icon: "👥"
    },
    {
      year: "2022",
      title: "Formalized Services",
      description: "Launched structured services including mock interviews and career strategy sessions",
      icon: "🎯"
    },
    {
      year: "2023",
      title: "Digital Expansion",
      description: "Introduced online platform with resources, job listings, and community features",
      icon: "💻"
    },
    {
      year: "2024",
      title: "Today & Beyond",
      description: "Continuing to innovate with new tools and resources for tech professionals",
      icon: "⭐"
    }
  ];

  const achievements = [
    { number: "500+", label: "Professionals Mentored" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Partner Companies" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-red/10 via-white to-red-50 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ef4444\" fillOpacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-brand-red/10 text-brand-red border-brand-red/20">
                About Our Journey
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Tech 
                <span className="text-brand-red block">Careers</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're passionate about helping tech professionals achieve their career goals through personalized mentorship, expert guidance, and proven strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button className="bg-brand-red hover:bg-red-600 text-white px-8 py-3">
                    Explore Services
                  </Button>
                </Link>
                <Link to="/book-slot">
                  <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-3">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-red-300/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-brand-red mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-brand-red/10 text-brand-red border-brand-red/20">
              Our Purpose
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by purpose, guided by values, and committed to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                  <Target className="w-8 h-8 text-brand-red" />
                </div>
                <CardTitle className="text-2xl text-brand-red">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  To empower tech professionals with the guidance, tools, and resources they need to advance their careers, overcome challenges, and achieve their professional goals through personalized mentorship and proven strategies.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                  <Eye className="w-8 h-8 text-brand-red" />
                </div>
                <CardTitle className="text-2xl text-brand-red">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  To create a world where every tech professional has access to quality career guidance and personalized support, breaking down barriers and democratizing career success in the technology industry.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-brand-red/10 text-brand-red border-brand-red/20">
              Our Story
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to a thriving community of tech professionals.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {timeline.map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="text-3xl font-bold text-brand-red mb-2">{item.year}</div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-brand-red/10 text-brand-red border-brand-red/20">
              Our Experts
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your career success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-brand-red/20 group-hover:ring-brand-red/40 transition-all duration-300">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl mt-4">{member.name}</CardTitle>
                  <p className="text-brand-red font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-brand-red/10 text-brand-red">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-brand-red/10 text-brand-red border-brand-red/20">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of tech professionals trust us with their career growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                  <GraduationCap className="w-8 h-8 text-brand-red" />
                </div>
                <CardTitle className="text-xl">Personalized Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  We tailor our guidance to your specific needs, goals, and career stage, ensuring relevant and actionable advice that drives real results.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>1-on-1 mentorship sessions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Customized career roadmaps</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                  <Users className="w-8 h-8 text-brand-red" />
                </div>
                <CardTitle className="text-xl">Industry Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Our mentors bring real-world experience from top tech companies, offering insights that go beyond theoretical knowledge.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>FAANG company experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Current industry trends</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                  <Award className="w-8 h-8 text-brand-red" />
                </div>
                <CardTitle className="text-xl">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Our track record speaks for itself with high success rates and satisfied clients who have achieved their career goals.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>95% success rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Average 40% salary increase</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful tech professionals who have accelerated their careers with our expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-slot">
                <Button className="bg-white text-brand-red hover:bg-gray-100 px-8 py-3 text-lg">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red px-8 py-3 text-lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
