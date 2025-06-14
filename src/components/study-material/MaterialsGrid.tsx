
import MaterialCard, { StudyMaterial } from './MaterialCard';

interface MaterialsGridProps {
  materials: StudyMaterial[];
  onDownload: (id: number, isPremium: boolean) => void;
  onSpecialCardClick?: (material: StudyMaterial) => void;
  onPremiumClick?: (material: StudyMaterial) => void;
}

const MaterialsGrid = ({ materials, onDownload, onSpecialCardClick, onPremiumClick }: MaterialsGridProps) => {
  if (materials.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold mb-2">No materials found</h3>
        <p className="text-gray-600">
          Try adjusting your search or category filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials.map((material) => (
        <MaterialCard 
          key={material.id} 
          material={material} 
          onDownload={onDownload}
          onSpecialCardClick={onSpecialCardClick}
          onPremiumClick={onPremiumClick}
        />
      ))}
    </div>
  );
};

export default MaterialsGrid;
