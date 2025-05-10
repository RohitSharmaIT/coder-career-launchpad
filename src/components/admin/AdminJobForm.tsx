
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useJobs } from '@/contexts/JobsContext';

const AdminJobForm = () => {
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
      // Reset form
      setJobTitle('');
      setCompany('');
      setLocation('');
      setJobType('full-time');
      setSalary('');
      setJobDescription('');
      setRequirements('');
      setIsSubmitting(false);
      
      // Navigate to jobs page to see the new job
      navigate('/jobs');
    }, 1500);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Post a New Job</h2>
      
      <form onSubmit={handleJobSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="jobTitle" className="required">Job Title</Label>
            <Input
              id="jobTitle"
              placeholder="e.g., Frontend Developer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="company" className="required">Company Name</Label>
            <Input
              id="company"
              placeholder="e.g., TechCorp Inc."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location" className="required">Location</Label>
              <Input
                id="location"
                placeholder="e.g., Bangalore, India"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="jobType" className="required">Job Type</Label>
              <select
                id="jobType"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                required
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
                <option value="remote">Remote</option>
              </select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="salary">Salary Range (Optional)</Label>
            <Input
              id="salary"
              placeholder="e.g., ₹8-12 LPA"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="jobDescription" className="required">Job Description</Label>
            <Textarea
              id="jobDescription"
              placeholder="Describe the role, responsibilities, and what the candidate will be doing..."
              rows={5}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="requirements" className="required">Requirements & Qualifications</Label>
            <Textarea
              id="requirements"
              placeholder="List the skills, experience, and qualifications required for this role (comma separated)..."
              rows={5}
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-brand-red hover:bg-red-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                Posting Job...
              </span>
            ) : (
              "Post Job"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminJobForm;
