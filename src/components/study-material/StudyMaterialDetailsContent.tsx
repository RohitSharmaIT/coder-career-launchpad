
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useStudyMaterialDownload } from "@/hooks/useStudyMaterialDownload";
import { useNavigate } from "react-router-dom";
import StudyMaterialPreviewView from "./StudyMaterialPreviewView";
import StudyMaterialFullContentView from "./StudyMaterialFullContentView";

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

  const handleViewContent = () => {
    if (material.isPremium && !isPremiumUser) {
      alert("This is premium content. Please upgrade to access full content.");
      return;
    }
    setShowFullContent(true);
    console.log("Viewing content for:", material.title);
  };

  const handleBackToPreview = () => {
    setShowFullContent(false);
  };

  const handleDownloadClick = () => {
    handleDownload(material.id, material.isPremium);
  };

  if (showFullContent) {
    return (
      <StudyMaterialFullContentView
        material={material}
        onBackToPreview={handleBackToPreview}
        onDownload={handleDownloadClick}
      />
    );
  }

  return (
    <StudyMaterialPreviewView
      material={material}
      onViewContent={handleViewContent}
      onDownload={handleDownloadClick}
    />
  );
};

export default StudyMaterialDetailsContent;
