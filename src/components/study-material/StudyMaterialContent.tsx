
import MaterialsGrid from "./MaterialsGrid";
import { StudyMaterial } from "./MaterialCard";
import { Button } from "@/components/ui/button";
import { Grid3X3 } from "lucide-react";
import { useState } from "react";
import CategoriesModal from "./CategoriesModal";

interface StudyMaterialContentProps {
  filteredMaterials: StudyMaterial[];
  onDownload: (id: number, isPremium: boolean) => void;
  onSpecialCardClick?: (material: StudyMaterial) => void;
  onPremiumClick?: (material: StudyMaterial) => void;
  onCategoriesClick: () => void;
}

const StudyMaterialContent = ({ 
  filteredMaterials, 
  onDownload, 
  onSpecialCardClick, 
  onPremiumClick,
  onCategoriesClick 
}: StudyMaterialContentProps) => {
  const [showCategoriesModal, setShowCategoriesModal] = useState(false);

  return (
    <section className="bg-gray-50">
      <div>
        {/* Header with results count and browse categories button */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            Showing {filteredMaterials.length} study materials
          </p>
          
          <Button
            onClick={() => setShowCategoriesModal(true)}
            variant="outline"
            className="bg-white hover:bg-gray-50 text-brand-red border-brand-red hover:border-red-600"
          >
            <Grid3X3 size={16} className="mr-2" />
            Browse Categories
          </Button>
        </div>

        {/* Materials Grid */}
        <MaterialsGrid 
          materials={filteredMaterials} 
          onDownload={onDownload}
          onSpecialCardClick={onSpecialCardClick}
          onPremiumClick={onPremiumClick}
        />
      </div>

      {/* Categories Modal */}
      <CategoriesModal
        isOpen={showCategoriesModal}
        onClose={() => setShowCategoriesModal(false)}
      />
    </section>
  );
};

export default StudyMaterialContent;
