
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
      
      <div className="pt-16 sm:pt-20 pb-16 sm:pb-20 mobile-padding">
        <div className="container mx-auto">
          {/* Enhanced Mobile-First Header Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
                Welcome back, {user?.name || 'User'}!
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto sm:mx-0">
                Track your progress, manage your journey, and accelerate your career growth.
              </p>
              <div className="flex items-center gap-2 mt-3 sm:mt-4 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-primary font-medium">Online now</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Mobile-Responsive Dashboard */}
          <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-12 animate-fade-in">
            {/* Mobile-Optimized Sidebar */}
            <div className="w-full xl:w-80 xl:flex-shrink-0 order-2 xl:order-1">
              <div className="xl:sticky xl:top-24">
                <DashboardSidebar 
                  user={user} 
                  activeTab={activeTab} 
                  setActiveTab={setActiveTab} 
                  logout={logout} 
                />
              </div>
            </div>
            
            {/* Mobile-Optimized Main Content */}
            <div className="flex-1 order-1 xl:order-2 min-w-0">
              <div className="dashboard-card border border-border/30 hover:border-primary/20 overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
                <div className="mobile-card-padding">
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
