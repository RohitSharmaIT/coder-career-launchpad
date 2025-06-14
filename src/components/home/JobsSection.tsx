
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import JobCard from "@/components/JobCard";
import { Users } from "lucide-react";

const JobsSection = () => {
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

  return (
    <section className="bg-white section-padding">
      <div className="container-full">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-6 py-3 mb-6 font-medium text-lg">
            <Users className="h-5 w-5" />
            CAREER OPPORTUNITIES
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Featured Job Openings
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover exciting career opportunities curated specifically for our community members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
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
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-300 hover:shadow-lg">
              Browse All Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
