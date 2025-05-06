
import { Book, FileText, Code } from "lucide-react";
import { StudyMaterial } from "./MaterialCard";
import { LucideIcon } from "lucide-react";

// Define a type for our category items
export interface CategoryItem {
  id: string;
  name: string;
  icon: LucideIcon;
}

// Sample categories
export const categories: CategoryItem[] = [
  { id: 'all', name: 'All', icon: Book },
  { id: 'interview', name: 'Interview Preparation', icon: FileText },
  { id: 'dsa', name: 'Data Structures & Algorithms', icon: Code },
  { id: 'tcs', name: 'TCS Specific', icon: FileText },
  { id: 'wipro', name: 'Wipro Specific', icon: FileText },
  { id: 'infosys', name: 'Infosys Specific', icon: FileText },
  { id: 'cognizant', name: 'Cognizant Specific', icon: FileText },
  { id: 'accenture', name: 'Accenture Specific', icon: FileText }
];

// Sample study materials
export const allMaterials: StudyMaterial[] = [
  {
    id: 1,
    title: "Complete DSA Interview Preparation",
    description: "Comprehensive guide covering all essential DSA topics for technical interviews.",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    category: "interview",
    type: "PDF",
    size: "4.2 MB",
    isPremium: false,
    downloadCount: 1250,
    date: "May 5, 2024"
  },
  {
    id: 2,
    title: "TCS NQT Aptitude Questions",
    description: "Collection of previous TCS NQT aptitude questions with detailed solutions and explanations.",
    thumbnail: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    category: "tcs",
    type: "PDF",
    size: "2.8 MB",
    isPremium: false,
    downloadCount: 980,
    date: "April 20, 2024"
  },
  {
    id: 3,
    title: "System Design Interview Guide",
    description: "Learn how to approach system design questions with detailed examples and frameworks.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    category: "interview",
    type: "PDF",
    size: "6.1 MB",
    isPremium: true,
    downloadCount: 740,
    date: "May 1, 2024"
  },
  {
    id: 4,
    title: "Wipro ELITE Coding Questions",
    description: "Compilation of coding questions asked in Wipro ELITE with solutions in multiple languages.",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    category: "wipro",
    type: "PDF",
    size: "3.5 MB",
    isPremium: false,
    downloadCount: 820,
    date: "April 15, 2024"
  },
  {
    id: 5,
    title: "Advanced Graph Algorithms",
    description: "In-depth coverage of graph algorithms with implementation and practice problems.",
    thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    category: "dsa",
    type: "PDF",
    size: "5.2 MB",
    isPremium: true,
    downloadCount: 520,
    date: "May 8, 2024"
  },
  {
    id: 6,
    title: "Infosys SP Interview Questions",
    description: "Curated list of technical and HR questions from recent Infosys SP interviews.",
    thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    category: "infosys",
    type: "PDF",
    size: "1.8 MB",
    isPremium: false,
    downloadCount: 670,
    date: "April 10, 2024"
  },
  {
    id: 7,
    title: "Dynamic Programming Masterclass",
    description: "Step-by-step guide to mastering dynamic programming with practice problems and solutions.",
    thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80",
    category: "dsa",
    type: "PDF",
    size: "7.3 MB",
    isPremium: true,
    downloadCount: 430,
    date: "May 3, 2024"
  },
  {
    id: 8,
    title: "Cognizant GenC Preparation Guide",
    description: "Comprehensive preparation material for Cognizant GenC recruitment process.",
    thumbnail: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=800&q=80",
    category: "cognizant",
    type: "PDF",
    size: "3.0 MB",
    isPremium: false,
    downloadCount: 590,
    date: "April 25, 2024"
  },
  {
    id: 9,
    title: "Accenture Coding Assessment",
    description: "Practice questions and tips for Accenture coding assessment rounds.",
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    category: "accenture",
    type: "PDF",
    size: "2.5 MB",
    isPremium: false,
    downloadCount: 720,
    date: "April 18, 2024"
  }
];
