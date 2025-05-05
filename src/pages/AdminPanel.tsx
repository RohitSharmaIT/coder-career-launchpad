
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileImage, UploadCloud } from "lucide-react";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Admin login form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Blog form fields
  const [blogTitle, setBlogTitle] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  const [blogExcerpt, setBlogExcerpt] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const [blogImagePreview, setBlogImagePreview] = useState<string | null>(null);
  
  // Blog categories
  const categories = [
    'Interview',
    'Resume',
    'Career',
    'Learning',
    'Technology',
    'Programming',
    'Job Search'
  ];
  
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
  
  // Handle blog image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }
    
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size should be less than 2MB");
      return;
    }
    
    setBlogImage(file);
    
    // Create image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setBlogImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  // Handle blog form submission
  const handleSubmitBlog = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!blogTitle || !blogCategory || !blogExcerpt || !blogContent || !blogImage) {
      toast.error("Please fill in all required fields and upload an image");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Blog post published successfully!", {
        description: "Your blog post has been published and is now visible to all users."
      });
      
      // Reset form
      setBlogTitle('');
      setBlogCategory('');
      setBlogExcerpt('');
      setBlogContent('');
      setBlogImage(null);
      setBlogImagePreview(null);
      
      // Reset file input
      const fileInput = document.getElementById('blogImage') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Handle job form submission
  const handleSubmitJob = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to the dedicated post job page
    navigate('/post-job');
  };
  
  // If checking authentication status, show loading
  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto"></div>
          <p className="mt-4 text-lg">Loading admin panel...</p>
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>
            
            {/* Admin Login Form (if not logged in) */}
            {!isLoggedIn && (
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold">Admin Login</h2>
                  <p className="text-gray-600 mt-2">Only Apne Wale Coders team members can access the admin panel</p>
                </div>
                
                <form onSubmit={handleAdminLogin}>
                  <div className="space-y-4 max-w-md mx-auto">
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
            
            {/* Admin Panel (if logged in as admin) */}
            {isLoggedIn && isAdmin && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-6">Welcome, Admin</h2>
                  
                  <Tabs defaultValue="postBlog" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="postBlog">Post a Blog</TabsTrigger>
                      <TabsTrigger value="postJob">Post a Job</TabsTrigger>
                    </TabsList>
                    
                    {/* Post Blog Tab */}
                    <TabsContent value="postBlog">
                      <form onSubmit={handleSubmitBlog}>
                        <div className="space-y-6">
                          {/* Blog Title */}
                          <div>
                            <Label htmlFor="blogTitle" className="required">Blog Title</Label>
                            <Input 
                              id="blogTitle" 
                              placeholder="Enter blog title" 
                              value={blogTitle}
                              onChange={(e) => setBlogTitle(e.target.value)}
                              required
                            />
                          </div>
                          
                          {/* Blog Category */}
                          <div>
                            <Label htmlFor="blogCategory" className="required">Category</Label>
                            <select 
                              id="blogCategory" 
                              className="w-full rounded-md border border-gray-300 py-2 px-3"
                              value={blogCategory}
                              onChange={(e) => setBlogCategory(e.target.value)}
                              required
                            >
                              <option value="">Select Category</option>
                              {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                              ))}
                            </select>
                          </div>
                          
                          {/* Blog Excerpt */}
                          <div>
                            <Label htmlFor="blogExcerpt" className="required">Excerpt</Label>
                            <Textarea 
                              id="blogExcerpt" 
                              placeholder="Write a short summary of the blog post" 
                              className="resize-none"
                              rows={3}
                              value={blogExcerpt}
                              onChange={(e) => setBlogExcerpt(e.target.value)}
                              required
                            />
                          </div>
                          
                          {/* Blog Content */}
                          <div>
                            <Label htmlFor="blogContent" className="required">Content</Label>
                            <Textarea 
                              id="blogContent" 
                              placeholder="Write your blog content here..." 
                              className="resize-none"
                              rows={12}
                              value={blogContent}
                              onChange={(e) => setBlogContent(e.target.value)}
                              required
                            />
                            <p className="text-xs text-gray-500 mt-2">
                              You can use basic HTML for formatting: &lt;h2&gt;, &lt;h3&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;p&gt;, &lt;code&gt;, etc.
                            </p>
                          </div>
                          
                          {/* Blog Image Upload */}
                          <div>
                            <Label htmlFor="blogImage" className="required">Featured Image</Label>
                            <div className="mt-2">
                              <label 
                                htmlFor="blogImage" 
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                              >
                                {blogImagePreview ? (
                                  <div className="w-full h-full relative">
                                    <img 
                                      src={blogImagePreview} 
                                      alt="Preview" 
                                      className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                      <p className="text-white font-medium">Click to change image</p>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center justify-center">
                                    <FileImage className="w-8 h-8 text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-600">Click to upload image</p>
                                    <p className="text-xs text-gray-500">(Max size: 2MB)</p>
                                  </div>
                                )}
                                <input 
                                  id="blogImage" 
                                  type="file" 
                                  accept="image/*" 
                                  className="hidden" 
                                  onChange={handleImageChange}
                                  required
                                />
                              </label>
                            </div>
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full bg-brand-red hover:bg-red-600 text-white"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <UploadCloud className="mr-2 h-4 w-4 animate-bounce" />
                                Publishing...
                              </>
                            ) : (
                              "Publish Blog Post"
                            )}
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                    
                    {/* Post Job Tab */}
                    <TabsContent value="postJob">
                      <div className="text-center py-8">
                        <h3 className="text-lg font-bold mb-4">Post a New Job</h3>
                        <p className="text-gray-600 mb-6">
                          Use our dedicated job posting form to create and publish new job listings.
                        </p>
                        <Button 
                          onClick={handleSubmitJob}
                          className="bg-brand-red hover:bg-red-600 text-white"
                        >
                          Go to Job Posting Form
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AdminPanel;
