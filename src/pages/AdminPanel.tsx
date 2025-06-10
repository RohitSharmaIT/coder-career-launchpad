
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminJobForm from "@/components/admin/AdminJobForm";
import AdminBlogForm from "@/components/admin/AdminBlogForm";
import AdminStudyMaterialForm from "@/components/admin/AdminStudyMaterialForm";
import AdminPanelHeader from "@/components/admin/AdminPanelHeader";

const AdminPanel = () => {
  return (
    <div className="pt-20">
      <Navbar />
      
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <AdminPanelHeader />
          
          <Tabs defaultValue="post-job" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="post-job">Post a Job</TabsTrigger>
              <TabsTrigger value="write-blog">Write a Blog</TabsTrigger>
              <TabsTrigger value="post-study-material">Post Study Material</TabsTrigger>
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
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminPanel;
