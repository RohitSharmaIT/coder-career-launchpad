
import React from 'react';
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { BookedService, useBooking } from "@/contexts/BookingContext";
import { toast } from "sonner";

interface ServiceCardProps {
  service: BookedService;
  isPast?: boolean;
}

const ServiceCard = ({ service, isPast = false }: ServiceCardProps) => {
  const navigate = useNavigate();
  const { updateBookingStatus } = useBooking();

  const handleReschedule = () => {
    // Navigate to booking page with pre-selected service for rescheduling
    const serviceMapping: { [key: string]: string } = {
      "Resume Building": "resume",
      "Web Design & Development": "webdev",
      "Mock Interview": "interview",
      "Company Assessment Preparation": "assessment",
      "Career Guidance": "guidance",
      "Career Strategy & Projects": "strategy",
      "Take-home Projects": "projects"
    };
    
    const serviceId = serviceMapping[service.service] || "resume";
    navigate(`/book-slot?service=${serviceId}&reschedule=${service.id}`);
    toast.info("Redirecting to reschedule your appointment...");
  };

  const handleBookAgain = () => {
    // Navigate to booking page with the same service pre-selected
    const serviceMapping: { [key: string]: string } = {
      "Resume Building": "resume",
      "Web Design & Development": "webdev", 
      "Mock Interview": "interview",
      "Company Assessment Preparation": "assessment",
      "Career Guidance": "guidance",
      "Career Strategy & Projects": "strategy",
      "Take-home Projects": "projects"
    };
    
    const serviceId = serviceMapping[service.service] || "resume";
    navigate(`/book-slot?service=${serviceId}`);
    toast.success("Redirecting to book the same service again...");
  };

  const handleCancel = () => {
    updateBookingStatus(service.id, "cancelled");
    toast.success("Appointment cancelled successfully");
  };

  return (
    <Card key={service.id}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{service.service}</CardTitle>
            <CardDescription>
              {format(new Date(service.date), "MMMM dd, yyyy")}
            </CardDescription>
          </div>
          <div className={`${isPast ? 'bg-gray-100 text-gray-800' : 'bg-green-100 text-green-800'} px-3 py-1 rounded-full text-xs font-medium`}>
            {service.status}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-gray-500" />
            <span>{format(new Date(service.date), "EEEE, MMMM dd, yyyy")}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-gray-500" />
            <span>{format(new Date(service.date), "h:mm a")}</span>
          </div>
          {service.notes && (
            <div className="mt-2 text-sm text-gray-700">
              <p className="font-medium">Notes:</p>
              <p>{service.notes}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isPast ? (
          <>
            <Button variant="outline" onClick={handleReschedule}>
              Reschedule
            </Button>
            <Button variant="destructive" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <Button variant="outline" className="w-full" onClick={handleBookAgain}>
            Book Again
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
