
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8 md:mb-12 animate-fade-in">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Welcome back, {user?.name || 'User'}!
              </h1>
              <p className="text-lg text-gray-600">
                Here's an overview of your career journey and activities.
              </p>
            </div>
          </div>
          
          {/* Main Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 animate-fade-in">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <DashboardSidebar 
                  user={user} 
                  activeTab={activeTab} 
                  setActiveTab={setActiveTab} 
                  logout={logout} 
                />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden min-h-[600px]">
                <div className="p-6 lg:p-8">
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
