
import { Button } from "@/components/ui/button";
import { CategoryItem } from "./materialData";
import { Book, Plus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CategorySidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: CategoryItem[];
  simplified?: boolean;
}

const CategorySidebar = ({ activeCategory, setActiveCategory, categories, simplified = false }: CategorySidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  // Group categories by type
  const companyCategories = categories.filter(cat => 
    ["tcs", "wipro", "infosys", "cognizant", "accenture"].includes(cat.id)
  );
  
  const topicCategories = categories.filter(cat => 
    ["interview", "dsa"].includes(cat.id)
  );

  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    if (categoryId === 'all') {
      setActiveCategory('All');
    } else {
      navigate(`/study-material/category/${categoryId}`);
    }
  };

  const handleBrowseCategoriesClick = () => {
    navigate('/study-material/categories');
  };

  // If simplified mode, show only "Browse Categories" button
  if (simplified) {
    return (
      <div className="w-full lg:w-1/4">
        <div className="bg-gray-50 p-3 sm:p-4 lg:p-6 rounded-lg">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">Categories</h2>
          
          <Button
            onClick={handleBrowseCategoriesClick}
            className="w-full bg-brand-red hover:bg-red-600 text-white text-xs sm:text-sm lg:text-base py-2 sm:py-3"
          >
            <Plus size={16} className="mr-2" />
            Browse Categories
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/4">
      <div className="bg-gray-50 p-3 sm:p-4 lg:p-6 rounded-lg lg:sticky lg:top-24">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">Categories</h2>
        
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          {/* All category */}
          <Button
            key="all"
            variant={activeCategory === 'All' ? "default" : "outline"}
            className={`w-full justify-start text-left text-xs sm:text-sm lg:text-base py-2 sm:py-3 ${
              activeCategory === 'All' 
                ? "bg-brand-red hover:bg-red-600" 
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => handleCategoryClick('all', 'All')}
          >
            <Book size={14} className="mr-2 shrink-0 sm:size-4" />
            <span className="truncate">All Materials</span>
          </Button>

          {/* Topic-based categories */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between text-left border-gray-200 text-xs sm:text-sm lg:text-base py-2 sm:py-3"
              >
                <span className="truncate">Topic-based Materials</span>
                <span className="ml-2 shrink-0">{isOpen ? '−' : '+'}</span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 sm:space-y-2 mt-2">
              {topicCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant="outline"
                    className="w-full justify-start text-left border-gray-200 text-gray-700 hover:bg-gray-100 text-xs sm:text-sm py-2"
                    onClick={() => handleCategoryClick(category.id, category.name)}
                  >
                    <IconComponent size={14} className="mr-2 shrink-0" />
                    <span className="truncate">{category.name}</span>
                  </Button>
                );
              })}
            </CollapsibleContent>
          </Collapsible>

          {/* Company-specific categories */}
          <Collapsible open={true} className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between text-left border-gray-200 text-xs sm:text-sm lg:text-base py-2 sm:py-3"
              >
                <span className="truncate">Company-specific Materials</span>
                <span className="ml-2 shrink-0">−</span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 sm:space-y-2 mt-2">
              {companyCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant="outline"
                    className="w-full justify-start text-left border-gray-200 text-gray-700 hover:bg-gray-100 text-xs sm:text-sm py-2"
                    onClick={() => handleCategoryClick(category.id, category.name)}
                  >
                    <IconComponent size={14} className="mr-2 shrink-0" />
                    <span className="truncate">{category.name}</span>
                  </Button>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
