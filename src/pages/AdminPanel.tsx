
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminJobForm from "@/components/admin/AdminJobForm";
import AdminBlogForm from "@/components/admin/AdminBlogForm";
import AdminStudyMaterialForm from "@/components/admin/AdminStudyMaterialForm";
import AdminContentManager from "@/components/admin/AdminContentManager";
import AdminPanelHeader from "@/components/admin/AdminPanelHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FileText, BookOpen, Settings } from "lucide-react";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8 md:mb-12 animate-fade-in">
            <AdminPanelHeader />
          </div>
          
          {/* Main Content */}
          <div className="max-w-7xl mx-auto animate-fade-in">
            <Tabs defaultValue="post-job" className="w-full">
              {/* Tab Navigation */}
              <div className="mb-8">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg">
                  <TabsTrigger 
                    value="post-job" 
                    className="flex items-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 data-[state=active]:bg-brand-red data-[state=active]:text-white data-[state=active]:shadow-md hover:bg-gray-50"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span className="hidden sm:inline">Post Job</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="write-blog" 
                    className="flex items-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 data-[state=active]:bg-brand-red data-[state=active]:text-white data-[state=active]:shadow-md hover:bg-gray-50"
                  >
                    <FileText className="h-4 w-4" />
                    <span className="hidden sm:inline">Write Blog</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="post-study-material" 
                    className="flex items-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 data-[state=active]:bg-brand-red data-[state=active]:text-white data-[state=active]:shadow-md hover:bg-gray-50"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden sm:inline">Study Material</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="manage-content" 
                    className="flex items-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 data-[state=active]:bg-brand-red data-[state=active]:text-white data-[state=active]:shadow-md hover:bg-gray-50"
                  >
                    <Settings className="h-4 w-4" />
                    <span className="hidden sm:inline">Manage</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Tab Content */}
              <div className="space-y-6">
                <TabsContent value="post-job" className="mt-0 animate-fade-in">
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                      <AdminJobForm />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="write-blog" className="mt-0 animate-fade-in">
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                      <AdminBlogForm />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="post-study-material" className="mt-0 animate-fade-in">
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                      <AdminStudyMaterialForm />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="manage-content" className="mt-0 animate-fade-in">
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                      <AdminContentManager />
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminPanel;
