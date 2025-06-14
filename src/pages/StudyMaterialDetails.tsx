import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { allMaterials } from "@/components/study-material/materialData";
import { categories } from "@/components/study-material/materialData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft, Plus, ChevronDown, ChevronUp, Lock } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useAuth } from "@/contexts/AuthContext";

const StudyMaterialDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const { isAuthenticated, isPremium } = useAuth();
  
  const material = allMaterials.find(m => m.id === parseInt(id || '0'));
  
  if (!material) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Material Not Found</h1>
            <Link to="/study-material" className="text-brand-red hover:underline">
              Back to Study Materials
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const canAccessPremiumContent = !material.isPremium || (isAuthenticated && isPremium());

  const handleDownload = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to download study materials", {
        action: {
          label: "Login",
          onClick: () => {
            navigate("/login");
          }
        }
      });
      return;
    }
    
    if (material.isPremium && !isPremium()) {
      toast.error("This is a premium resource", {
        description: "Upgrade to Premium to access exclusive content",
        action: {
          label: "Upgrade Now",
          onClick: () => {
            navigate("/upgrade-premium");
          }
        }
      });
      return;
    }

    const dummyPdfContent = "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL01lZGlhQm94WzAgMCA1OTUgODQyXS9Db250ZW50cyA0IDAgUj4+CmVuZG9iago0IDAgb2JqCjw8L0ZpbHRlci9GbGF0ZURlY29kZS9MZW5ndGggNTU+PnN0cmVhbQp4nDPQM1Qo5ypUMABCM0MjICWlYKRnZGAMpIxNTECUiYEmGhkbkaeJUC1dABYVBnYKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NCAwMDAwMCBuIAowMDAwMDAwMTE3IDAwMDAwIG4gCjAwMDAwMDAxOTYgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDUvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgozMTkKJSVFT0YK";
    
    const link = document.createElement('a');
    link.href = dummyPdfContent;
    link.download = `${material.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Download started", {
      description: "Your file will download shortly"
    });
  };

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'all') {
      navigate('/study-material');
    } else {
      navigate(`/study-material/category/${categoryId}`);
    }
    setShowCategories(false);
  };

  // Group categories by type
  const topicCategories = categories.filter(cat => 
    ["interview", "dsa", "web-development", "ai-ml", "ai-tools"].includes(cat.id)
  );
  
  const companyCategories = categories.filter(cat => 
    ["tcs", "wipro", "infosys", "cognizant", "accenture"].includes(cat.id)
  );

  return (
    <>
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 sm:py-4">
        <div className="container mx-auto px-4">
          <Link to="/study-material" className="flex items-center text-brand-red hover:underline text-xs sm:text-sm lg:text-base">
            <ChevronLeft size={14} className="mr-1" />
            Back to Study Materials
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-6 sm:py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
            {/* Categories Section */}
            <div className="w-full lg:w-1/4 order-1 lg:order-1">
              <div className="bg-gray-50 p-3 sm:p-4 lg:p-6 rounded-lg lg:sticky lg:top-24">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">Categories</h2>
                
                <Collapsible open={showCategories} onOpenChange={setShowCategories}>
                  <CollapsibleTrigger asChild>
                    <Button
                      className="w-full bg-brand-red hover:bg-red-600 text-white text-xs sm:text-sm lg:text-base py-2 sm:py-3 justify-between"
                    >
                      <div className="flex items-center">
                        <Plus size={16} className="mr-2" />
                        Browse Categories
                      </div>
                      {showCategories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </Button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    {/* All Materials */}
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left border-gray-200 text-gray-700 hover:bg-gray-100 text-xs sm:text-sm py-2"
                      onClick={() => handleCategoryClick('all')}
                    >
                      All Materials
                    </Button>

                    {/* Topic-based categories */}
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Topics</p>
                      {topicCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <Button
                            key={category.id}
                            variant="outline"
                            className="w-full justify-start text-left border-gray-200 text-gray-700 hover:bg-gray-100 text-xs sm:text-sm py-2"
                            onClick={() => handleCategoryClick(category.id)}
                          >
                            <IconComponent size={14} className="mr-2 shrink-0" />
                            <span className="truncate">{category.name}</span>
                          </Button>
                        );
                      })}
                    </div>

                    {/* Company-specific categories */}
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Companies</p>
                      {companyCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <Button
                            key={category.id}
                            variant="outline"
                            className="w-full justify-start text-left border-gray-200 text-gray-700 hover:bg-gray-100 text-xs sm:text-sm py-2"
                            onClick={() => handleCategoryClick(category.id)}
                          >
                            <IconComponent size={14} className="mr-2 shrink-0" />
                            <span className="truncate">{category.name}</span>
                          </Button>
                        );
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
            
            {/* Material Content */}
            <div className="flex-1 order-2 lg:order-2 lg:max-w-2xl">
              <Card>
                <CardHeader className="bg-gray-50 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold break-words">{material.title}</CardTitle>
                      <p className="text-gray-600 mt-2 text-xs sm:text-sm lg:text-base">{material.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                        material.isPremium ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {material.isPremium ? 'Premium' : 'Free'}
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {material.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                  {/* Premium Content Protection */}
                  {material.isPremium && !canAccessPremiumContent ? (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                      <Lock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">Premium Content</h3>
                      <p className="text-yellow-700 mb-4">
                        This is premium content. Upgrade to Premium to access the full material and download.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {!isAuthenticated ? (
                          <Button 
                            onClick={() => navigate('/login')}
                            className="bg-brand-red hover:bg-red-600 text-white"
                          >
                            Login to Continue
                          </Button>
                        ) : (
                          <Button 
                            onClick={() => navigate('/upgrade-premium')}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white"
                          >
                            Upgrade to Premium
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                      <div className="whitespace-pre-wrap text-sm sm:text-base">{material.content || material.description}</div>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <Button 
                      onClick={handleDownload}
                      className={`text-xs sm:text-sm flex-1 sm:flex-none ${
                        material.isPremium && !canAccessPremiumContent 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-brand-red hover:bg-red-600'
                      } text-white`}
                      disabled={material.isPremium && !canAccessPremiumContent}
                    >
                      <Download size={16} className="mr-2" />
                      {material.isPremium && !canAccessPremiumContent ? 'Premium Required' : 'Download PDF'}
                    </Button>
                    <div className="text-xs sm:text-sm text-gray-500 flex items-center">
                      <span>Downloads: {material.downloadCount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Sidebar */}
            <div className="lg:w-1/4 order-3 lg:order-3">
              <div className="bg-gray-50 p-3 sm:p-4 lg:p-6 rounded-lg lg:sticky lg:top-24">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">Material Info</h3>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Author:</span>
                    <p className="text-gray-600">{material.author || 'Unknown Author'}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Type:</span>
                    <p className="text-gray-600">{material.type}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Size:</span>
                    <p className="text-gray-600">{material.size}</p>
                  </div>
                  {material.tags && material.tags.length > 0 && (
                    <div>
                      <span className="font-medium text-gray-900">Tags:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {material.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">Explore More</h4>
                  <p className="text-xs text-gray-600 mb-3 sm:mb-4">
                    Check out our other study materials to boost your preparation.
                  </p>
                  <Link to="/study-material">
                    <Button variant="outline" className="w-full text-xs sm:text-sm border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                      View All Materials
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default StudyMaterialDetails;
