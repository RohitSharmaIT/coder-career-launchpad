
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import StudyMaterialMetrics from "./StudyMaterialMetrics";

interface StudyMaterial {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  downloadCount: number;
  isPremium: boolean;
}

interface StudyMaterialPreviewViewProps {
  material: StudyMaterial;
  onViewContent: () => void;
  onDownload: () => void;
}

const StudyMaterialPreviewView = ({ 
  material, 
  onViewContent, 
  onDownload 
}: StudyMaterialPreviewViewProps) => {
  const { user } = useAuth();
  const isPremiumUser = user?.premium || false;

  return (
    <div className="bg-white">
      <div className="space-y-6">
        {/* 1. Title */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {material.title}
          </h1>
        </div>

        {/* 2. Tagline */}
        <div>
          <p className="text-lg text-blue-600 font-medium">
            Master the fundamentals and advance your knowledge with comprehensive study materials
          </p>
        </div>

        {/* 3. Content Description */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Description</h3>
          <div className="text-gray-700">
            <p className="text-gray-600 leading-relaxed">{material.description}</p>
          </div>
        </div>

        {/* 4. View Full Content & Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={onViewContent}
            className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 text-base font-medium flex-1 sm:flex-none"
            disabled={material.isPremium && !isPremiumUser}
          >
            <Eye size={18} className="mr-2" />
            View Full Content
          </Button>
          
          <Button
            onClick={onDownload}
            variant="outline"
            className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-3 text-base font-medium flex-1 sm:flex-none"
          >
            <Download size={18} className="mr-2" />
            Download Material
          </Button>
        </div>

        {/* 5. Category, Interview Type, and Download Count */}
        <StudyMaterialMetrics material={material} />
      </div>
    </div>
  );
};

export default StudyMaterialPreviewView;
