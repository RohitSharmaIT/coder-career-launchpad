
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock, ArrowRight, CreditCard, Check } from "lucide-react";
import { toast } from "sonner";

const BookSlot = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form state
  const [service, setService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  
  // Available time slots
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];
  
  // Service options
  const services = [
    {
      id: "resume",
      title: "Resume Building",
      price: "₹999",
      description: "Get your resume crafted by industry experts to highlight your strengths"
    },
    {
      id: "webdev",
      title: "Web Design & Development",
      price: "₹4999",
      description: "Custom website development tailored to your professional needs"
    },
    {
      id: "interview",
      title: "Mock Interview",
      price: "₹1499",
      description: "Practice with industry experts in realistic interview scenarios"
    },
    {
      id: "assessment",
      title: "Company Assessment Preparation",
      price: "₹1299",
      description: "Prepare for specific company assessments and tests"
    },
    {
      id: "guidance",
      title: "Career Guidance",
      price: "₹899",
      description: "Get personalized advice on career paths and skill development"
    },
    {
      id: "strategy",
      title: "Career Strategy & Projects",
      price: "₹2499",
      description: "Develop a comprehensive career strategy with portfolio projects"
    },
    {
      id: "projects",
      title: "Take-home Projects",
      price: "₹1999",
      description: "Guidance and review for take-home coding challenges"
    }
  ];
  
  // Get pricing based on selected service
  const getServicePrice = () => {
    const selectedService = services.find(s => s.id === service);
    return selectedService ? selectedService.price : "₹0";
  };
  
  // Dynamic fields based on selected service
  const getDynamicFields = () => {
    switch (service) {
      case 'resume':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentResume">Current Resume Link (if any)</Label>
              <Input 
                id="currentResume" 
                placeholder="Google Drive or Dropbox link" 
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="targetRole">Target Role</Label>
              <Input 
                id="targetRole" 
                placeholder="E.g., Frontend Developer, Data Analyst" 
              />
            </div>
          </div>
        );
      
      case 'interview':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="interviewType">Interview Type</Label>
              <select 
                id="interviewType" 
                className="w-full rounded-md border border-gray-300 py-2 px-3"
              >
                <option value="">Select Interview Type</option>
                <option value="technical">Technical Interview</option>
                <option value="hr">HR Interview</option>
                <option value="behavioral">Behavioral Interview</option>
                <option value="system-design">System Design Interview</option>
              </select>
            </div>
            <div>
              <Label htmlFor="targetCompany">Target Company (Optional)</Label>
              <Input id="targetCompany" placeholder="E.g., Google, Microsoft, etc." />
            </div>
          </div>
        );
      
      case 'assessment':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="E.g., TCS, Infosys, etc." />
            </div>
            <div>
              <Label htmlFor="examPattern">Exam Pattern (if known)</Label>
              <Textarea 
                id="examPattern" 
                placeholder="Describe the assessment format"
                className="resize-none"
                rows={3}
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  // Simulate checking authentication status
  useEffect(() => {
    // In a real app, you would check if the user is authenticated
    const checkAuth = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, let's assume user is not logged in
      setIsLoggedIn(false);
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);
  
  // Handle next step
  const handleNextStep = () => {
    // Validation for each step
    if (currentStep === 1) {
      if (!service) {
        toast.error("Please select a service");
        return;
      }
    } else if (currentStep === 2) {
      if (!name || !email || !phone) {
        toast.error("Please fill in all required fields");
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return;
      }
      
      // Basic phone validation
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        toast.error("Please enter a valid 10-digit phone number");
        return;
      }
    } else if (currentStep === 3) {
      if (!date || !time) {
        toast.error("Please select both date and time");
        return;
      }
    }
    
    // Proceed to next step
    setCurrentStep(currentStep + 1);
    
    // If not logged in and moving to final step, redirect to login
    if (currentStep === 3 && !isLoggedIn) {
      toast.error("Please log in to complete your booking", {
        action: {
          label: "Login",
          onClick: () => navigate("/login")
        }
      });
      return;
    }
  };
  
  // Handle back step
  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  // Handle booking submission
  const handleSubmitBooking = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your booking has been confirmed!", {
        description: "You will receive a confirmation email shortly."
      });
      
      // Redirect to dashboard
      navigate("/dashboard");
    }, 2000);
  };
  
  // Render service selection step
  const renderServiceSelectionStep = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold mb-4">Select a Service</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((item) => (
            <div 
              key={item.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                service === item.id 
                  ? 'border-brand-red bg-red-50' 
                  : 'border-gray-200 hover:border-brand-red'
              }`}
              onClick={() => setService(item.id)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
                <div className="text-brand-red font-bold">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Render information collection step
  const renderInformationStep = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold mb-4">Your Information</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="required">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="required">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="required">Phone Number</Label>
            <Input 
              id="phone" 
              placeholder="1234567890" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          
          {getDynamicFields()}
          
          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea 
              id="notes" 
              placeholder="Any specific requirements or questions" 
              className="resize-none"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  };
  
  // Render date and time selection step
  const renderDateTimeStep = () => {
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
                    className="pointer-events-auto"
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
  
  // Render payment step
  const renderPaymentStep = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold mb-4">Booking Summary & Payment</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Service:</span>
              <span>{services.find(s => s.id === service)?.title}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium">Date:</span>
              <span>{date ? format(date, "PPP") : ""}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium">Time:</span>
              <span>{time}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>{name}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{email}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium">Phone:</span>
              <span>{phone}</span>
            </div>
            
            {notes && (
              <div>
                <span className="font-medium">Additional Notes:</span>
                <p className="mt-1 text-gray-600">{notes}</p>
              </div>
            )}
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Amount:</span>
                <span className="text-brand-red">{getServicePrice()}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-bold">Payment Method</h3>
          
          <div className="border rounded-lg p-4 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="razorpay"
                  name="payment-method"
                  type="radio"
                  className="h-4 w-4 text-brand-red focus:ring-brand-red"
                  defaultChecked
                />
                <label htmlFor="razorpay" className="ml-3 font-medium">
                  Pay with Razorpay
                </label>
              </div>
              <img 
                src="https://razorpay.com/blog-content/uploads/2020/10/rzp-glyph-positive.png" 
                alt="Razorpay" 
                className="h-6" 
              />
            </div>
          </div>
          
          <div className="border rounded-lg p-4 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="card"
                  name="payment-method"
                  type="radio"
                  className="h-4 w-4 text-brand-red focus:ring-brand-red"
                />
                <label htmlFor="card" className="ml-3 font-medium">
                  Credit/Debit Card
                </label>
              </div>
              <CreditCard className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="flex items-start space-x-2 mt-6">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 mt-1 text-brand-red focus:ring-brand-red"
            required
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-brand-red hover:underline">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-brand-red hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
      </div>
    );
  };
  
  // Render confirmation step
  const renderConfirmationStep = () => {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        
        <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
        
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you for booking with Apne Wale Coders. We've sent a confirmation email to {email} with all the details.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto text-left">
          <h3 className="font-bold mb-4">Booking Details</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-medium">{services.find(s => s.id === service)?.title}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time:</span>
              <span className="font-medium">{date ? format(date, "PPP") : ""} at {time}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Booking ID:</span>
              <span className="font-medium">AWC{Math.floor(10000 + Math.random() * 90000)}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <Button
            className="bg-brand-red hover:bg-red-600 text-white"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  };
  
  // Render steps based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderServiceSelectionStep();
      case 2:
        return renderInformationStep();
      case 3:
        return renderDateTimeStep();
      case 4:
        return renderPaymentStep();
      case 5:
        return renderConfirmationStep();
      default:
        return null;
    }
  };
  
  // Render step indicator
  const renderStepIndicator = () => {
    const steps = ["Service", "Information", "Date & Time", "Payment", "Confirmation"];
    
    return (
      <div className="mb-8">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep > index + 1
                    ? "bg-green-500 text-white"
                    : currentStep === index + 1
                    ? "bg-brand-red text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > index + 1 ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              
              <span
                className={`hidden sm:block ml-2 text-sm ${
                  currentStep === index + 1 ? "font-bold" : "text-gray-600"
                }`}
              >
                {step}
              </span>
              
              {index < steps.length - 1 && (
                <div
                  className={`w-10 sm:w-16 h-1 mx-2 ${
                    currentStep > index + 1 ? "bg-green-500" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // If checking authentication status, show loading
  if (isLoading && currentStep !== 5) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto"></div>
          <p className="mt-4 text-lg">Loading booking form...</p>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Book a Session</h1>
            
            {/* Step Indicator */}
            {renderStepIndicator()}
            
            {/* Step Content */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className={`flex ${currentStep > 1 ? 'justify-between' : 'justify-end'} mt-8`}>
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBackStep}
                    >
                      Back
                    </Button>
                  )}
                  
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      className="bg-brand-red hover:bg-red-600 text-white"
                      onClick={handleNextStep}
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      className="bg-brand-red hover:bg-red-600 text-white"
                      onClick={handleSubmitBooking}
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Confirm & Pay"}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default BookSlot;
