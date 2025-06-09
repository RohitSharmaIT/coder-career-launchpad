
import React from 'react';
import StatsCards from './StatsCards';
import RecentActivity from './RecentActivity';
import ServicesTab from './ServicesTab';
import ApplicationsTab from './ApplicationsTab';
import ProfileEditForm from './ProfileEditForm';

interface DashboardContentProps {
  activeTab: string;
  upcomingServices: any[];
  pastServices: any[];
  jobApplications: any[];
  setActiveTab: (tab: string) => void;
}

const DashboardContent = ({ 
  activeTab, 
  upcomingServices, 
  pastServices, 
  jobApplications,
  setActiveTab 
}: DashboardContentProps) => {
  
  if (activeTab === "profile") {
    return (
      <div className="md:col-span-3">
        <ProfileEditForm onCancel={() => setActiveTab("overview")} />
      </div>
    );
  }
  
  if (activeTab === "services") {
    return (
      <div className="md:col-span-3">
        <ServicesTab upcomingServices={upcomingServices} pastServices={pastServices} />
      </div>
    );
  }
  
  if (activeTab === "applications") {
    return (
      <div className="md:col-span-3">
        <ApplicationsTab jobApplications={jobApplications} />
      </div>
    );
  }
  
  // Default overview tab
  return (
    <div className="md:col-span-3 space-y-8">
      <StatsCards 
        upcomingServicesCount={upcomingServices.length}
        pastServicesCount={pastServices.length}
        jobApplicationsCount={jobApplications.length}
      />
      <RecentActivity 
        upcomingServices={upcomingServices}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default DashboardContent;
