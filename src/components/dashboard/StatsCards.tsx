
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StatsCardsProps {
  upcomingServicesCount: number;
  pastServicesCount: number;
  jobApplicationsCount: number;
}

const StatsCards = ({ 
  upcomingServicesCount,
  pastServicesCount,
  jobApplicationsCount
}: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">
            Upcoming Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{upcomingServicesCount}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">
            Completed Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{pastServicesCount}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">
            Job Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{jobApplicationsCount}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
