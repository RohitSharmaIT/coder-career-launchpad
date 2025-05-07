
import React from 'react';
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { BookedService } from "@/contexts/BookingContext";

interface RecentActivityProps {
  upcomingServices: BookedService[];
  setActiveTab: (tab: string) => void;
}

const RecentActivity = ({ upcomingServices, setActiveTab }: RecentActivityProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingServices.length > 0 ? (
            upcomingServices.slice(0, 3).map((service) => (
              <div key={service.id} className="flex items-start space-x-4 border-b pb-4 last:border-0">
                <div className="bg-brand-red/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-medium">{service.service} session booked</h4>
                  <p className="text-sm text-gray-600">
                    {format(new Date(service.date), "MMMM dd, yyyy 'at' h:mm a")}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-500">No recent activity</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => setActiveTab("services")}>
          View All Services
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecentActivity;
