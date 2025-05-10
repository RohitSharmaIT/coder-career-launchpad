import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';
import { useJobs } from '@/contexts/JobsContext';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addJob } = useJobs();
  
  // Job form state
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('full-time');
  const [salary, setSalary] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  
  // Blog form state
  const [blogTitle, setBlogTitle] = useState('');
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const [blogImagePreview, setBlogImagePreview] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBlogImage(file);
      setBlogImagePreview(URL.createObjectURL(file));
    }
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
  
  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!blogTitle || !blogContent || !blogCategory) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    
    if (!blogImage) {
      toast.error("Please upload a blog image");
      setIsSubmitting(false);
      return;
    }
    
    // In a real app with backend, this would be an API call
    console.log('POST to /api/admin/post-blog', {
      title: blogTitle,
      content: blogContent,
      category: blogCategory,
      image: blogImage.name // In real app, this would be the uploaded file
    });
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Blog post published successfully");
      // Reset form
      setBlogTitle('');
      setBlogImage(null);
      setBlogImagePreview('');
      setBlogContent('');
      setBlogCategory('');
      setIsSubmitting(false);
      
      // Navigate to blogs page
      navigate('/blogs');
    }, 1500);
  };
  
  return (
    <>
      <Navbar />
      
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <Button onClick={() => navigate('/dashboard')} variant="outline">
              Back to Dashboard
            </Button>
          </div>
          
          <Tabs defaultValue="post-job" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="post-job">Post a Job</TabsTrigger>
              <TabsTrigger value="write-blog">Write a Blog</TabsTrigger>
            </TabsList>
            
            {/* Post Job Form */}
            <TabsContent value="post-job">
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
            </TabsContent>
            
            {/* Write Blog Form */}
            <TabsContent value="write-blog">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-6">Write a New Blog Post</h2>
                
                <form onSubmit={handleBlogSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="blogTitle" className="required">Blog Title</Label>
                      <Input
                        id="blogTitle"
                        placeholder="Enter an attention-grabbing title"
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="blogCategory" className="required">Category</Label>
                      <select
                        id="blogCategory"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={blogCategory}
                        onChange={(e) => setBlogCategory(e.target.value)}
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="interviews">Interview Tips</option>
                        <option value="coding">Coding & Development</option>
                        <option value="career">Career Advice</option>
                        <option value="resume">Resume Building</option>
                        <option value="industry">Industry Insights</option>
                        <option value="company">Company Specific</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="blogImage" className="required">Featured Image</Label>
                      <div className="mt-1 flex items-center">
                        <label className="block w-full">
                          <span className="sr-only">Choose file</span>
                          <input
                            id="blogImage"
                            type="file"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-600"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                          />
                        </label>
                      </div>
                      
                      {blogImagePreview && (
                        <div className="mt-2">
                          <img 
                            src={blogImagePreview} 
                            alt="Blog preview" 
                            className="h-40 object-cover rounded-md"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="blogContent" className="required">Blog Content</Label>
                      <Textarea
                        id="blogContent"
                        placeholder="Write your blog post content here..."
                        rows={12}
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
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
                          Publishing Blog...
                        </span>
                      ) : (
                        "Publish Blog Post"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AdminPanel;
