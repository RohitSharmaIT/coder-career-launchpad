
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminLoginForm from '@/components/admin/AdminLoginForm';
import JobPostingForm from '@/components/admin/JobPostingForm';

const PostJob = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
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
  
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsAdmin(true);
  };
  
  // If checking authentication status, show loading
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8">Post a Job</h1>
              
              {/* Admin Login Form (if not logged in) */}
              {!isLoggedIn && (
                <AdminLoginForm 
                  onLoginSuccess={handleLoginSuccess}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              )}
              
              {/* Job Posting Form (if logged in as admin) */}
              {isLoggedIn && isAdmin && (
                <JobPostingForm />
              )}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default PostJob;
