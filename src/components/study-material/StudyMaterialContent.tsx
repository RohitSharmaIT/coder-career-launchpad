
import MaterialsGrid from "./MaterialsGrid";
import { StudyMaterial } from "./MaterialCard";

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
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredMaterials.length} study materials
          </p>
        </div>

        {/* Materials Grid */}
        <MaterialsGrid 
          materials={filteredMaterials} 
          onDownload={onDownload}
          onSpecialCardClick={onSpecialCardClick}
          onPremiumClick={onPremiumClick}
        />
      </div>
    </section>
  );
};

export default StudyMaterialContent;
