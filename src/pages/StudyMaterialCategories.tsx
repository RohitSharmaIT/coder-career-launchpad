
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              onClick={() => navigate('/study-material')}
              className="mr-4"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Study Materials
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Browse Categories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our wide range of study material categories to find exactly what you need for your preparation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Topic-based Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Topic-based Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.id} 
                    className="hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-brand-red/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                        <IconComponent size={32} className="text-brand-red" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {category.id === 'interview' && 'Prepare for technical and HR interviews'}
                        {category.id === 'dsa' && 'Master data structures and algorithms'}
                        {category.id === 'web-development' && 'Learn modern web development technologies'}
                        {category.id === 'ai-ml' && 'Explore artificial intelligence and machine learning'}
                        {category.id === 'ai-tools' && 'Master AI-powered development tools'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-brand-red hover:bg-red-600 text-white"
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
            <h2 className="text-2xl font-bold mb-6">Company-specific Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.id} 
                    className="hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-brand-red/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                        <IconComponent size={32} className="text-brand-red" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-gray-600">
                        Company-specific preparation materials
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-brand-red hover:bg-red-600 text-white"
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
