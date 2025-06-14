
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useStudyMaterialDownload } from "@/hooks/useStudyMaterialDownload";
import { useNavigate } from "react-router-dom";

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
  tags?: string[];
  author?: string;
}

interface StudyMaterialDetailsContentProps {
  material: StudyMaterial;
}

const StudyMaterialDetailsContent = ({ material }: StudyMaterialDetailsContentProps) => {
  const { user } = useAuth();
  const { handleDownload } = useStudyMaterialDownload();
  const navigate = useNavigate();
  const isPremiumUser = user?.premium || false;

  const handleViewContent = () => {
    if (material.isPremium && !isPremiumUser) {
      alert("This is premium content. Please upgrade to access full content.");
      return;
    }
    console.log("Viewing content for:", material.title);
  };

  const handleDownloadClick = () => {
    handleDownload(material.id, material.isPremium);
  };

  const handleUpgradeClick = () => {
    navigate('/upgrade-simple');
  };

  const renderContent = (content: string, isPreview: boolean = false) => {
    if (isPreview && material.isPremium && !isPremiumUser) {
      const textContent = content.replace(/<[^>]*>/g, '');
      const truncatedText = textContent.substring(0, 200) + '...';
      return (
        <div className="space-y-3">
          <p className="text-gray-700">{truncatedText}</p>
          <div className="bg-gradient-to-t from-white to-transparent h-20 flex items-end justify-center">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <Lock className="mx-auto mb-2 text-amber-600" size={24} />
              <p className="text-sm text-gray-600 mb-3">
                Upgrade to premium to access full content
              </p>
              <Button 
                size="sm" 
                className="bg-brand-red hover:bg-red-600"
                onClick={handleUpgradeClick}
              >
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div 
        className="prose prose-sm max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  return (
    <div className="space-y-6">
      {/* Title and Description */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          {material.title}
        </h1>
        {material.tagline && (
          <p className="text-lg text-blue-600 mb-4">
            {material.tagline}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={handleViewContent}
          className="bg-brand-red hover:bg-red-600 text-white px-6 py-2"
          disabled={material.isPremium && !isPremiumUser}
        >
          <Eye size={16} className="mr-2" />
          View Full Content
        </Button>
        
        <Button
          onClick={handleDownloadClick}
          variant="outline"
          className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-6 py-2"
        >
          <Download size={16} className="mr-2" />
          Download
        </Button>
      </div>

      {/* Content Preview */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Content Preview</h3>
        <div className="text-gray-700">
          {material.content ? (
            renderContent(material.content, true)
          ) : (
            <p className="text-gray-600">{material.description}</p>
          )}
        </div>
      </div>

      {/* Material Details */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
        <div>
          <span className="text-sm font-medium text-gray-500">Category:</span>
          <p className="text-sm text-blue-600">{material.category}</p>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-500">Downloads:</span>
          <p className="text-sm text-gray-900">{material.downloadCount}</p>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-500">Type:</span>
          <p className="text-sm text-gray-900">{material.type}</p>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialDetailsContent;
