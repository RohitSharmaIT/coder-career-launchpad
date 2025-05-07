
import React from 'react';
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { BookedService } from "@/contexts/BookingContext";

interface ServiceCardProps {
  service: BookedService;
  isPast?: boolean;
}

const ServiceCard = ({ service, isPast = false }: ServiceCardProps) => {
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
            <Button variant="outline">Reschedule</Button>
            <Button variant="destructive">Cancel</Button>
          </>
        ) : (
          <Button variant="outline" className="w-full">Book Again</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
