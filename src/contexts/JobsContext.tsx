
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  salary?: string;
  experience?: string;
  skills?: string[];
  category?: string;
}

interface JobsContextType {
  jobs: Job[];
  addJob: (job: Omit<Job, 'id' | 'postedDate'>) => void;
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobsProvider');
  }
  return context;
};

export const JobsProvider = ({ children }: { children: ReactNode }) => {
  // Initial job data from the Jobs page
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      location: "Bangalore, India",
      type: "Full-time",
      postedDate: "2 days ago",
      salary: "₹12-18 LPA",
      experience: "2-4 years",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      category: "software-development"
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "InnovateTech",
      location: "Remote",
      type: "Full-time",
      postedDate: "1 week ago",
      salary: "₹15-22 LPA",
      experience: "3-5 years",
      skills: ["Python", "Django", "PostgreSQL", "AWS"],
      category: "software-development"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataMinds",
      location: "Mumbai, India",
      type: "Part-time",
      postedDate: "3 days ago",
      salary: "₹18-25 LPA",
      experience: "2-6 years",
      skills: ["Python", "Machine Learning", "SQL", "Data Analysis"],
      category: "data-science"
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Delhi, India",
      type: "Full-time",
      postedDate: "1 day ago",
      salary: "₹10-15 LPA",
      experience: "2-3 years",
      skills: ["Figma", "Adobe XD", "UI Design", "User Research"],
      category: "design"
    },
    {
      id: 5,
      title: "Product Manager",
      company: "ProductFirst",
      location: "Hyderabad, India",
      type: "Full-time",
      postedDate: "5 days ago",
      salary: "₹20-28 LPA",
      experience: "4-7 years",
      skills: ["Product Strategy", "Agile", "Data Analysis", "User Experience"],
      category: "marketing"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Remote",
      type: "Full-time",
      postedDate: "1 week ago",
      salary: "₹16-24 LPA",
      experience: "3-5 years",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      category: "operations"
    },
    {
      id: 7,
      title: "Mobile App Developer",
      company: "AppSphere",
      location: "Pune, India",
      type: "Full-time",
      postedDate: "2 days ago",
      salary: "₹12-18 LPA",
      experience: "2-4 years",
      skills: ["React Native", "iOS", "Android", "JavaScript"],
      category: "software-development"
    },
    {
      id: 8,
      title: "Backend Developer",
      company: "ServerPro",
      location: "Bangalore, India",
      type: "Contract",
      postedDate: "3 days ago",
      salary: "₹14-20 LPA",
      experience: "3-6 years",
      skills: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
      category: "software-development"
    }
  ]);

  const addJob = (newJob: Omit<Job, 'id' | 'postedDate'>) => {
    const job: Job = {
      ...newJob,
      id: jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 1,
      postedDate: "Just now"
    };
    
    // Add new job to the top of the list
    setJobs([job, ...jobs]);
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobsContext.Provider>
  );
};
