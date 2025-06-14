
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  logo?: string;
}

const JobCard = ({ id, title, company, location, type, postedDate, logo }: JobCardProps) => {
  return (
    <div className="job-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-12 h-12 object-cover rounded-lg border"
            />
          )}
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700">{company}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs mt-2 sm:mt-0">
          {type}
        </span>
      </div>
      <div className="mb-4">
        <p className="text-gray-600 text-sm">{location}</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <span className="text-gray-500 text-sm">Posted: {postedDate}</span>
        <Link to={`/jobs/${id}`}>
          <Button variant="outline" className="mt-3 sm:mt-0 border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
