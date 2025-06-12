
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { TooltipProvider } from "@/components/ui/tooltip"

import Index from './pages/Index';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import StudyMaterial from './pages/StudyMaterial';
import DsaTopicsPage from './pages/DsaTopicsPage';
import StudyMaterialCategories from './pages/StudyMaterialCategories';
import StudyMaterialDetails from './pages/StudyMaterialDetails';
import BookSlot from './pages/BookSlot';
import PostJob from './pages/PostJob';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';

import { AuthProvider } from './contexts/AuthContext';
import { JobsProvider } from './contexts/JobsContext';
import { BlogsProvider } from './contexts/BlogsContext';
import { StudyMaterialsProvider } from './contexts/StudyMaterialsContext';
import { BookingProvider } from './contexts/BookingContext';
import { CategoriesProvider } from "@/contexts/CategoriesContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <JobsProvider>
            <BlogsProvider>
              <StudyMaterialsProvider>
                <BookingProvider>
                  <CategoriesProvider>
                    <Toaster />
                    <TooltipProvider>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/jobs" element={<Jobs />} />
                        <Route path="/jobs/:id" element={<JobDetails />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/blogs/:id" element={<BlogPost />} />
                        <Route path="/study-material" element={<StudyMaterial />} />
                        <Route path="/study-material/:id" element={<StudyMaterialDetails />} />
                        <Route path="/study-material/dsa-topics" element={<DsaTopicsPage />} />
                        <Route path="/study-material/categories" element={<StudyMaterialCategories />} />
                        <Route path="/book-a-consultation" element={<BookSlot />} />
                        <Route path="/post-job" element={<PostJob />} />
                        <Route path="/admin-panel" element={<AdminPanel />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </TooltipProvider>
                  </CategoriesProvider>
                </BookingProvider>
              </StudyMaterialsProvider>
            </BlogsProvider>
          </JobsProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
