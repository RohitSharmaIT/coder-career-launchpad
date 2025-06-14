
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface StudyMaterial {
  id: number;
  title: string;
  description: string;
  content?: string;
  category: string;
  type: string;
  size: string;
  isPremium: boolean;
  downloadCount: number;
  tags?: string[];
  author?: string;
}

interface StudyMaterialInfoSidebarProps {
  material: StudyMaterial;
}

const StudyMaterialInfoSidebar = ({ material }: StudyMaterialInfoSidebarProps) => {
  return (
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
  );
};

export default StudyMaterialInfoSidebar;
