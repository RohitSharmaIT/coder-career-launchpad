
import { Button } from "@/components/ui/button";
import { Download, Eye, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useStudyMaterialDownload } from "@/hooks/useStudyMaterialDownload";
import { useNavigate } from "react-router-dom";

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
      // Show upgrade prompt
      alert("This is premium content. Please upgrade to access full content.");
      return;
    }
    // Logic to view full content
    console.log("Viewing content for:", material.title);
  };

  const handleDownloadClick = () => {
    handleDownload(material.id, material.isPremium);
  };

  const handleUpgradeClick = () => {
    navigate('/upgrade-simple');
  };

  return (
    <div className="lg:w-1/2 order-2 lg:order-2">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">
            {material.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6">
            {material.description}
          </p>
        </div>

        {/* Premium Badge */}
        {material.isPremium && (
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
            <Lock size={16} />
            <span className="text-sm font-medium">Premium Content</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button
            onClick={handleViewContent}
            className="flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3"
            disabled={material.isPremium && !isPremiumUser}
          >
            <Eye size={16} />
            {material.isPremium && !isPremiumUser ? "View Preview" : "View Full Content"}
          </Button>
          
          <Button
            onClick={handleDownloadClick}
            variant="outline"
            className="flex items-center gap-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-4 sm:px-6 py-2 sm:py-3"
          >
            <Download size={16} />
            Download
          </Button>
        </div>

        {/* Content Preview */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Content Preview</h3>
          <div className="prose prose-sm sm:prose max-w-none">
            {material.content ? (
              material.isPremium && !isPremiumUser ? (
                <div className="space-y-3">
                  <p>{material.content.substring(0, 200)}...</p>
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
              ) : (
                <p>{material.content}</p>
              )
            ) : (
              <p className="text-gray-500 italic">No preview available</p>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="bg-gray-50 p-3 rounded">
            <span className="font-medium text-gray-900">Category:</span>
            <p className="text-gray-600">{material.category}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <span className="font-medium text-gray-900">Downloads:</span>
            <p className="text-gray-600">{material.downloadCount}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded sm:col-span-1 col-span-2">
            <span className="font-medium text-gray-900">Type:</span>
            <p className="text-gray-600">{material.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialDetailsContent;
