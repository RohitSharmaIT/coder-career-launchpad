import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useStudyMaterialDownload } from "@/hooks/useStudyMaterialDownload";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";
import StudyMaterialMetrics from "./StudyMaterialMetrics";
import StudyMaterialContentRenderer from "./StudyMaterialContentRenderer";
import PremiumAccessModal from "./PremiumAccessModal";

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
  date: string;
}

interface StudyMaterialDetailsContentProps {
  material: StudyMaterial;
}

const StudyMaterialDetailsContent = ({ material }: StudyMaterialDetailsContentProps) => {
  const { user } = useAuth();
  const { handleDownload } = useStudyMaterialDownload();
  const navigate = useNavigate();
  const isPremiumUser = user?.premium || false;
  const [showFullContent, setShowFullContent] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const handleViewContent = () => {
    if (material.isPremium && !isPremiumUser) {
      setShowPremiumModal(true);
      return;
    }
    setShowFullContent(true);
    console.log("Viewing content for:", material.title);
  };

  const handleDownloadClick = () => {
    if (material.isPremium && !isPremiumUser) {
      setShowPremiumModal(true);
      return;
    }
    handleDownload(material.id, material.isPremium);
  };

  if (showFullContent) {
    return (
      <div className="bg-white">
        <div className="space-y-6">
          {/* Back button */}
          <Button
            onClick={() => setShowFullContent(false)}
            variant="outline"
            className="mb-4"
          >
            ← Back to Preview
          </Button>

          {/* Title */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {material.title}
            </h1>
            <p className="text-lg text-blue-600 font-medium">
              Master the fundamentals and advance your knowledge with comprehensive study materials
            </p>
          </div>

          {/* Full Content */}
          <div className="bg-white p-6 rounded-lg border">
            <div className="text-gray-700">
              {material.content ? (
                <StudyMaterialContentRenderer 
                  content={material.content} 
                  isPremium={material.isPremium} 
                />
              ) : (
                <p className="text-gray-600 leading-relaxed">{material.description}</p>
              )}
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleDownloadClick}
              className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 text-base font-medium"
            >
              <Download size={18} className="mr-2" />
              Download Material
            </Button>
          </div>
        </div>

        {/* Premium Access Modal */}
        <PremiumAccessModal
          isOpen={showPremiumModal}
          onClose={() => setShowPremiumModal(false)}
          materialTitle={material.title}
        />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="space-y-8">
        {/* Title Section */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {material.title}
          </h1>
          <p className="text-lg text-blue-600 font-medium">
            Master the fundamentals and advance your knowledge with comprehensive study materials
          </p>
        </div>

        {/* Content Description Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Description</h2>
          <p className="text-gray-700 leading-relaxed text-base">
            {material.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleViewContent}
            className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 text-base font-medium flex items-center justify-center"
          >
            <Eye size={18} className="mr-2" />
            View Full Content
          </Button>
          
          <Button
            onClick={handleDownloadClick}
            variant="outline"
            className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-3 text-base font-medium flex items-center justify-center"
          >
            <Download size={18} className="mr-2" />
            Download Material
          </Button>
        </div>

        {/* Material Metrics */}
        <StudyMaterialMetrics material={material} />
      </div>

      {/* Premium Access Modal */}
      <PremiumAccessModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        materialTitle={material.title}
      />
    </div>
  );
};

export default StudyMaterialDetailsContent;
