
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from './ServiceCard';
import { BookedService } from "@/contexts/BookingContext";

interface ServicesTabProps {
  upcomingServices: BookedService[];
  pastServices: BookedService[];
}

const ServicesTab = ({ upcomingServices, pastServices }: ServicesTabProps) => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="mt-6">
          {upcomingServices.length > 0 ? (
            <div className="space-y-4">
              {upcomingServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">No upcoming services</h3>
              <p className="text-gray-600 mb-4">You don't have any upcoming service appointments.</p>
              <Link to="/services">
                <Button className="bg-brand-red hover:bg-red-600 text-white">
                  Book a Service
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="mt-6">
          {pastServices.length > 0 ? (
            <div className="space-y-4">
              {pastServices.map((service) => (
                <ServiceCard key={service.id} service={service} isPast={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">No past services</h3>
              <p className="text-gray-600 mb-4">You haven't booked any services yet.</p>
              <Link to="/services">
                <Button className="bg-brand-red hover:bg-red-600 text-white">
                  Book a Service
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServicesTab;
