
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const PostJob = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Admin login form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
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
  
  // Simulate checking authentication status
  useEffect(() => {
    // In a real app, you would check if the user is authenticated and is an admin
    const checkAuth = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, user is not logged in as admin by default
      setIsLoggedIn(false);
      setIsAdmin(false);
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);
  
  // Handle admin login
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password) {
      toast.error("Please enter both username and password");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Check credentials (in a real app, this would be done on the server)
      if (username === 'apnewalecoders' && password === 'apne') {
        toast.success("Admin login successful");
        setIsLoggedIn(true);
        setIsAdmin(true);
      } else {
        toast.error("Invalid credentials. Only Apne Wale Coders team has access.");
      }
      
      setIsLoading(false);
    }, 1000);
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
    
    // Simulate API call
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
    }, 1500);
  };
  
  // If checking authentication status, show loading
  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Post a Job</h1>
            
            {/* Admin Login Form (if not logged in) */}
            {!isLoggedIn && (
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold">Admin Login</h2>
                  <p className="text-gray-600 mt-2">Only Apne Wale Coders team members can post jobs</p>
                </div>
                
                <form onSubmit={handleAdminLogin}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="username">Username</Label>
                      <Input 
                        id="username" 
                        placeholder="Enter admin username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password"
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-red hover:bg-red-600 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Job Posting Form (if logged in as admin) */}
            {isLoggedIn && isAdmin && (
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
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default PostJob;
