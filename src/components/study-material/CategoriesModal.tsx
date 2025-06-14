
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { categories } from "@/components/study-material/materialData";
import { useNavigate } from "react-router-dom";

interface CategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoriesModal = ({ isOpen, onClose }: CategoriesModalProps) => {
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
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Browse Categories</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* All Materials */}
          <div>
            <Card 
              className="hover:shadow-lg transition-shadow cursor-pointer group mb-6"
              onClick={() => handleCategoryClick('all')}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">All Materials</CardTitle>
                <CardDescription>Browse all available study materials</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  className="w-full bg-brand-red hover:bg-red-600 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick('all');
                  }}
                >
                  View All Materials
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Topic-based Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Topic-based Materials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topicCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.id} 
                    className="hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-3 p-3 bg-brand-red/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                        <IconComponent size={24} className="text-brand-red" />
                      </div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {category.id === 'interview' && 'Prepare for technical and HR interviews'}
                        {category.id === 'dsa' && 'Master data structures and algorithms'}
                        {category.id === 'web-development' && 'Learn modern web development technologies'}
                        {category.id === 'ai-ml' && 'Explore artificial intelligence and machine learning'}
                        {category.id === 'ai-tools' && 'Master AI-powered development tools'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
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
            <h3 className="text-xl font-bold mb-4">Company-specific Materials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.id} 
                    className="hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-3 p-3 bg-brand-red/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                        <IconComponent size={24} className="text-brand-red" />
                      </div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription className="text-gray-600">
                        Company-specific preparation materials
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
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
      </DialogContent>
    </Dialog>
  );
};

export default CategoriesModal;
