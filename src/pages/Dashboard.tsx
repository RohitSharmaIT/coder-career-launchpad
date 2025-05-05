
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Calendar as CalendarIcon, CheckCircle, User, FileText, Briefcase } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from '@/contexts/AuthContext';

// Mock data for booked services
const bookedServices = [
  {
    id: 1,
    service: "Resume Building",
    date: new Date("2024-05-15T10:00:00"),
    status: "scheduled",
    notes: "Focus on highlighting my Java and Spring Boot experience"
  },
  {
    id: 2,
    service: "Mock Interview",
    date: new Date("2024-05-20T14:00:00"),
    status: "scheduled",
    notes: "Practice for Google technical interview"
  },
  {
    id: 3,
    service: "Resume Building",
    date: new Date("2024-04-10T11:00:00"),
    status: "completed",
    notes: "Resume was delivered and I got positive feedback"
  }
];

// Mock data for job applications
const jobApplications = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "TechStart Inc.",
    appliedDate: new Date("2024-05-01"),
    status: "Applied"
  },
  {
    id: 2,
    position: "Full Stack Engineer",
    company: "InnovateCorp",
    appliedDate: new Date("2024-04-28"),
    status: "Interview Scheduled"
  },
  {
    id: 3,
    position: "React Developer",
    company: "WebSolutions",
    appliedDate: new Date("2024-04-15"),
    status: "Rejected"
  }
];

const Dashboard = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  const upcomingServices = bookedServices.filter(
    service => service.status === "scheduled" && new Date(service.date) > new Date()
  );
  
  const pastServices = bookedServices.filter(
    service => service.status === "completed" || new Date(service.date) < new Date()
  );
  
  return (
    <>
      <Navbar />
      
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name || 'User'}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-gray-500" />
                  </div>
                  <h2 className="font-bold text-xl">{user?.name || 'User'}</h2>
                  <p className="text-gray-600 text-sm">{user?.email || 'user@example.com'}</p>
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
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={logout}
                  >
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-3">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">
                          Upcoming Services
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{upcomingServices.length}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">
                          Completed Services
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{pastServices.length}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">
                          Job Applications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{jobApplications.length}</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Recent Activity */}
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
                </div>
              )}
              
              {/* Services Tab */}
              {activeTab === "services" && (
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
                            <Card key={service.id}>
                              <CardHeader>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle>{service.service}</CardTitle>
                                    <CardDescription>
                                      Scheduled for {format(new Date(service.date), "MMMM dd, yyyy")}
                                    </CardDescription>
                                  </div>
                                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
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
                                <Button variant="outline">Reschedule</Button>
                                <Button variant="destructive">Cancel</Button>
                              </CardFooter>
                            </Card>
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
                            <Card key={service.id}>
                              <CardHeader>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle>{service.service}</CardTitle>
                                    <CardDescription>
                                      {format(new Date(service.date), "MMMM dd, yyyy")}
                                    </CardDescription>
                                  </div>
                                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
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
                              <CardFooter>
                                <Button variant="outline" className="w-full">Book Again</Button>
                              </CardFooter>
                            </Card>
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
              )}
              
              {/* Applications Tab */}
              {activeTab === "applications" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Job Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {jobApplications.length > 0 ? (
                        <div className="space-y-4">
                          {jobApplications.map((job) => (
                            <div key={job.id} className="border rounded-lg p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-bold">{job.position}</h3>
                                  <p className="text-gray-600">{job.company}</p>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  job.status === "Applied" ? "bg-blue-100 text-blue-800" :
                                  job.status === "Interview Scheduled" ? "bg-green-100 text-green-800" :
                                  "bg-red-100 text-red-800"
                                }`}>
                                  {job.status}
                                </div>
                              </div>
                              
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Applied on {format(new Date(job.appliedDate), "MMMM dd, yyyy")}</span>
                              </div>
                              
                              <div className="mt-4 flex space-x-2">
                                <Button variant="outline" size="sm">View Details</Button>
                                {job.status === "Interview Scheduled" && (
                                  <Button size="sm" className="bg-brand-red hover:bg-red-600 text-white">
                                    Prepare for Interview
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <h3 className="text-lg font-medium mb-2">No job applications yet</h3>
                          <p className="text-gray-600 mb-4">Start applying for jobs to track your applications here.</p>
                          <Link to="/jobs">
                            <Button className="bg-brand-red hover:bg-red-600 text-white">
                              Browse Jobs
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Dashboard;
