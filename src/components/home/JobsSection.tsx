
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
  );
};

export default JobsSection;
