
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
    <div className="lg:w-1/4 order-1 lg:order-3">
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg sticky top-6">
        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Material Info</h3>
        
        <div className="space-y-3 sm:space-y-4">
          {/* Download Button */}
          <Button
            onClick={handleDownloadClick}
            className="w-full bg-brand-red hover:bg-red-600 text-white"
          >
            <Download size={16} className="mr-2" />
            Download Material
          </Button>

          {/* Material Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} className="text-gray-500" />
              <span className="text-gray-600">Published: {material.date}</span>
            </div>

            {material.author && (
              <div className="flex items-center gap-2 text-sm">
                <User size={16} className="text-gray-500" />
                <span className="text-gray-600">Author: {material.author}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-sm">
              <FileText size={16} className="text-gray-500" />
              <span className="text-gray-600">Type: {material.type}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <FileText size={16} className="text-gray-500" />
              <span className="text-gray-600">Size: {material.size}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Download size={16} className="text-gray-500" />
              <span className="text-gray-600">Downloads: {material.downloadCount}</span>
            </div>
          </div>

          {/* Category */}
          <div>
            <h4 className="font-medium mb-2">Category</h4>
            <Badge variant="outline" className="text-xs">
              {material.category}
            </Badge>
          </div>

          {/* Tags */}
          {material.tags && material.tags.length > 0 && (
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-1">
                <Tag size={14} />
                Tags
              </h4>
              <div className="flex flex-wrap gap-1">
                {material.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Premium Badge */}
          {material.isPremium && (
            <div className="pt-2">
              <Badge className="bg-yellow-500 text-white">
                Premium Content
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialInfoSidebar;
