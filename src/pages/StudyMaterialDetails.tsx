
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ChevronRight, Book, ArrowLeft } from "lucide-react";
import { categories, allMaterials } from "@/components/study-material/materialData";
import CategorySidebar from '@/components/study-material/CategorySidebar';
import PremiumCTA from '@/components/study-material/PremiumCTA';
import { Separator } from '@/components/ui/separator';

const StudyMaterialDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [material, setMaterial] = useState(allMaterials.find(m => m.id === Number(id)));
  const [relatedMaterials, setRelatedMaterials] = useState(allMaterials.filter(
    m => m.category === material?.category && m.id !== material?.id
  ).slice(0, 3));
  const [activeCategory, setActiveCategory] = useState(material?.category || 'All');

  useEffect(() => {
    // Update the material when the ID changes
    setMaterial(allMaterials.find(m => m.id === Number(id)));
  }, [id]);

  useEffect(() => {
    // Update related materials when the material changes
    if (material) {
      setActiveCategory(material.category);
      setRelatedMaterials(allMaterials.filter(
        m => m.category === material.category && m.id !== material.id
      ).slice(0, 3));
    }
  }, [material]);

  const handleDownload = (id: number, isPremium: boolean) => {
    // Check if user is logged in (implement based on your auth system)
    const isLoggedIn = false;
    const hasPremiumAccess = false;
    
    if (!isLoggedIn) {
      toast.error("Please log in to download study materials", {
        action: {
          label: "Login",
          onClick: () => {
            window.location.href = "/login";
          }
        }
      });
      return;
    }
    
    if (isPremium && !hasPremiumAccess) {
      toast.error("This is a premium resource", {
        description: "Upgrade to access premium study materials",
        action: {
          label: "Upgrade",
          onClick: () => {
            console.log("Redirect to upgrade page");
          }
        }
      });
      return;
    }
    
    // Create a dummy PDF download (you would replace this with a real download in production)
    const dummyPdfContent = "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL01lZGlhQm94WzAgMCA1OTUgODQyXS9Db250ZW50cyA0IDAgUj4+CmVuZG9iago0IDAgb2JqCjw8L0ZpbHRlci9GbGF0ZURlY29kZS9MZW5ndGggNTU+PnN0cmVhbQp4nDPQM1Qo5ypUMABCM0MjICWlYKRnZGAMpIxNTECUiYEmGhkbkaeJUC1dABYVBnYKZW5+DkEuAD5MBPEKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NCAwMDAwMCBuIAowMDAwMDAwMTE3IDAwMDAwIG4gCjAwMDAwMDAxOTYgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDUvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgozMTkKJSVFT0YK";
    
    const link = document.createElement('a');
    link.href = dummyPdfContent;
    link.download = `${material?.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Download started", {
      description: "Your file will download shortly"
    });
  };

  if (!material) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Material not found</h2>
            <Link to="/study-material">
              <Button>
                <ArrowLeft className="mr-2" size={16} />
                Back to Study Materials
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-brand-red">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/study-material" className="hover:text-brand-red">Study Material</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-900">{material.title}</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Categories Sidebar - Full Categories */}
            <CategorySidebar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              categories={categories} 
            />
            
            {/* Material Details */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg">
                <div className="h-64 relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={material.thumbnail} 
                    alt={material.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className={material.isPremium ? "bg-yellow-500" : "bg-green-500"}>
                    {material.isPremium ? "Premium" : "Free"}
                  </Badge>
                  <Badge variant="outline">{material.category}</Badge>
                  <Badge variant="outline">{material.type}</Badge>
                  <Badge variant="outline">{material.size}</Badge>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{material.title}</h1>
                
                <div className="text-gray-500 mb-6">
                  <p>Published on {material.date} • {material.downloadCount} downloads</p>
                </div>
                
                <div className="prose max-w-none mb-10">
                  <p className="mb-4">{material.description}</p>
                  <p className="mb-4">
                    This comprehensive study material is designed to help you master the concepts and skills required for 
                    successful career preparation in the technology sector. Whether you're preparing for a technical interview 
                    or looking to deepen your understanding of core computer science topics, this resource will provide you with 
                    the knowledge you need.
                  </p>
                  <p className="mb-4">
                    The material includes practical examples, theoretical explanations, and practice questions that cover 
                    all essential aspects of the subject. It's structured to gradually build your understanding from basic 
                    concepts to more advanced topics.
                  </p>
                </div>
                
                <Button 
                  onClick={() => handleDownload(material.id, material.isPremium)}
                  className="bg-brand-red hover:bg-red-700 text-white w-full md:w-auto"
                >
                  <Download size={16} className="mr-2" />
                  Download Material
                </Button>
              </div>
            </div>
            
            {/* Related Materials Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6">Related Materials</h3>
                
                {relatedMaterials.length > 0 ? (
                  <div className="space-y-4">
                    {relatedMaterials.map(related => (
                      <Link 
                        key={related.id} 
                        to={`/study-material/${related.id}`}
                        className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex gap-3 items-start">
                          <div className="h-12 w-12 rounded overflow-hidden shrink-0">
                            <img 
                              src={related.thumbnail} 
                              alt={related.title} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 line-clamp-1">{related.title}</h4>
                            <p className="text-xs text-gray-500">{related.date} • {related.type}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No related materials found.</p>
                )}
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {categories.slice(0, 5).map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <Link 
                        key={category.id} 
                        to={`/study-material?category=${category.name}`}
                        className="flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100"
                      >
                        <IconComponent size={16} className="mr-2" />
                        <span>{category.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <PremiumCTA />
      
      <Footer />
    </>
  );
};

export default StudyMaterialDetails;
