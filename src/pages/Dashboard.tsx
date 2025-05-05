
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, File, BookOpen, Check, X, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sample user data - in a real app, this would come from your authentication system
  const [userData, setUserData] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    profilePicture: "https://randomuser.me/api/portraits/men/32.jpg"
  });

  // Sample bookings data
  const [bookings, setBookings] = useState({
    upcoming: [
      {
        id: 1,
        service: "Mock Interview",
        date: "May 20, 2024",
        time: "10:00 AM",
        status: "confirmed",
        mentor: "Priya Singh",
        notes: "React and JavaScript focus"
      },
      {
        id: 2,
        service: "Resume Review",
        date: "May 25, 2024",
        time: "2:30 PM",
        status: "pending",
        mentor: "Aman Gupta",
        notes: "Looking for feedback on format and content"
      }
    ],
    past: [
      {
        id: 3,
        service: "Career Guidance",
        date: "April 15, 2024",
        time: "11:00 AM",
        status: "completed",
        mentor: "Neha Sharma",
        feedback: "Great session with actionable advice. Highly recommend!"
      },
      {
        id: 4,
        service: "Mock Interview",
        date: "March 30, 2024",
        time: "4:00 PM",
        status: "completed",
        mentor: "Rohit Verma",
        feedback: "Very helpful practice session. Received good feedback on areas to improve."
      },
      {
        id: 5,
        service: "Resume Review",
        date: "March 10, 2024",
        time: "1:00 PM",
        status: "completed",
        mentor: "Priya Singh",
        feedback: "Excellent suggestions that helped me land interviews at top companies."
      }
    ]
  });

  // Sample saved materials
  const [savedMaterials, setSavedMaterials] = useState([
    {
      id: 1,
      title: "Complete DSA Interview Preparation",
      type: "PDF",
      downloadedOn: "May 5, 2024"
    },
    {
      id: 2,
      title: "System Design Interview Guide",
      type: "PDF",
      downloadedOn: "April 20, 2024"
    },
    {
      id: 3,
      title: "TCS NQT Aptitude Questions",
      type: "PDF",
      downloadedOn: "April 15, 2024"
    }
  ]);

  // Sample saved jobs
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      location: "Bangalore, India",
      savedOn: "May 8, 2024"
    },
    {
      id: 2,
      title: "React Developer",
      company: "WebSolutions",
      location: "Remote",
      savedOn: "May 5, 2024"
    }
  ]);

  // Simulate checking authentication status
  useEffect(() => {
    // In a real app, you would check if the user is authenticated
    const checkAuth = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, let's assume user is logged in
      setIsLoggedIn(true);
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  // If not authenticated, redirect to login page
  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      toast.error("Please log in to access the dashboard");
      navigate("/login");
    }
  }, [isLoading, isLoggedIn, navigate]);

  // Handle logout
  const handleLogout = () => {
    // In a real app, you would call your logout API here
    toast.success("Logged out successfully");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Render loading state
  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto"></div>
          <p className="mt-4 text-lg">Loading your dashboard...</p>
        </div>
        <Footer />
      </>
    );
  }

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case 'pending':
        return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Pending</Badge>;
      case 'completed':
        return <Badge variant="outline" className="border-gray-500 text-gray-500">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <>
      <Navbar />
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* User Info Header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img 
                  src={userData.profilePicture} 
                  alt={userData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center md:text-left md:flex-grow">
                <h1 className="text-2xl font-bold mb-1">{userData.name}</h1>
                <p className="text-gray-600">{userData.email}</p>
              </div>
              
              <div className="flex gap-3">
                <Link to="/profile/edit">
                  <Button variant="outline">Edit Profile</Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  className="border-red-500 text-red-500 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="materials">Saved Materials</TabsTrigger>
              <TabsTrigger value="jobs">Saved Jobs</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>
            
            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-8">
              {/* Upcoming Bookings */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Upcoming Sessions</h2>
                  <Link to="/book-slot">
                    <Button className="bg-brand-red hover:bg-red-600 text-white">
                      Book New Session
                    </Button>
                  </Link>
                </div>
                
                {bookings.upcoming.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {bookings.upcoming.map((booking) => (
                      <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold">{booking.service}</h3>
                            {getStatusBadge(booking.status)}
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Calendar size={18} className="mr-2 text-brand-red" />
                              <span>{booking.date}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-600">
                              <Clock size={18} className="mr-2 text-brand-red" />
                              <span>{booking.time}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-600">
                              <svg className="w-5 h-5 mr-2 text-brand-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span>Mentor: {booking.mentor}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm border-t border-gray-100 pt-4">
                            <span className="font-semibold">Notes:</span> {booking.notes}
                          </p>
                          
                          <div className="mt-6 flex justify-end gap-3">
                            <Button variant="outline" className="text-brand-red border-brand-red hover:bg-red-50">
                              Reschedule
                            </Button>
                            
                            <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">No Upcoming Sessions</h3>
                    <p className="text-gray-600 mb-6">
                      You don't have any upcoming sessions scheduled. Book a new session to get started.
                    </p>
                    <Link to="/book-slot">
                      <Button className="bg-brand-red hover:bg-red-600 text-white">
                        Book a Session
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Past Bookings */}
              <div>
                <h2 className="text-xl font-bold mb-6">Past Sessions</h2>
                
                {bookings.past.length > 0 ? (
                  <div className="space-y-4">
                    {bookings.past.map((booking) => (
                      <div key={booking.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold">{booking.service}</h3>
                            {getStatusBadge(booking.status)}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Calendar size={18} className="mr-2 text-brand-red" />
                              <span>{booking.date}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-600">
                              <Clock size={18} className="mr-2 text-brand-red" />
                              <span>{booking.time}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-600">
                              <svg className="w-5 h-5 mr-2 text-brand-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span>Mentor: {booking.mentor}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 italic">"{booking.feedback}"</p>
                          </div>
                          
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" className="text-brand-red border-brand-red hover:bg-red-50">
                              Book Again
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">No Past Sessions</h3>
                    <p className="text-gray-600">
                      You don't have any past sessions. Once you complete a session, it will appear here.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Saved Materials Tab */}
            <TabsContent value="materials">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Saved Study Materials</h2>
                  <Link to="/study-material">
                    <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                      Browse More Materials
                    </Button>
                  </Link>
                </div>
                
                {savedMaterials.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedMaterials.map((material) => (
                      <div key={material.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-bold line-clamp-1">{material.title}</h3>
                            <Badge variant="outline">{material.type}</Badge>
                          </div>
                          
                          <div className="text-gray-600 text-sm mb-6">
                            Downloaded on {material.downloadedOn}
                          </div>
                          
                          <div className="flex justify-between">
                            <Button 
                              variant="outline" 
                              className="text-brand-red border-brand-red hover:bg-red-50"
                              onClick={() => toast.success("Downloading material...")}
                            >
                              <File size={18} className="mr-2" />
                              Download Again
                            </Button>
                            
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => {
                                setSavedMaterials(savedMaterials.filter(m => m.id !== material.id));
                                toast.success("Material removed from saved items");
                              }}
                            >
                              <X size={18} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">No Saved Materials</h3>
                    <p className="text-gray-600 mb-6">
                      You haven't saved any study materials yet. Browse our collection and download what interests you.
                    </p>
                    <Link to="/study-material">
                      <Button className="bg-brand-red hover:bg-red-600 text-white">
                        Browse Materials
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Saved Jobs Tab */}
            <TabsContent value="jobs">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Saved Jobs</h2>
                  <Link to="/jobs">
                    <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                      Browse More Jobs
                    </Button>
                  </Link>
                </div>
                
                {savedJobs.length > 0 ? (
                  <div className="space-y-4">
                    {savedJobs.map((job) => (
                      <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold mb-1">{job.title}</h3>
                            <p className="text-gray-700 mb-2">{job.company}</p>
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin size={16} className="mr-1" />
                              <span>{job.location}</span>
                              <span className="mx-2">•</span>
                              <span>Saved on {job.savedOn}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <Link to={`/jobs/${job.id}`}>
                              <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                                View Details
                              </Button>
                            </Link>
                            
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => {
                                setSavedJobs(savedJobs.filter(j => j.id !== job.id));
                                toast.success("Job removed from saved items");
                              }}
                            >
                              <X size={18} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">No Saved Jobs</h3>
                    <p className="text-gray-600 mb-6">
                      You haven't saved any jobs yet. Browse available positions and save those that interest you.
                    </p>
                    <Link to="/jobs">
                      <Button className="bg-brand-red hover:bg-red-600 text-white">
                        Browse Jobs
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Account Settings Tab */}
            <TabsContent value="settings">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                  
                  <div className="space-y-6 max-w-2xl">
                    {/* Personal Information */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" defaultValue={userData.name} />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue={userData.email} />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Add your phone number" />
                        </div>
                      </div>
                      <Button className="mt-4 bg-brand-red hover:bg-red-600 text-white">
                        Update Information
                      </Button>
                    </div>
                    
                    {/* Password Security */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-bold mb-4">Password & Security</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        <div>
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                      </div>
                      <Button className="mt-4 bg-brand-red hover:bg-red-600 text-white">
                        Change Password
                      </Button>
                    </div>
                    
                    {/* Notification Preferences */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-bold mb-4">Notification Preferences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-gray-600">Receive updates about your bookings and account</p>
                          </div>
                          <div className="flex items-center h-5">
                            <input
                              id="emailNotifications"
                              type="checkbox"
                              defaultChecked
                              className="focus:ring-brand-red h-4 w-4 text-brand-red border-gray-300 rounded"
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Job Alerts</p>
                            <p className="text-sm text-gray-600">Receive notifications about new job listings</p>
                          </div>
                          <div className="flex items-center h-5">
                            <input
                              id="jobAlerts"
                              type="checkbox"
                              defaultChecked
                              className="focus:ring-brand-red h-4 w-4 text-brand-red border-gray-300 rounded"
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Study Material Updates</p>
                            <p className="text-sm text-gray-600">Receive notifications about new study materials</p>
                          </div>
                          <div className="flex items-center h-5">
                            <input
                              id="materialAlerts"
                              type="checkbox"
                              defaultChecked
                              className="focus:ring-brand-red h-4 w-4 text-brand-red border-gray-300 rounded"
                            />
                          </div>
                        </div>
                      </div>
                      <Button className="mt-4 bg-brand-red hover:bg-red-600 text-white">
                        Save Preferences
                      </Button>
                    </div>
                    
                    {/* Delete Account */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-red-100">
                      <h3 className="text-lg font-bold mb-4 text-red-600">Delete Account</h3>
                      <p className="text-gray-600 mb-4">
                        Once you delete your account, all of your data will be permanently removed. This action cannot be undone.
                      </p>
                      <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Dashboard;
