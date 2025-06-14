
import MaterialsGrid from "./MaterialsGrid";
import { StudyMaterial } from "./MaterialCard";
import { Button } from "@/components/ui/button";
import { Grid3X3, Filter, SortAsc } from "lucide-react";
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
    <section className="bg-gray-50 section-padding">
      <div className="container-full">
        {/* Enhanced Header with better spacing */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Study Materials Collection
              </h2>
              <p className="text-gray-600 text-lg">
                Showing <span className="font-semibold text-brand-red">{filteredMaterials.length}</span> study materials
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setShowCategoriesModal(true)}
                variant="outline"
                className="bg-white hover:bg-brand-red hover:text-white text-brand-red border-brand-red transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
              >
                <Grid3X3 size={18} className="mr-2" />
                Browse Categories
              </Button>
              
              <Button
                variant="outline"
                className="bg-white hover:bg-blue-600 hover:text-white text-blue-600 border-blue-600 transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
              >
                <Filter size={18} className="mr-2" />
                Filter
              </Button>
              
              <Button
                variant="outline"
                className="bg-white hover:bg-green-600 hover:text-white text-green-600 border-green-600 transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
              >
                <SortAsc size={18} className="mr-2" />
                Sort
              </Button>
            </div>
          </div>
        </div>

        {/* Materials Grid with better spacing */}
        <div className="mb-16">
          <MaterialsGrid 
            materials={filteredMaterials} 
            onDownload={onDownload}
            onSpecialCardClick={onSpecialCardClick}
            onPremiumClick={onPremiumClick}
          />
        </div>
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
