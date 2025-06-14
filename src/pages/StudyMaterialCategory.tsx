
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories, allMaterials } from "@/components/study-material/materialData";
import MaterialsGrid from "@/components/study-material/MaterialsGrid";
import { useStudyMaterialDownload } from "@/hooks/useStudyMaterialDownload";
import { toast } from "sonner";

const StudyMaterialCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { handleDownload } = useStudyMaterialDownload();

  // Find the current category
  const currentCategory = categories.find(cat => cat.id === categoryId);

  // Filter materials by category
  const categoryMaterials = useMemo(() => {
    if (!categoryId) return [];
    return allMaterials.filter(material => material.category === categoryId);
  }, [categoryId]);

  // Filter materials by search term
  const filteredMaterials = useMemo(() => {
    if (!searchTerm) return categoryMaterials;
    return categoryMaterials.filter(material =>
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [categoryMaterials, searchTerm]);

  const onDownload = (id: number, isPremium: boolean) => {
    if (isPremium) {
      toast.error("Premium content requires subscription");
      navigate('/upgrade-premium');
      return;
    }
    handleDownload(id);
  };

  const onSpecialCardClick = (material: any) => {
    navigate(`/study-material/${material.id}`);
  };

  if (!currentCategory) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-6">
              The category you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => navigate('/study-material')}
              className="bg-brand-red hover:bg-red-600 text-white"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Study Materials
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const IconComponent = currentCategory.icon;

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-6 sm:py-8 lg:py-12 xl:py-16 pt-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
            <Button
              variant="outline"
              onClick={() => navigate('/study-material')}
              className="mr-3 sm:mr-4 text-xs sm:text-sm lg:text-base py-2 sm:py-3"
            >
              <ArrowLeft size={16} className="mr-1 sm:mr-2" />
              Back to Study Materials
            </Button>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-brand-red/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
              <IconComponent size={32} className="text-brand-red sm:size-10 lg:size-12" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
              {currentCategory.name}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8">
              Explore our comprehensive collection of {currentCategory.name.toLowerCase()} study materials and resources.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search materials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Materials Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
              {filteredMaterials.length} Materials Found
            </h2>
          </div>

          <MaterialsGrid 
            materials={filteredMaterials} 
            onDownload={onDownload} 
            onSpecialCardClick={onSpecialCardClick}
          />
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default StudyMaterialCategory;
