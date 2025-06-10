
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface StudyMaterialItem {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  thumbnail: string;
  type: string;
  size: string;
  isPremium: boolean;
  downloadCount: number;
  date: string;
  pdfFile?: File | null;
}

interface StudyMaterialsContextType {
  studyMaterials: StudyMaterialItem[];
  addStudyMaterial: (material: Omit<StudyMaterialItem, 'id' | 'downloadCount' | 'date'>) => void;
  getStudyMaterialsByCategory: (category: string) => StudyMaterialItem[];
}

const StudyMaterialsContext = createContext<StudyMaterialsContextType | undefined>(undefined);

export const useStudyMaterials = () => {
  const context = useContext(StudyMaterialsContext);
  if (!context) {
    throw new Error('useStudyMaterials must be used within a StudyMaterialsProvider');
  }
  return context;
};

interface StudyMaterialsProviderProps {
  children: ReactNode;
}

export const StudyMaterialsProvider = ({ children }: StudyMaterialsProviderProps) => {
  const [studyMaterials, setStudyMaterials] = useState<StudyMaterialItem[]>([]);

  const addStudyMaterial = (material: Omit<StudyMaterialItem, 'id' | 'downloadCount' | 'date'>) => {
    const newMaterial: StudyMaterialItem = {
      ...material,
      id: Date.now(), // Simple ID generation
      downloadCount: 0,
      date: new Date().toLocaleDateString()
    };
    
    setStudyMaterials(prev => [newMaterial, ...prev]);
  };

  const getStudyMaterialsByCategory = (category: string) => {
    if (category === 'all' || category === 'All') {
      return studyMaterials;
    }
    return studyMaterials.filter(material => material.category === category);
  };

  return (
    <StudyMaterialsContext.Provider value={{
      studyMaterials,
      addStudyMaterial,
      getStudyMaterialsByCategory
    }}>
      {children}
    </StudyMaterialsContext.Provider>
  );
};
