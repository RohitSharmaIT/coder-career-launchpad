
import { Button } from "@/components/ui/button";
import { Book, FileText, Code } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: JSX.Element;
}

interface CategorySidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: Category[];
}

const CategorySidebar = ({ activeCategory, setActiveCategory, categories }: CategorySidebarProps) => {
  return (
    <div className="lg:w-1/4">
      <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
        <h2 className="text-xl font-bold mb-6">Categories</h2>
        
        <div className="space-y-2">
          {categories.map((category) => (
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
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
