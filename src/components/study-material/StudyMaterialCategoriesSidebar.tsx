
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { categories } from "@/components/study-material/materialData";

const StudyMaterialCategoriesSidebar = () => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);

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
  );
};

export default StudyMaterialCategoriesSidebar;
