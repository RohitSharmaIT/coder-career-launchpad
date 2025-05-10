
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useJobs } from '@/contexts/JobsContext';

const JobPostingForm = () => {
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
      
      // Reset form
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
      
      setIsSubmitting(false);
      
      // Navigate to jobs page to see the new job
      navigate('/jobs');
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-xl font-bold mb-6">Post a New Job</h2>
      
      <form onSubmit={handleSubmitJob}>
        <div className="space-y-6">
          {/* Basic Job Information */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              
              <div>
                <Label htmlFor="location" className="required">Location</Label>
                <Input 
                  id="location" 
                  placeholder="e.g., Bangalore, India or Remote" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="jobType" className="required">Job Type</Label>
                <select 
                  id="jobType" 
                  className="w-full rounded-md border border-gray-300 py-2 px-3"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  required
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="applyBy">Apply By (Optional)</Label>
                <Input 
                  id="applyBy" 
                  type="date"
                  value={applyBy}
                  onChange={(e) => setApplyBy(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salary">Salary Range (Optional)</Label>
                <Input 
                  id="salary" 
                  placeholder="e.g., ₹10-15 LPA" 
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="experience">Experience (Optional)</Label>
                <Input 
                  id="experience" 
                  placeholder="e.g., 2-4 years" 
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="skills">Required Skills (Optional)</Label>
              <Input 
                id="skills" 
                placeholder="e.g., React, JavaScript, TypeScript (comma separated)" 
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
          </div>
          
          {/* Job Description */}
          <div>
            <Label htmlFor="description" className="required">Job Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe the responsibilities, requirements, and benefits of the job..." 
              className="resize-none"
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <p className="text-xs text-gray-500 mt-2">
              You can use basic HTML for formatting: &lt;h3&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;p&gt;, etc.
            </p>
          </div>
          
          {/* About Company */}
          <div>
            <Label htmlFor="aboutCompany">About Company (Optional)</Label>
            <Textarea 
              id="aboutCompany" 
              placeholder="Provide some information about the company..." 
              className="resize-none"
              rows={4}
              value={aboutCompany}
              onChange={(e) => setAboutCompany(e.target.value)}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brand-red hover:bg-red-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting Job..." : "Post Job"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobPostingForm;
