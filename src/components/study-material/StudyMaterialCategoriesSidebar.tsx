
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
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
    // Close categories on mobile after selection
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
    <div className="w-full">
      <div className="bg-gray-50 p-4 rounded-lg sticky top-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Categories</h2>
        </div>
        
        {/* Large screens: Dropdown Menu */}
        <div className="hidden lg:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="w-full bg-brand-red hover:bg-red-600 text-white text-sm flex items-center justify-center py-2.5"
                size="sm"
              >
                <Plus size={16} className="mr-2" />
                Browse Categories
                <ChevronDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-64 bg-white shadow-lg border z-50 max-h-96 overflow-y-auto"
              sideOffset={4}
            >
              <DropdownMenuItem 
                onClick={() => handleCategoryClick('all')} 
                className="cursor-pointer py-2.5 text-sm hover:bg-gray-50"
              >
                All Materials
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wide py-2">
                Topics
              </DropdownMenuLabel>
              {topicCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="flex items-center cursor-pointer py-2.5 text-sm hover:bg-gray-50"
                  >
                    <IconComponent size={16} className="mr-3 text-gray-600" />
                    {category.name}
                  </DropdownMenuItem>
                );
              })}
              
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wide py-2">
                Companies
              </DropdownMenuLabel>
              {companyCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="flex items-center cursor-pointer py-2.5 text-sm hover:bg-gray-50"
                  >
                    <IconComponent size={16} className="mr-3 text-gray-600" />
                    {category.name}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Small/Medium screens: Simple button list layout */}
        <div className="lg:hidden">
          <div className="space-y-2">
            {/* All Materials Button */}
            <Button
              variant="outline"
              className="w-full justify-start text-left border-gray-200 text-gray-700 hover:bg-gray-100 text-sm py-2"
              onClick={() => handleCategoryClick('all')}
            >
              All Materials
            </Button>

            {/* Topic Categories */}
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-1">
                Topics
              </p>
              {topicCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant="outline"
                    className="w-full justify-start text-left border-gray-200 text-gray-700 hover:bg-gray-100 text-sm py-2"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <IconComponent size={14} className="mr-2 shrink-0 text-gray-600" />
                    <span className="truncate text-xs">{category.name}</span>
                  </Button>
                );
              })}
            </div>

            {/* Company Categories */}
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-1">
                Companies
              </p>
              {companyCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant="outline"
                    className="w-full justify-start text-left border-gray-200 text-gray-700 hover:bg-gray-100 text-sm py-2"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <IconComponent size={14} className="mr-2 shrink-0 text-gray-600" />
                    <span className="truncate text-xs">{category.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialCategoriesSidebar;
