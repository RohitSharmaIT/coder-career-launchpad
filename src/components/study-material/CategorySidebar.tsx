
import { Button } from "@/components/ui/button";
import { CategoryItem } from "./materialData";
import { Book } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface CategorySidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: CategoryItem[];
}

const CategorySidebar = ({ activeCategory, setActiveCategory, categories }: CategorySidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // Group categories by type
  const companyCategories = categories.filter(cat => 
    ["tcs", "wipro", "infosys", "cognizant", "accenture"].includes(cat.id)
  );
  
  const topicCategories = categories.filter(cat => 
    ["interview", "dsa"].includes(cat.id)
  );

  return (
    <div className="lg:w-1/4">
      <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
        <h2 className="text-xl font-bold mb-6">Categories</h2>
        
        <div className="space-y-4">
          {/* All category */}
          <Button
            key="all"
            variant={activeCategory === 'All' ? "default" : "outline"}
            className={`w-full justify-start text-left mb-2 ${
              activeCategory === 'All' 
                ? "bg-brand-red hover:bg-red-600" 
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveCategory('All')}
          >
            <Book size={18} className="mr-2" />
            All Materials
          </Button>

          {/* Topic-based categories */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between text-left border-gray-200 mb-2"
              >
                Topic-based Materials
                <span className="ml-2">{isOpen ? '−' : '+'}</span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 mt-2">
              {topicCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.name ? "default" : "outline"}
                    className={`w-full justify-start text-left mb-2 ${
                      activeCategory === category.name 
                        ? "bg-brand-red hover:bg-red-600" 
                        : "border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    <IconComponent size={18} className="mr-2" />
                    {category.name}
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
                className="w-full justify-between text-left border-gray-200 mb-2"
              >
                Company-specific Materials
                <span className="ml-2">−</span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 mt-2">
              {companyCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.name ? "default" : "outline"}
                    className={`w-full justify-start text-left mb-2 ${
                      activeCategory === category.name 
                        ? "bg-brand-red hover:bg-red-600" 
                        : "border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    <IconComponent size={18} className="mr-2" />
                    {category.name}
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
