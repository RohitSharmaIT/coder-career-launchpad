import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import JobCard from "@/components/JobCard";
import { Users } from "lucide-react";
import { useJobs } from "@/contexts/JobsContext";

const JobsSection = () => {
  const { jobs } = useJobs();
  return (
    <section className="py-12 bg-gray-50 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode:"both"}}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 animate-fade-in" style={{animationDelay: "0.3s", animationFillMode:"both"}}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-6 py-3 mb-6 font-medium text-lg animate-scale-in" style={{animationDelay: "0.35s", animationFillMode:"both"}}>
            <Users className="h-5 w-5" />
            CAREER OPPORTUNITIES
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-in" style={{animationDelay: "0.4s", animationFillMode:"both"}}>
            Featured Job Openings
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay:'0.5s', animationFillMode:'both'}}>
            Discover exciting career opportunities curated specifically for our community members.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {jobs.slice(0, 3).map((job, index) => (
            <div key={job.id} className="animate-fade-in" style={{animationDelay: `${0.6 + index * 0.1}s`, animationFillMode:"both"}}>
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
        <div className="text-center animate-fade-in" style={{animationDelay: '0.8s', animationFillMode:"both"}}>
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
