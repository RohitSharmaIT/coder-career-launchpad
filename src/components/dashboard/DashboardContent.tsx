
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatsCards from './StatsCards';
import ServicesTab from './ServicesTab';
import ApplicationsTab from './ApplicationsTab';
import ProfileEditForm from './ProfileEditForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, ArrowRight } from "lucide-react";

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
  const navigate = useNavigate();

  const renderUpgradeTab = () => (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Crown className="w-16 h-16 text-yellow-500" />
        </div>
        <CardTitle className="text-2xl">Upgrade to Premium</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <p className="text-gray-600 text-lg">
          Unlock exclusive study materials and downloads with Premium membership
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>Access all premium content</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>Unlimited downloads</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>Valid for 1 month</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>One-time payment ₹199</span>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={() => navigate('/upgrade-premium')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-8 py-6"
          size="lg"
        >
          Upgrade Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );

  switch (activeTab) {
    case "overview":
      return (
        <div className="md:col-span-3 space-y-6">
          <StatsCards 
            upcomingServices={upcomingServices}
            pastServices={pastServices}
            jobApplications={jobApplications}
          />
          {/* Recent activity or other overview content */}
        </div>
      );
    case "applications":
      return (
        <div className="md:col-span-3">
          <ApplicationsTab jobApplications={jobApplications} />
        </div>
      );
    case "services":
      return (
        <div className="md:col-span-3">
          <ServicesTab 
            upcomingServices={upcomingServices}
            pastServices={pastServices}
          />
        </div>
      );
    case "profile":
      return (
        <div className="md:col-span-3">
          <ProfileEditForm />
        </div>
      );
    case "upgrade":
      return (
        <div className="md:col-span-3">
          {renderUpgradeTab()}
        </div>
      );
    default:
      return (
        <div className="md:col-span-3 space-y-6">
          <StatsCards 
            upcomingServices={upcomingServices}
            pastServices={pastServices}
            jobApplications={jobApplications}
          />
        </div>
      );
  }
};

export default DashboardContent;
