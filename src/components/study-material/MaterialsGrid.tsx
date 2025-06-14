
import MaterialCard, { StudyMaterial } from './MaterialCard';
import { BookOpen, Search } from 'lucide-react';

interface MaterialsGridProps {
  materials: StudyMaterial[];
  onDownload: (id: number, isPremium: boolean) => void;
  onSpecialCardClick?: (material: StudyMaterial) => void;
  onPremiumClick?: (material: StudyMaterial) => void;
}

const MaterialsGrid = ({ materials, onDownload, onSpecialCardClick, onPremiumClick }: MaterialsGridProps) => {
  if (materials.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">No materials found</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Try adjusting your search terms or browse different categories to find the study materials you're looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {materials.map((material, index) => (
        <div 
          key={material.id}
          className="animate-fade-in"
          style={{animationDelay: `${index * 0.1}s`}}
        >
          <MaterialCard 
            material={material} 
            onDownload={onDownload}
            onSpecialCardClick={onSpecialCardClick}
            onPremiumClick={onPremiumClick}
          />
        </div>
      ))}
    </div>
  );
};

export default MaterialsGrid;
