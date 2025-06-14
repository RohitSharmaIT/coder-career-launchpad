
import MaterialsGrid from './MaterialsGrid';
import { StudyMaterial } from './MaterialCard';

interface StudyMaterialContentProps {
  filteredMaterials: StudyMaterial[];
  onDownload: (id: number, isPremiumContent: boolean) => void;
  onSpecialCardClick: (material: StudyMaterial) => void;
  onCategoriesClick: () => void;
}

const StudyMaterialContent = ({ 
  filteredMaterials, 
  onDownload, 
  onSpecialCardClick, 
  onCategoriesClick 
}: StudyMaterialContentProps) => {
  return (
    <section className="py-6 sm:py-8 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Study Materials</h2>
          <button
            onClick={onCategoriesClick}
            className="text-brand-red hover:underline text-sm sm:text-base"
          >
            Browse by Categories
          </button>
        </div>
        
        <MaterialsGrid 
          materials={filteredMaterials}
          onDownload={onDownload}
          onSpecialCardClick={onSpecialCardClick}
        />
      </div>
    </section>
  );
};

export default StudyMaterialContent;
