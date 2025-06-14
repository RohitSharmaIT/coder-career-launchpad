
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import JobCard from "@/components/JobCard";
import { Job } from '@/contexts/JobsContext';

interface JobsListProps {
  filteredJobs: Job[];
}

const JobsList = ({ filteredJobs }: JobsListProps) => {
  return (
    <div className="lg:w-3/4">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-600">
          Showing <span className="font-bold">{filteredJobs.length}</span> available positions
        </p>
        
        <div className="flex gap-2">
          <Button variant="outline" className="hidden md:flex">
            Newest First
          </Button>
          <Link to="/post-job">
            <Button className="bg-brand-red hover:bg-red-600 text-white">
              Post a Job
            </Button>
          </Link>
        </div>
      </div>
      
      {filteredJobs.length > 0 ? (
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              postedDate={job.postedDate}
              logo={job.logo}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-2">No jobs found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default JobsList;
