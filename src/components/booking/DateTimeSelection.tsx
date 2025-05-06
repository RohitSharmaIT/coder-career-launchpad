
import React from 'react';
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface DateTimeSelectionProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  time: string;
  setTime: (time: string) => void;
  timeSlots: string[];
}

const DateTimeSelection = ({
  date,
  setDate,
  time,
  setTime,
  timeSlots
}: DateTimeSelectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Select Date & Time</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Label>Select Date</Label>
          <div className="mt-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => 
                    date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                    date > new Date(new Date().setDate(new Date().getDate() + 30))
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div>
          <Label>Select Time</Label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                type="button"
                variant={time === slot ? "default" : "outline"}
                className={time === slot ? "bg-brand-red hover:bg-red-600" : ""}
                onClick={() => setTime(slot)}
              >
                <Clock className="mr-2 h-4 w-4" />
                {slot}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
