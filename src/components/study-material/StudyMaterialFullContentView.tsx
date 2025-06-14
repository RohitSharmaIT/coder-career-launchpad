
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import StudyMaterialContentRenderer from "./StudyMaterialContentRenderer";

interface StudyMaterial {
  id: number;
  title: string;
  description: string;
  content?: string;
  isPremium: boolean;
}

interface StudyMaterialFullContentViewProps {
  material: StudyMaterial;
  onBackToPreview: () => void;
  onDownload: () => void;
}

const StudyMaterialFullContentView = ({ 
  material, 
  onBackToPreview, 
  onDownload 
}: StudyMaterialFullContentViewProps) => {
  return (
    <div className="bg-white">
      <div className="space-y-6">
        {/* Back button */}
        <Button
          onClick={onBackToPreview}
          variant="outline"
          className="mb-4"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Preview
        </Button>

        {/* Title */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {material.title}
          </h1>
        </div>

        {/* Tagline */}
        <div>
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
            onClick={onDownload}
            className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 text-base font-medium"
          >
            <Download size={18} className="mr-2" />
            Download Material
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialFullContentView;
