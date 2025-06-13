
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { categories } from "@/components/study-material/materialData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StudyMaterialCategories = () => {
  const navigate = useNavigate();

  // Group categories by type
  const topicCategories = categories.filter(cat => 
    ["interview", "dsa", "web-development", "ai-ml", "ai-tools"].includes(cat.id)
  );
  
  const companyCategories = categories.filter(cat => 
    ["tcs", "wipro", "infosys", "cognizant", "accenture"].includes(cat.id)
  );

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'all') {
      navigate('/study-material');
    } else {
      navigate(`/study-material/category/${categoryId}`);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-6 sm:py-8 lg:py-12 xl:py-16">
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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">Browse Categories</h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8">
              Choose from our wide range of study material categories to find exactly what you need for your preparation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Topic-based Categories */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">Topic-based Materials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {topicCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.id} 
                    className="hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardHeader className="text-center pb-3 sm:pb-4 p-3 sm:p-4 lg:p-6">
                      <div className="mx-auto mb-2 sm:mb-3 lg:mb-4 p-2 sm:p-3 bg-brand-red/10 rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                        <IconComponent size={20} className="text-brand-red sm:size-6 lg:size-8" />
                      </div>
                      <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-gray-600 text-xs sm:text-sm lg:text-base">
                        {category.id === 'interview' && 'Prepare for technical and HR interviews'}
                        {category.id === 'dsa' && 'Master data structures and algorithms'}
                        {category.id === 'web-development' && 'Learn modern web development technologies'}
                        {category.id === 'ai-ml' && 'Explore artificial intelligence and machine learning'}
                        {category.id === 'ai-tools' && 'Master AI-powered development tools'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 p-3 sm:p-4 lg:p-6">
                      <Button 
                        className="w-full bg-brand-red hover:bg-red-600 text-white text-xs sm:text-sm lg:text-base py-2 sm:py-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(category.id);
                        }}
                      >
                        View Materials
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Company-specific Categories */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">Company-specific Materials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {companyCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.id} 
                    className="hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardHeader className="text-center pb-3 sm:pb-4 p-3 sm:p-4 lg:p-6">
                      <div className="mx-auto mb-2 sm:mb-3 lg:mb-4 p-2 sm:p-3 bg-brand-red/10 rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                        <IconComponent size={20} className="text-brand-red sm:size-6 lg:size-8" />
                      </div>
                      <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-gray-600 text-xs sm:text-sm lg:text-base">
                        Company-specific preparation materials
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 p-3 sm:p-4 lg:p-6">
                      <Button 
                        className="w-full bg-brand-red hover:bg-red-600 text-white text-xs sm:text-sm lg:text-base py-2 sm:py-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(category.id);
                        }}
                      >
                        View Materials
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default StudyMaterialCategories;
