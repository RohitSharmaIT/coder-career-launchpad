
import React from 'react';
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobApplication {
  id: number;
  position: string;
  company: string;
  appliedDate: Date;
  status: string;
}

interface JobApplicationCardProps {
  job: JobApplication;
}

const JobApplicationCard = ({ job }: JobApplicationCardProps) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold">{job.position}</h3>
          <p className="text-gray-600">{job.company}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          job.status === "Applied" ? "bg-blue-100 text-blue-800" :
          job.status === "Interview Scheduled" ? "bg-green-100 text-green-800" :
          "bg-red-100 text-red-800"
        }`}>
          {job.status}
        </div>
      </div>
      
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="mr-2 h-4 w-4" />
        <span>Applied on {format(new Date(job.appliedDate), "MMMM dd, yyyy")}</span>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <Button variant="outline" size="sm">View Details</Button>
        {job.status === "Interview Scheduled" && (
          <Button size="sm" className="bg-brand-red hover:bg-red-600 text-white">
            Prepare for Interview
          </Button>
        )}
      </div>
    </div>
  );
};

export default JobApplicationCard;
