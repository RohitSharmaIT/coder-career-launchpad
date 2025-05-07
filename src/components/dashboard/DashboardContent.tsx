
import React from 'react';
import { BookedService } from "@/contexts/BookingContext";
import StatsCards from './StatsCards';
import RecentActivity from './RecentActivity';
import ServicesTab from './ServicesTab';
import ApplicationsTab from './ApplicationsTab';

// Define the job application type
interface JobApplication {
  id: number;
  position: string;
  company: string;
  appliedDate: Date;
  status: string;
}

interface DashboardContentProps {
  activeTab: string;
  upcomingServices: BookedService[];
  pastServices: BookedService[];
  jobApplications: JobApplication[];
  setActiveTab: (tab: string) => void;
}

const DashboardContent = ({ 
  activeTab, 
  upcomingServices, 
  pastServices, 
  jobApplications,
  setActiveTab 
}: DashboardContentProps) => {
  return (
    <div className="md:col-span-3">
      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <StatsCards 
            upcomingServicesCount={upcomingServices.length}
            pastServicesCount={pastServices.length}
            jobApplicationsCount={jobApplications.length}
          />
          
          {/* Recent Activity */}
          <RecentActivity 
            upcomingServices={upcomingServices} 
            setActiveTab={setActiveTab} 
          />
        </div>
      )}
      
      {/* Services Tab */}
      {activeTab === "services" && (
        <ServicesTab 
          upcomingServices={upcomingServices} 
          pastServices={pastServices} 
        />
      )}
      
      {/* Applications Tab */}
      {activeTab === "applications" && (
        <ApplicationsTab jobApplications={jobApplications} />
      )}
    </div>
  );
};

export default DashboardContent;
