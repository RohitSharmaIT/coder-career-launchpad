
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SavedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  salary?: string;
  experience?: string;
  skills?: string[];
  savedDate: Date;
}

interface SavedJobsContextType {
  savedJobs: SavedJob[];
  saveJob: (job: Omit<SavedJob, 'savedDate'>) => void;
  removeSavedJob: (jobId: number) => void;
  isJobSaved: (jobId: number) => boolean;
}

const SavedJobsContext = createContext<SavedJobsContextType | undefined>(undefined);

export const useSavedJobs = () => {
  const context = useContext(SavedJobsContext);
  if (context === undefined) {
    throw new Error('useSavedJobs must be used within a SavedJobsProvider');
  }
  return context;
};

export const SavedJobsProvider = ({ children }: { children: ReactNode }) => {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);

  const saveJob = (job: Omit<SavedJob, 'savedDate'>) => {
    const newSavedJob: SavedJob = {
      ...job,
      savedDate: new Date()
    };
    
    setSavedJobs(prev => {
      // Check if job is already saved
      const isAlreadySaved = prev.some(savedJob => savedJob.id === job.id);
      if (isAlreadySaved) {
        return prev;
      }
      return [newSavedJob, ...prev];
    });
  };

  const removeSavedJob = (jobId: number) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const isJobSaved = (jobId: number) => {
    return savedJobs.some(job => job.id === jobId);
  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, saveJob, removeSavedJob, isJobSaved }}>
      {children}
    </SavedJobsContext.Provider>
  );
};
