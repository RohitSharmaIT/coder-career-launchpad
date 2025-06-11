
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Category {
  value: string;
  label: string;
}

interface CategoriesContextType {
  jobCategories: Category[];
  blogCategories: Category[];
  studyMaterialCategories: Category[];
  addJobCategory: (category: Category) => void;
  addBlogCategory: (category: Category) => void;
  addStudyMaterialCategory: (category: Category) => void;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
};

interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [jobCategories, setJobCategories] = useState<Category[]>([
    { value: 'software-development', label: 'Software Development' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'operations', label: 'Operations' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'finance', label: 'Finance' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'other', label: 'Other' }
  ]);

  const [blogCategories, setBlogCategories] = useState<Category[]>([
    { value: 'interviews', label: 'Interview Tips' },
    { value: 'coding', label: 'Coding & Development' },
    { value: 'career', label: 'Career Advice' },
    { value: 'resume', label: 'Resume Building' },
    { value: 'industry', label: 'Industry Insights' },
    { value: 'company', label: 'Company Specific' }
  ]);

  const [studyMaterialCategories, setStudyMaterialCategories] = useState<Category[]>([
    { value: 'interview', label: 'Interview Preparation' },
    { value: 'dsa', label: 'Data Structures & Algorithms' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'ai-ml', label: 'AI & ML' },
    { value: 'ai-tools', label: 'AI Tools' },
    { value: 'tcs', label: 'TCS Specific' },
    { value: 'wipro', label: 'Wipro Specific' },
    { value: 'infosys', label: 'Infosys Specific' },
    { value: 'cognizant', label: 'Cognizant Specific' },
    { value: 'accenture', label: 'Accenture Specific' }
  ]);

  const addJobCategory = (category: Category) => {
    setJobCategories(prev => [...prev, category]);
  };

  const addBlogCategory = (category: Category) => {
    setBlogCategories(prev => [...prev, category]);
  };

  const addStudyMaterialCategory = (category: Category) => {
    setStudyMaterialCategories(prev => [...prev, category]);
  };

  return (
    <CategoriesContext.Provider value={{
      jobCategories,
      blogCategories,
      studyMaterialCategories,
      addJobCategory,
      addBlogCategory,
      addStudyMaterialCategory
    }}>
      {children}
    </CategoriesContext.Provider>
  );
};
