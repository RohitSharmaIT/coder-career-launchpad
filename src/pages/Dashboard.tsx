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
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red"></div>
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
    <div className="pt-20">
      <Navbar />
      
      <div className="bg-gray-50">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name || 'User'}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Sidebar */}
          <DashboardSidebar 
            user={user} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            logout={logout} 
          />
          
          {/* Main Content */}
          <DashboardContent 
            activeTab={activeTab}
            upcomingServices={upcomingServices}
            pastServices={pastServices}
            jobApplications={jobApplications}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
