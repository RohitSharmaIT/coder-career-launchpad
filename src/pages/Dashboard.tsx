
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from '@/contexts/AuthContext';
import { useBooking } from '@/contexts/BookingContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardContent from '@/components/dashboard/DashboardContent';
import { toast } from "sonner";

// Mock data for job applications
const jobApplications = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "TechStart Inc.",
    appliedDate: new Date("2024-05-01"),
    status: "Applied"
  },
  {
    id: 2,
    position: "Full Stack Engineer",
    company: "InnovateCorp",
    appliedDate: new Date("2024-04-28"),
    status: "Interview Scheduled"
  },
  {
    id: 3,
    position: "React Developer",
    company: "WebSolutions",
    appliedDate: new Date("2024-04-15"),
    status: "Rejected"
  }
];

const Dashboard = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const { bookedServices } = useBooking();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Check for booking success message on mount
  useEffect(() => {
    const bookingSuccess = sessionStorage.getItem('bookingSuccess');
    if (bookingSuccess) {
      // Automatically switch to services tab to show the new booking
      setActiveTab("services");
      toast.success("Booking confirmed! Your new appointment appears in the 'Upcoming' tab below.");
      sessionStorage.removeItem('bookingSuccess');
    }
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // Filter services based on current date and time - improved logic
  const now = new Date();
  
  const upcomingServices = bookedServices.filter(service => {
    const serviceDate = new Date(service.date);
    return service.status === "scheduled" && serviceDate > now;
  });
  
  const pastServices = bookedServices.filter(service => {
    const serviceDate = new Date(service.date);
    return service.status === "completed" || serviceDate <= now;
  });
  
  console.log("Dashboard - Total booked services:", bookedServices.length);
  console.log("Dashboard - All services with dates:", bookedServices.map(s => ({
    id: s.id,
    service: s.service,
    date: s.date,
    dateString: new Date(s.date).toISOString(),
    status: s.status,
    isUpcoming: new Date(s.date) > now && s.status === "scheduled"
  })));
  console.log("Dashboard - Current time:", now.toISOString());
  console.log("Dashboard - Upcoming services:", upcomingServices.length);
  console.log("Dashboard - Past services:", pastServices.length);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <Navbar />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header Section */}
          <div className="mb-12 md:mb-16 animate-fade-in">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
                Welcome back, {user?.name || 'User'}!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Track your progress, manage your journey, and accelerate your career growth.
              </p>
              <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-primary font-medium">Online now</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Main Dashboard */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 animate-fade-in">
            {/* Enhanced Sidebar */}
            <div className="xl:col-span-1">
              <div className="sticky top-24">
                <DashboardSidebar 
                  user={user} 
                  activeTab={activeTab} 
                  setActiveTab={setActiveTab} 
                  logout={logout} 
                />
              </div>
            </div>
            
            {/* Enhanced Main Content */}
            <div className="xl:col-span-4">
              <div className="dashboard-card border-2 border-border/50 hover:border-primary/20 overflow-hidden min-h-[800px]">
                <div className="p-8 lg:p-12">
                  <DashboardContent 
                    activeTab={activeTab}
                    upcomingServices={upcomingServices}
                    pastServices={pastServices}
                    jobApplications={jobApplications}
                    setActiveTab={setActiveTab}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
