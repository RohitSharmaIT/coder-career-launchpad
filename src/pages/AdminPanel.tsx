
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminJobForm from "@/components/admin/AdminJobForm";
import AdminBlogForm from "@/components/admin/AdminBlogForm";
import AdminStudyMaterialForm from "@/components/admin/AdminStudyMaterialForm";
import AdminContentManager from "@/components/admin/AdminContentManager";
import AdminPanelHeader from "@/components/admin/AdminPanelHeader";

const AdminPanel = () => {
  return (
    <div className="pt-20">
      <Navbar />
      
      <div className="bg-gray-50">
        <div>
          <AdminPanelHeader />
          
          <Tabs defaultValue="post-job" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="post-job">Post a Job</TabsTrigger>
              <TabsTrigger value="write-blog">Write a Blog</TabsTrigger>
              <TabsTrigger value="post-study-material">Post Study Material</TabsTrigger>
              <TabsTrigger value="manage-content">Manage Content</TabsTrigger>
            </TabsList>
            
            <TabsContent value="post-job">
              <AdminJobForm />
            </TabsContent>
            
            <TabsContent value="write-blog">
              <AdminBlogForm />
            </TabsContent>
            
            <TabsContent value="post-study-material">
              <AdminStudyMaterialForm />
            </TabsContent>
            
            <TabsContent value="manage-content">
              <AdminContentManager />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminPanel;
