
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from '@/contexts/AuthContext';
import { BookingProvider } from '@/contexts/BookingContext';
import { BlogsProvider } from '@/contexts/BlogsContext';
import { StudyMaterialsProvider } from '@/contexts/StudyMaterialsContext';
import { CategoriesProvider } from '@/contexts/CategoriesContext';
import { JobsProvider } from '@/contexts/JobsContext';
import { SavedJobsProvider } from '@/contexts/SavedJobsContext';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import BookSlot from "./pages/BookSlot";
import StudyMaterial from "./pages/StudyMaterial";
import StudyMaterialDetails from "./pages/StudyMaterialDetails";
import StudyMaterialCategories from "./pages/StudyMaterialCategories";
import StudyMaterialCategory from "./pages/StudyMaterialCategory";
import DsaTopicsPage from "./pages/DsaTopicsPage";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import AdminPanel from "./pages/AdminPanel";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UpgradePremium from "./pages/UpgradePremium";
import UpgradeSimple from "./pages/UpgradeSimple";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <BookingProvider>
            <BlogsProvider>
              <StudyMaterialsProvider>
                <CategoriesProvider>
                  <JobsProvider>
                    <SavedJobsProvider>
                      <Toaster />
                      <BrowserRouter>
                        <Routes>
                          <Route path="/" element={<Index />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/services" element={<Services />} />
                          <Route path="/book-slot" element={<BookSlot />} />
                          <Route path="/study-material" element={<StudyMaterial />} />
                          <Route path="/study-material/:id" element={<StudyMaterialDetails />} />
                          <Route path="/study-material/categories" element={<StudyMaterialCategories />} />
                          <Route path="/study-material/category/:category" element={<StudyMaterialCategory />} />
                          <Route path="/study-material/dsa-topics" element={<DsaTopicsPage />} />
                          <Route path="/jobs" element={<Jobs />} />
                          <Route path="/jobs/:id" element={<JobDetails />} />
                          <Route path="/post-job" element={<PostJob />} />
                          <Route path="/admin" element={<AdminPanel />} />
                          <Route path="/blogs" element={<Blogs />} />
                          <Route path="/blogs/:id" element={<BlogPost />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/signup" element={<Signup />} />
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/upgrade-premium" element={<UpgradePremium />} />
                          <Route path="/upgrade-simple" element={<UpgradeSimple />} />
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </BrowserRouter>
                    </SavedJobsProvider>
                  </JobsProvider>
                </CategoriesProvider>
              </StudyMaterialsProvider>
            </BlogsProvider>
          </BookingProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
