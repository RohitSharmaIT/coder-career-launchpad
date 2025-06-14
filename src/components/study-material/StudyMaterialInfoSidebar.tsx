
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, User, FileText, Lock } from "lucide-react";
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
      {/* Material Details Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-6 text-gray-900">Material Details</h3>
        
        <div className="space-y-4">
          {/* Author */}
          {material.author && (
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Author</p>
                <p className="text-base text-gray-900">{material.author}</p>
              </div>
            </div>
          )}

          {/* Date Posted */}
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Date Posted</p>
              <p className="text-base text-gray-900">{material.date}</p>
            </div>
          </div>

          {/* File Size */}
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">File Size</p>
              <p className="text-base text-gray-900">{material.size}</p>
            </div>
          </div>

          {/* Premium Badge */}
          {material.isPremium && (
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Access Level</p>
                <p className="text-base text-amber-600 font-medium">Premium Content</p>
              </div>
            </div>
          )}

          {/* Tags */}
          {material.tags && material.tags.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {material.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Download Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Actions</h3>
        <Button
          onClick={handleDownloadClick}
          className="w-full bg-brand-red hover:bg-red-600 text-white mb-4"
        >
          <Download size={16} className="mr-2" />
          Download Now
        </Button>
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
