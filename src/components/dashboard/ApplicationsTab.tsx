
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobApplicationCard from './JobApplicationCard';
import SavedJobsTab from './SavedJobsTab';

// Define the job application type
interface JobApplication {
  id: number;
  position: string;
  company: string;
  appliedDate: Date;
  status: string;
}

interface ApplicationsTabProps {
  jobApplications: JobApplication[];
}

const ApplicationsTab = ({ jobApplications }: ApplicationsTabProps) => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="applications">Job Applications</TabsTrigger>
          <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Your Job Applications</CardTitle>
            </CardHeader>
            <CardContent>
              {jobApplications.length > 0 ? (
                <div className="space-y-4">
                  {jobApplications.map((job) => (
                    <JobApplicationCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium mb-2">No job applications yet</h3>
                  <p className="text-gray-600 mb-4">Start applying for jobs to track your applications here.</p>
                  <Link to="/jobs">
                    <Button className="bg-brand-red hover:bg-red-600 text-white">
                      Browse Jobs
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="saved">
          <SavedJobsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApplicationsTab;
