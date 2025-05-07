
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from '@/contexts/AuthContext';
import { useBooking } from '@/contexts/BookingContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardContent from '@/components/dashboard/DashboardContent';

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
  
  const upcomingServices = bookedServices.filter(
    service => service.status === "scheduled" && new Date(service.date) > new Date()
  );
  
  const pastServices = bookedServices.filter(
    service => service.status === "completed" || new Date(service.date) < new Date()
  );
  
  return (
    <>
      <Navbar />
      
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name || 'User'}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
      </div>
      
      <Footer />
    </>
  );
};

export default Dashboard;
