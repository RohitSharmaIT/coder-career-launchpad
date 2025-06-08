
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { useJobs } from '@/contexts/JobsContext';

export const useJobPostingForm = () => {
  const navigate = useNavigate();
  const { addJob } = useJobs();
  
  // Job form fields
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [salary, setSalary] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const [aboutCompany, setAboutCompany] = useState('');
  const [applyBy, setApplyBy] = useState('');
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setJobTitle('');
    setCompany('');
    setLocation('');
    setJobType('');
    setSalary('');
    setExperience('');
    setSkills('');
    setDescription('');
    setAboutCompany('');
    setApplyBy('');
  };

  // Handle job posting form submission
  const handleSubmitJob = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!jobTitle || !company || !location || !jobType || !description) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Parse skills into an array
    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);
    
    // Add job to the context
    addJob({
      title: jobTitle,
      company: company,
      location: location,
      type: jobType,
      salary: salary || undefined,
      experience: experience || undefined,
      skills: skillsArray.length > 0 ? skillsArray : undefined
    });
    
    setTimeout(() => {
      toast.success("Job posted successfully!", {
        description: "Your job has been published and is now visible to all users."
      });
      
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
    experience,
    setExperience,
    skills,
    setSkills,
    description,
    setDescription,
    aboutCompany,
    setAboutCompany,
    applyBy,
    setApplyBy,
    isSubmitting,
    // Form actions
    handleSubmitJob,
    resetForm
  };
};
