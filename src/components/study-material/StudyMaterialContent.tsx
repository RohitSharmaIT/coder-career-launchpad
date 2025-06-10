
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import MaterialsGrid from './MaterialsGrid';
import { StudyMaterial } from './MaterialCard';

interface StudyMaterialContentProps {
  filteredMaterials: StudyMaterial[];
  onDownload: (id: number, isPremium: boolean) => void;
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Categories Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">All Study Materials</h2>
          <Button
            onClick={onCategoriesClick}
            className="bg-brand-red hover:bg-red-600 text-white"
          >
            <Plus size={18} className="mr-2" />
            Browse Categories
          </Button>
        </div>

        {/* Materials Grid */}
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
