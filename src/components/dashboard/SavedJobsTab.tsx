
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Trash2, ExternalLink } from "lucide-react";
import { SavedJob, useSavedJobs } from '@/contexts/SavedJobsContext';
import { toast } from "sonner";

const SavedJobsTab = () => {
  const { savedJobs, removeSavedJob } = useSavedJobs();

  const handleRemoveJob = (jobId: number, jobTitle: string) => {
    removeSavedJob(jobId);
    toast.success(`Removed "${jobTitle}" from saved jobs`);
  };

  const formatSavedDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Saved Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          {savedJobs.length > 0 ? (
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-2">
                        <span className="font-medium">{job.company}</span>
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          Posted {job.postedDate}
                        </span>
                      </div>
                      
                      {job.salary && (
                        <div className="text-sm text-gray-600 mb-2">
                          Salary: {job.salary}
                        </div>
                      )}
                      
                      {job.skills && job.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {job.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}
                      
                      <div className="text-xs text-gray-500">
                        Saved on {formatSavedDate(job.savedDate)}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={`/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">
                          <ExternalLink size={16} className="mr-1" />
                          View Details
                        </Button>
                      </Link>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveJob(job.id, job.title)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={16} className="mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium mb-2">No saved jobs yet</h3>
              <p className="text-gray-600 mb-4">Start saving jobs you're interested in to keep track of them here.</p>
              <Link to="/jobs">
                <Button className="bg-brand-red hover:bg-red-600 text-white">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SavedJobsTab;
