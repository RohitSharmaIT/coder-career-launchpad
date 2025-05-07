
import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CalendarIcon, Clock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface DateTimeSelectionProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  time: string;
  setTime: (time: string) => void;
  timeSlots: string[];
  setIsValid?: (isValid: boolean) => void;
}

const DateTimeSelection = ({
  date,
  setDate,
  time,
  setTime,
  timeSlots,
  setIsValid
}: DateTimeSelectionProps) => {
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const validateDateTime = () => {
    if (!date) {
      setError("Please select a date");
      if (setIsValid) setIsValid(false);
      return false;
    }
    
    if (!time) {
      setError("Please select a time slot");
      if (setIsValid) setIsValid(false);
      return false;
    }
    
    setError(null);
    if (setIsValid) setIsValid(true);
    return true;
  };

  useEffect(() => {
    validateDateTime();
  }, [date, time]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Select Date & Time</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Label>Select Date</Label>
          <div className="mt-2">
            {isMobile ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                      !date && error && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[500px] pt-12">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                    }}
                    initialFocus
                    disabled={(date) => 
                      date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                      date > new Date(new Date().setDate(new Date().getDate() + 30))
                    }
                    className="mx-auto"
                  />
                </SheetContent>
              </Sheet>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                      !date && error && "border-red-500"
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
            )}
          </div>
        </div>
        
        <div>
          <Label>Select Time</Label>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                type="button"
                variant={time === slot ? "default" : "outline"}
                className={cn(
                  "h-auto py-3",
                  time === slot ? "bg-brand-red hover:bg-red-600" : "",
                  !time && error ? "border-red-500" : ""
                )}
                onClick={() => setTime(slot)}
              >
                <Clock className="mr-2 h-4 w-4" />
                {slot}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4 mr-2" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default DateTimeSelection;
