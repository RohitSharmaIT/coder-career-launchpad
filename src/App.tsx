import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import StudyMaterial from "./pages/StudyMaterial";
import StudyMaterialDetails from "./pages/StudyMaterialDetails";
import DsaTopicsPage from "./pages/DsaTopicsPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostJob from "./pages/PostJob";
import BookSlot from "./pages/BookSlot";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BookingProvider } from "./contexts/BookingContext";
import { JobsProvider } from "./contexts/JobsContext";
import { BlogsProvider } from "./contexts/BlogsContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

// The entire app must be wrapped in BrowserRouter for routing to work
const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <JobsProvider>
            <BlogsProvider>
              <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:id" element={<BlogPost />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/jobs/:id" element={<JobDetails />} />
                    <Route path="/study-material" element={<StudyMaterial />} />
                    <Route path="/study-material/:id" element={<StudyMaterialDetails />} />
                    <Route path="/study-material/dsa-topics" element={<DsaTopicsPage />} />
                    <Route 
                      path="/dashboard" 
                      element={
                        <ProtectedRoute>
                          <Dashboard />
                        </ProtectedRoute>
                      } 
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route 
                      path="/post-job" 
                      element={
                        <ProtectedRoute requireAdmin={true}>
                          <PostJob />
                        </ProtectedRoute>
                      } 
                    />
                    <Route path="/book-slot" element={<BookSlot />} />
                    <Route 
                      path="/admin" 
                      element={
                        <ProtectedRoute requireAdmin={true}>
                          <AdminPanel />
                        </ProtectedRoute>
                      } 
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Toaster />
                  <Sonner />
                </TooltipProvider>
              </QueryClientProvider>
            </BlogsProvider>
          </JobsProvider>
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
