
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { useJobs } from '@/contexts/JobsContext';

export const useAdminJobForm = () => {
  const navigate = useNavigate();
  const { addJob } = useJobs();
  
  // Job form state
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('full-time');
  const [salary, setSalary] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const resetForm = () => {
    setJobTitle('');
    setCompany('');
    setLocation('');
    setJobType('full-time');
    setSalary('');
    setJobDescription('');
    setRequirements('');
  };
  
  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!jobTitle || !company || !location || !jobDescription || !requirements) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    
    // Combine description and requirements for the skills array
    const skills = requirements
      .split(',')
      .map(req => req.trim())
      .filter(Boolean);
    
    // Add job to context
    addJob({
      title: jobTitle,
      company: company,
      location: location,
      type: jobType === 'full-time' ? 'Full-time' : 
            jobType === 'part-time' ? 'Part-time' :
            jobType === 'contract' ? 'Contract' :
            jobType === 'internship' ? 'Internship' : 'Remote',
      salary: salary,
      skills: skills
    });
    
    // In a real app with backend, this would be an API call
    console.log('POST to /api/admin/post-job', {
      title: jobTitle,
      company,
      location,
      jobType,
      salary,
      description: jobDescription,
      requirements: skills
    });
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Job posted successfully");
      resetForm();
      setIsSubmitting(false);
      
      // Navigate to jobs page to see the new job
      navigate('/jobs');
    }, 1500);
  };
  
  return {
    // Form state
    jobTitle,
    setJobTitle,
    company,
    setCompany,
    location,
    setLocation,
    jobType,
    setJobType,
    salary,
    setSalary,
    jobDescription,
    setJobDescription,
    requirements,
    setRequirements,
    isSubmitting,
    // Form actions
    handleJobSubmit,
    resetForm
  };
};
