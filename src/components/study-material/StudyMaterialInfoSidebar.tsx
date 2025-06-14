
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, User, FileText, Tag } from "lucide-react";
import { useStudyMaterialDownload } from "@/hooks/useStudyMaterialDownload";

interface StudyMaterial {
  id: number;
  title: string;
  tagline?: string;
  description: string;
  content?: string;
  category: string;
  type: string;
  size: string;
  isPremium: boolean;
  downloadCount: number;
  date: string;
  author?: string;
  tags?: string[];
}

interface StudyMaterialInfoSidebarProps {
  material: StudyMaterial;
}

const StudyMaterialInfoSidebar = ({ material }: StudyMaterialInfoSidebarProps) => {
  const { handleDownload } = useStudyMaterialDownload();

  const handleDownloadClick = () => {
    handleDownload(material.id, material.isPremium);
  };

  return (
    <div className="space-y-6">
      {/* Material Info Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-6 text-gray-900">Material Info</h3>
        
        <div className="space-y-4">
          {/* Author */}
          {material.author && (
            <div>
              <span className="text-sm font-medium text-gray-500">Author:</span>
              <p className="text-sm text-gray-900">{material.author}</p>
            </div>
          )}

          {/* Type */}
          <div>
            <span className="text-sm font-medium text-gray-500">Type:</span>
            <p className="text-sm text-gray-900">{material.type}</p>
          </div>

          {/* Size */}
          <div>
            <span className="text-sm font-medium text-gray-500">Size:</span>
            <p className="text-sm text-gray-900">{material.size}</p>
          </div>

          {/* Tags */}
          {material.tags && material.tags.length > 0 && (
            <div>
              <span className="text-sm font-medium text-gray-500 mb-2 block">Tags:</span>
              <div className="flex flex-wrap gap-1">
                {material.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Explore More Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Explore More</h3>
        <p className="text-sm text-gray-600 mb-4">
          Check out our other study materials to boost your preparation.
        </p>
        <Button 
          variant="outline" 
          className="w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
          onClick={() => window.location.href = '/study-material'}
        >
          View All Materials
        </Button>
      </div>
    </div>
  );
};

export default StudyMaterialInfoSidebar;
