
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminJobForm from "@/components/admin/AdminJobForm";
import AdminBlogForm from "@/components/admin/AdminBlogForm";
import AdminPanelHeader from "@/components/admin/AdminPanelHeader";

const AdminPanel = () => {
  return (
    <>
      <Navbar />
      
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <AdminPanelHeader />
          
          <Tabs defaultValue="post-job" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="post-job">Post a Job</TabsTrigger>
              <TabsTrigger value="write-blog">Write a Blog</TabsTrigger>
            </TabsList>
            
            <TabsContent value="post-job">
              <AdminJobForm />
            </TabsContent>
            
            <TabsContent value="write-blog">
              <AdminBlogForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AdminPanel;
