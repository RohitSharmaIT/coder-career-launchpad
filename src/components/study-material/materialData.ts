
import { Book, FileText, Code, Globe, Brain, Zap } from "lucide-react";
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
  { id: 'web-development', name: 'Web Development', icon: Globe },
  { id: 'ai-ml', name: 'AI & ML', icon: Brain },
  { id: 'ai-tools', name: 'AI Tools', icon: Zap },
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
    date: "May 5, 2024",
    content: "This comprehensive guide covers all essential data structures and algorithms topics needed for technical interviews. It includes detailed explanations, code examples, and practice problems for arrays, linked lists, stacks, queues, trees, graphs, dynamic programming, and more.",
    author: "Tech Interview Experts",
    tags: ["DSA", "Interview", "Algorithms", "Data Structures", "Programming"]
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
    date: "April 20, 2024",
    content: "Complete collection of TCS NQT aptitude questions from previous years with step-by-step solutions. Covers quantitative aptitude, logical reasoning, and verbal ability sections.",
    author: "TCS Preparation Team",
    tags: ["TCS", "NQT", "Aptitude", "Quantitative", "Logical Reasoning"]
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
    date: "May 1, 2024",
    content: "Master system design interviews with this comprehensive guide. Learn how to design scalable systems, understand distributed system concepts, and practice with real-world examples like designing Twitter, Instagram, and WhatsApp.",
    author: "System Design Experts",
    tags: ["System Design", "Scalability", "Distributed Systems", "Architecture", "Interview"]
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
    date: "April 15, 2024",
    content: "Complete compilation of coding questions from Wipro ELITE recruitment with solutions in Java, Python, and C++. Includes array problems, string manipulation, and algorithmic challenges.",
    author: "Wipro Prep Team",
    tags: ["Wipro", "ELITE", "Coding", "Java", "Python", "C++"]
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
    date: "May 8, 2024",
    content: "Master graph algorithms with this advanced guide covering BFS, DFS, shortest path algorithms, minimum spanning trees, and complex graph problems with detailed implementations.",
    author: "Algorithm Masters",
    tags: ["Graphs", "BFS", "DFS", "Shortest Path", "MST", "Algorithms"]
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
    date: "April 10, 2024",
    content: "Comprehensive collection of Infosys Specialist Programmer interview questions covering technical coding problems, system design, and HR rounds with sample answers.",
    author: "Infosys Interview Panel",
    tags: ["Infosys", "SP", "Interview", "Technical", "HR", "Coding"]
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
    date: "May 3, 2024",
    content: "Complete guide to dynamic programming from basics to advanced. Covers memoization, tabulation, and classic DP problems like knapsack, LCS, and matrix chain multiplication.",
    author: "DP Experts",
    tags: ["Dynamic Programming", "Memoization", "Tabulation", "Optimization", "Algorithms"]
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
    date: "April 25, 2024",
    content: "Complete preparation guide for Cognizant GenC including aptitude questions, coding problems, and interview experiences from successful candidates.",
    author: "Cognizant Prep Team",
    tags: ["Cognizant", "GenC", "Aptitude", "Coding", "Interview", "Preparation"]
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
    date: "April 18, 2024",
    content: "Practice questions and coding problems from Accenture assessments with detailed solutions and tips for clearing the coding rounds successfully.",
    author: "Accenture Coding Team",
    tags: ["Accenture", "Coding", "Assessment", "Practice", "Solutions"]
  },
  {
    id: 10,
    title: "React Development Complete Guide",
    description: "Master React.js with hooks, context, and modern development practices.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    category: "web-development",
    type: "PDF",
    size: "8.1 MB",
    isPremium: true,
    downloadCount: 920,
    date: "May 10, 2024",
    content: "Complete React.js guide covering hooks, context API, state management, routing, and modern development practices with real-world projects and examples.",
    author: "React Developers",
    tags: ["React", "JavaScript", "Hooks", "Context", "Web Development", "Frontend"]
  },
  {
    id: 11,
    title: "Machine Learning Fundamentals",
    description: "Essential concepts and algorithms in machine learning with Python examples.",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    category: "ai-ml",
    type: "PDF",
    size: "12.5 MB",
    isPremium: true,
    downloadCount: 680,
    date: "May 12, 2024",
    content: "Comprehensive guide to machine learning fundamentals including supervised and unsupervised learning, neural networks, and practical implementation with Python.",
    author: "ML Experts",
    tags: ["Machine Learning", "Python", "Neural Networks", "AI", "Data Science"]
  },
  {
    id: 12,
    title: "ChatGPT for Developers",
    description: "Comprehensive guide to using AI tools effectively in software development.",
    thumbnail: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=800&q=80",
    category: "ai-tools",
    type: "PDF",
    size: "5.7 MB",
    isPremium: false,
    downloadCount: 1150,
    date: "May 15, 2024",
    content: "Learn how to effectively use ChatGPT and other AI tools in software development. Includes prompt engineering, code generation, debugging, and productivity tips.",
    author: "AI Tools Team",
    tags: ["ChatGPT", "AI Tools", "Prompt Engineering", "Development", "Productivity"]
  }
];
