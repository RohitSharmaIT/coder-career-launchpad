
import React from 'react';
import { User, FileText, CalendarIcon, Briefcase, BookIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface DashboardSidebarProps {
  user: { name?: string; email?: string; role?: string } | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  logout: () => void;
}

const DashboardSidebar = ({ user, activeTab, setActiveTab, logout }: DashboardSidebarProps) => {
  const navigate = useNavigate();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="md:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
            <User className="h-10 w-10 text-gray-500" />
          </div>
          <h2 className="font-bold text-xl">{user?.name || 'User'}</h2>
          <p className="text-gray-600 text-sm">{user?.email || 'user@example.com'}</p>
          {isAdmin && (
            <span className="inline-block bg-brand-red text-white text-xs px-2 py-1 rounded mt-2">
              Admin
            </span>
          )}
        </div>
        
        <div className="space-y-2">
          <Button
            variant="outline"
            className={`w-full justify-start ${activeTab === "overview" ? "border-brand-red text-brand-red" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <FileText className="mr-2 h-4 w-4" />
            Overview
          </Button>
          
          <Button
            variant="outline"
            className={`w-full justify-start ${activeTab === "services" ? "border-brand-red text-brand-red" : ""}`}
            onClick={() => setActiveTab("services")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Booked Services
          </Button>
          
          <Button
            variant="outline"
            className={`w-full justify-start ${activeTab === "applications" ? "border-brand-red text-brand-red" : ""}`}
            onClick={() => setActiveTab("applications")}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Job Applications
          </Button>
          
          {isAdmin && (
            <>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => navigate('/post-job')}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Post a Job
              </Button>
              
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => navigate('/admin')}
              >
                <BookIcon className="mr-2 h-4 w-4" />
                Write a Blog
              </Button>
            </>
          )}
          
          <Button
            variant="outline"
            className="w-full justify-start mt-4"
            onClick={logout}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
