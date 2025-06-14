
import { Book, FileText, Code, Globe, Brain, Zap } from "lucide-react";
import { StudyMaterial } from "./MaterialCard";
import { LucideIcon } from "lucide-react";

// Define a type for our category items
export interface CategoryItem {
  id: string;
  name: string;
  icon: LucideIcon;
  topics?: string[];
}

// Sample categories with study topics
export const categories: CategoryItem[] = [
  { 
    id: 'all', 
    name: 'All', 
    icon: Book 
  },
  { 
    id: 'interview', 
    name: 'Interview Preparation', 
    icon: FileText,
    topics: ['Technical Interviews', 'Behavioral Questions', 'System Design', 'Coding Challenges', 'Mock Interviews']
  },
  { 
    id: 'dsa', 
    name: 'Data Structures & Algorithms', 
    icon: Code,
    topics: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching']
  },
  { 
    id: 'web-development', 
    name: 'Web Development', 
    icon: Globe,
    topics: ['React.js', 'Node.js', 'JavaScript ES6+', 'CSS3 & HTML5', 'API Development']
  },
  { 
    id: 'ai-ml', 
    name: 'AI & ML', 
    icon: Brain,
    topics: ['Machine Learning Basics', 'Neural Networks', 'Deep Learning', 'Python for ML', 'Data Science']
  },
  { 
    id: 'ai-tools', 
    name: 'AI Tools', 
    icon: Zap,
    topics: ['ChatGPT for Developers', 'GitHub Copilot', 'AI Code Generation', 'Prompt Engineering', 'AI Productivity']
  },
  { 
    id: 'tcs', 
    name: 'TCS Specific', 
    icon: FileText,
    topics: ['TCS NQT Preparation', 'TCS Digital Exam', 'TCS Ninja Process', 'TCS Aptitude', 'TCS Coding Questions']
  },
  { 
    id: 'wipro', 
    name: 'Wipro Specific', 
    icon: FileText,
    topics: ['Wipro ELITE', 'Wipro WILP', 'Wipro Aptitude', 'Wipro Coding Test', 'Wipro Interview Process']
  },
  { 
    id: 'infosys', 
    name: 'Infosys Specific', 
    icon: FileText,
    topics: ['Infosys Specialist Programmer', 'Infosys Power Programmer', 'Infosys Aptitude', 'Infosys Coding', 'Infosys HackWithInfy']
  },
  { 
    id: 'cognizant', 
    name: 'Cognizant Specific', 
    icon: FileText,
    topics: ['Cognizant GenC', 'Cognizant GenC Elevate', 'Cognizant Aptitude', 'Cognizant Coding Assessment', 'Cognizant Interview']
  },
  { 
    id: 'accenture', 
    name: 'Accenture Specific', 
    icon: FileText,
    topics: ['Accenture Aptitude', 'Accenture Coding', 'Accenture Communication Test', 'Accenture Interview Tips', 'Accenture ASE Process']
  }
];

// Sample study materials with 4 materials per category
export const allMaterials: StudyMaterial[] = [
  // Interview Preparation Materials (4)
  {
    id: 1,
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
    id: 2,
    title: "Behavioral Interview Questions",
    description: "Complete guide to common behavioral interview questions with sample answers.",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    category: "interview",
    type: "PDF",
    size: "2.5 MB",
    isPremium: false,
    downloadCount: 890,
    date: "April 28, 2024",
    content: "Comprehensive collection of behavioral interview questions with detailed sample answers and strategies for STAR method responses.",
    author: "HR Interview Team",
    tags: ["Behavioral", "Interview", "STAR Method", "HR", "Communication"]
  },
  {
    id: 3,
    title: "Technical Interview Preparation",
    description: "Essential guide for technical rounds covering coding problems and problem-solving strategies.",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    category: "interview",
    type: "PDF",
    size: "4.8 MB",
    isPremium: true,
    downloadCount: 650,
    date: "May 5, 2024",
    content: "Master technical interviews with coding problems, whiteboard techniques, and problem-solving frameworks used by top tech companies.",
    author: "Tech Interview Experts",
    tags: ["Technical", "Coding", "Problem Solving", "Algorithms", "Interview"]
  },
  {
    id: 4,
    title: "Mock Interview Guide",
    description: "Step-by-step guide to conducting and participating in effective mock interviews.",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    category: "interview",
    type: "PDF",
    size: "3.2 MB",
    isPremium: false,
    downloadCount: 430,
    date: "April 22, 2024",
    content: "Learn how to prepare for and conduct mock interviews effectively with practical tips and evaluation criteria.",
    author: "Interview Prep Team",
    tags: ["Mock Interview", "Practice", "Preparation", "Evaluation", "Tips"]
  },

  // DSA Materials (4)
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
    id: 7,
    title: "Tree Data Structures Guide",
    description: "Comprehensive guide to tree data structures including binary trees, BSTs, and advanced trees.",
    thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
    category: "dsa",
    type: "PDF",
    size: "4.7 MB",
    isPremium: false,
    downloadCount: 680,
    date: "April 30, 2024",
    content: "Master tree data structures with detailed explanations of binary trees, BSTs, AVL trees, and tree traversal algorithms.",
    author: "Tree Algorithm Team",
    tags: ["Trees", "Binary Trees", "BST", "AVL", "Traversal", "Data Structures"]
  },
  {
    id: 8,
    title: "Array and String Algorithms",
    description: "Essential algorithms for arrays and strings with optimized solutions and complexity analysis.",
    thumbnail: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80",
    category: "dsa",
    type: "PDF",
    size: "3.9 MB",
    isPremium: false,
    downloadCount: 850,
    date: "April 25, 2024",
    content: "Master array and string manipulation with sliding window, two pointers, and other essential techniques.",
    author: "Array String Team",
    tags: ["Arrays", "Strings", "Sliding Window", "Two Pointers", "Algorithms"]
  },

  // Web Development Materials (4)
  {
    id: 9,
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
    id: 10,
    title: "Node.js Backend Development",
    description: "Comprehensive guide to building scalable backend applications with Node.js and Express.",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    category: "web-development",
    type: "PDF",
    size: "6.8 MB",
    isPremium: true,
    downloadCount: 750,
    date: "May 7, 2024",
    content: "Learn Node.js backend development with Express, database integration, authentication, and API design best practices.",
    author: "Backend Dev Team",
    tags: ["Node.js", "Express", "Backend", "API", "Database", "Authentication"]
  },
  {
    id: 11,
    title: "JavaScript ES6+ Features",
    description: "Modern JavaScript features and best practices for contemporary web development.",
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80",
    category: "web-development",
    type: "PDF",
    size: "4.2 MB",
    isPremium: false,
    downloadCount: 1100,
    date: "April 20, 2024",
    content: "Master modern JavaScript with ES6+ features including arrow functions, destructuring, async/await, and modules.",
    author: "JS Experts",
    tags: ["JavaScript", "ES6", "Modern JS", "Arrow Functions", "Async Await"]
  },
  {
    id: 12,
    title: "CSS3 and Responsive Design",
    description: "Complete guide to modern CSS3 features and responsive web design techniques.",
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    category: "web-development",
    type: "PDF",
    size: "5.5 MB",
    isPremium: false,
    downloadCount: 890,
    date: "April 18, 2024",
    content: "Learn advanced CSS3 features, flexbox, grid, animations, and responsive design principles for modern web development.",
    author: "CSS Design Team",
    tags: ["CSS3", "Responsive Design", "Flexbox", "Grid", "Animations"]
  },

  // AI & ML Materials (4)
  {
    id: 13,
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
    id: 14,
    title: "Deep Learning with TensorFlow",
    description: "Practical guide to deep learning implementation using TensorFlow and Keras.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    category: "ai-ml",
    type: "PDF",
    size: "9.8 MB",
    isPremium: true,
    downloadCount: 540,
    date: "May 15, 2024",
    content: "Learn deep learning concepts and implementation with TensorFlow, covering neural networks, CNNs, RNNs, and practical projects.",
    author: "Deep Learning Team",
    tags: ["Deep Learning", "TensorFlow", "Keras", "Neural Networks", "CNN", "RNN"]
  },
  {
    id: 15,
    title: "Python for Data Science",
    description: "Complete Python programming guide for data science and machine learning applications.",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    category: "ai-ml",
    type: "PDF",
    size: "7.2 MB",
    isPremium: false,
    downloadCount: 950,
    date: "April 28, 2024",
    content: "Master Python for data science with pandas, numpy, matplotlib, and scikit-learn for data analysis and machine learning.",
    author: "Python Data Team",
    tags: ["Python", "Data Science", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
  },
  {
    id: 16,
    title: "Neural Network Architecture",
    description: "In-depth guide to designing and understanding neural network architectures.",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    category: "ai-ml",
    type: "PDF",
    size: "6.9 MB",
    isPremium: true,
    downloadCount: 420,
    date: "May 2, 2024",
    content: "Understand neural network architectures from perceptrons to transformers with practical implementation examples.",
    author: "Neural Network Team",
    tags: ["Neural Networks", "Architecture", "Perceptrons", "Transformers", "AI"]
  },

  // AI Tools Materials (4)
  {
    id: 17,
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
  },
  {
    id: 18,
    title: "GitHub Copilot Mastery",
    description: "Master GitHub Copilot for enhanced coding productivity and AI-assisted development.",
    thumbnail: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=800&q=80",
    category: "ai-tools",
    type: "PDF",
    size: "4.3 MB",
    isPremium: true,
    downloadCount: 720,
    date: "May 8, 2024",
    content: "Learn to use GitHub Copilot effectively for code completion, generation, and debugging to boost your development productivity.",
    author: "Copilot Team",
    tags: ["GitHub Copilot", "AI Coding", "Code Generation", "Productivity", "Development"]
  },
  {
    id: 19,
    title: "AI Code Generation Tools",
    description: "Comprehensive overview of AI-powered code generation tools and their applications.",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    category: "ai-tools",
    type: "PDF",
    size: "6.1 MB",
    isPremium: false,
    downloadCount: 830,
    date: "April 30, 2024",
    content: "Explore various AI code generation tools including Copilot, Tabnine, and CodeT5 for enhanced development workflows.",
    author: "AI Code Team",
    tags: ["AI Code Generation", "Tabnine", "CodeT5", "Development Tools", "Automation"]
  },
  {
    id: 20,
    title: "Prompt Engineering Guide",
    description: "Advanced techniques for crafting effective prompts for AI development tools.",
    thumbnail: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=800&q=80",
    category: "ai-tools",
    type: "PDF",
    size: "3.8 MB",
    isPremium: true,
    downloadCount: 640,
    date: "May 5, 2024",
    content: "Master the art of prompt engineering to get better results from AI tools like ChatGPT, Claude, and other language models.",
    author: "Prompt Engineers",
    tags: ["Prompt Engineering", "AI Communication", "Language Models", "Optimization"]
  },

  // TCS Specific Materials (4)
  {
    id: 21,
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
    id: 22,
    title: "TCS Digital Coding Questions",
    description: "Comprehensive collection of TCS Digital exam coding problems with multiple language solutions.",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    category: "tcs",
    type: "PDF",
    size: "4.2 MB",
    isPremium: true,
    downloadCount: 760,
    date: "April 25, 2024",
    content: "Master TCS Digital coding rounds with previous year questions and optimized solutions in Java, Python, and C++.",
    author: "TCS Digital Team",
    tags: ["TCS", "Digital", "Coding", "Java", "Python", "C++"]
  },
  {
    id: 23,
    title: "TCS Ninja Interview Guide",
    description: "Complete preparation guide for TCS Ninja interview process including technical and HR rounds.",
    thumbnail: "https://images.unsplash.com/photo-1507642217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    category: "tcs",
    type: "PDF",
    size: "3.5 MB",
    isPremium: false,
    downloadCount: 870,
    date: "April 15, 2024",
    content: "Comprehensive guide for TCS Ninja interviews covering technical questions, HR preparation, and company-specific topics.",
    author: "TCS Interview Team",
    tags: ["TCS", "Ninja", "Interview", "Technical", "HR", "Company"]
  },
  {
    id: 24,
    title: "TCS Communication Skills Test",
    description: "Preparation material for TCS communication and English proficiency assessment.",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    category: "tcs",
    type: "PDF",
    size: "2.1 MB",
    isPremium: false,
    downloadCount: 650,
    date: "April 12, 2024",
    content: "Improve your communication skills for TCS assessments with speaking, writing, and comprehension exercises.",
    author: "TCS Communication Team",
    tags: ["TCS", "Communication", "English", "Speaking", "Writing"]
  },

  // Wipro Specific Materials (4)
  {
    id: 25,
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
    id: 26,
    title: "Wipro WILP Entrance Exam",
    description: "Preparation guide for Wipro Work Integrated Learning Program entrance examination.",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    category: "wipro",
    type: "PDF",
    size: "5.2 MB",
    isPremium: true,
    downloadCount: 420,
    date: "April 22, 2024",
    content: "Complete guide for Wipro WILP entrance exam covering aptitude, technical subjects, and programming concepts.",
    author: "WILP Preparation Team",
    tags: ["Wipro", "WILP", "Entrance", "Aptitude", "Technical", "Programming"]
  },
  {
    id: 27,
    title: "Wipro Aptitude Test Papers",
    description: "Previous year Wipro aptitude test papers with detailed solutions and time management tips.",
    thumbnail: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    category: "wipro",
    type: "PDF",
    size: "3.8 MB",
    isPremium: false,
    downloadCount: 690,
    date: "April 18, 2024",
    content: "Master Wipro aptitude tests with previous year papers covering quantitative aptitude, logical reasoning, and verbal ability.",
    author: "Wipro Aptitude Team",
    tags: ["Wipro", "Aptitude", "Test Papers", "Quantitative", "Logical", "Verbal"]
  },
  {
    id: 28,
    title: "Wipro Interview Experience",
    description: "Real interview experiences and preparation strategies for Wipro recruitment process.",
    thumbnail: "https://images.unsplash.com/photo-1507642217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    category: "wipro",
    type: "PDF",
    size: "2.9 MB",
    isPremium: false,
    downloadCount: 750,
    date: "April 20, 2024",
    content: "Learn from real Wipro interview experiences with technical and HR round insights from successful candidates.",
    author: "Wipro Interview Team",
    tags: ["Wipro", "Interview", "Experience", "Technical", "HR", "Success Stories"]
  },

  // Infosys Specific Materials (4)
  {
    id: 29,
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
    id: 30,
    title: "Infosys Power Programmer Prep",
    description: "Advanced preparation material for Infosys Power Programmer recruitment process.",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    category: "infosys",
    type: "PDF",
    size: "4.7 MB",
    isPremium: true,
    downloadCount: 520,
    date: "April 28, 2024",
    content: "Advanced coding problems and system design concepts for Infosys Power Programmer role with detailed explanations.",
    author: "Power Programmer Team",
    tags: ["Infosys", "Power Programmer", "Advanced", "Coding", "System Design"]
  },
  {
    id: 31,
    title: "Infosys HackWithInfy Guide",
    description: "Complete guide to participating and excelling in Infosys HackWithInfy competition.",
    thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80",
    category: "infosys",
    type: "PDF",
    size: "3.6 MB",
    isPremium: false,
    downloadCount: 580,
    date: "April 25, 2024",
    content: "Master the HackWithInfy competition with problem-solving strategies, previous year problems, and winning approaches.",
    author: "HackWithInfy Team",
    tags: ["Infosys", "HackWithInfy", "Competition", "Problem Solving", "Algorithm"]
  },
  {
    id: 32,
    title: "Infosys Aptitude and Reasoning",
    description: "Comprehensive aptitude and logical reasoning preparation for Infosys recruitment.",
    thumbnail: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    category: "infosys",
    type: "PDF",
    size: "4.1 MB",
    isPremium: false,
    downloadCount: 790,
    date: "April 8, 2024",
    content: "Complete aptitude and reasoning preparation with Infosys-specific patterns and previous year questions.",
    author: "Infosys Aptitude Team",
    tags: ["Infosys", "Aptitude", "Logical Reasoning", "Quantitative", "Pattern"]
  },

  // Cognizant Specific Materials (4)
  {
    id: 33,
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
    id: 34,
    title: "Cognizant GenC Elevate Program",
    description: "Advanced preparation material for Cognizant GenC Elevate program.",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    category: "cognizant",
    type: "PDF",
    size: "4.5 MB",
    isPremium: true,
    downloadCount: 380,
    date: "May 1, 2024",
    content: "Advanced material for Cognizant GenC Elevate program covering higher-level coding problems and system design concepts.",
    author: "GenC Elevate Team",
    tags: ["Cognizant", "GenC Elevate", "Advanced", "System Design", "Coding"]
  },
  {
    id: 35,
    title: "Cognizant Coding Assessment",
    description: "Practice problems and solutions for Cognizant coding assessment rounds.",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    category: "cognizant",
    type: "PDF",
    size: "3.7 MB",
    isPremium: false,
    downloadCount: 680,
    date: "April 20, 2024",
    content: "Master Cognizant coding assessments with practice problems, optimized solutions, and time management strategies.",
    author: "Cognizant Coding Team",
    tags: ["Cognizant", "Coding Assessment", "Practice", "Solutions", "Optimization"]
  },
  {
    id: 36,
    title: "Cognizant Interview Process",
    description: "Complete guide to Cognizant interview process including technical and managerial rounds.",
    thumbnail: "https://images.unsplash.com/photo-1507642217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    category: "cognizant",
    type: "PDF",
    size: "2.8 MB",
    isPremium: false,
    downloadCount: 720,
    date: "April 15, 2024",
    content: "Navigate Cognizant's interview process with insights into technical, managerial, and HR rounds.",
    author: "Cognizant Interview Team",
    tags: ["Cognizant", "Interview Process", "Technical", "Managerial", "HR"]
  },

  // Accenture Specific Materials (4)
  {
    id: 37,
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
    id: 38,
    title: "Accenture Aptitude Test Guide",
    description: "Complete aptitude preparation guide specifically designed for Accenture recruitment.",
    thumbnail: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    category: "accenture",
    type: "PDF",
    size: "3.2 MB",
    isPremium: false,
    downloadCount: 650,
    date: "April 22, 2024",
    content: "Master Accenture aptitude tests with quantitative aptitude, logical reasoning, and verbal ability sections.",
    author: "Accenture Aptitude Team",
    tags: ["Accenture", "Aptitude", "Quantitative", "Logical", "Verbal", "Test"]
  },
  {
    id: 39,
    title: "Accenture Communication Test",
    description: "Preparation guide for Accenture communication and English assessment.",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    category: "accenture",
    type: "PDF",
    size: "2.7 MB",
    isPremium: true,
    downloadCount: 480,
    date: "April 28, 2024",
    content: "Excel in Accenture communication tests with speaking, listening, and writing skill development exercises.",
    author: "Accenture Communication Team",
    tags: ["Accenture", "Communication", "English", "Speaking", "Writing", "Assessment"]
  },
  {
    id: 40,
    title: "Accenture ASE Interview Tips",
    description: "Interview preparation guide for Accenture Associate Software Engineer position.",
    thumbnail: "https://images.unsplash.com/photo-1507642217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    category: "accenture",
    type: "PDF",
    size: "3.1 MB",
    isPremium: false,
    downloadCount: 590,
    date: "May 2, 2024",
    content: "Comprehensive interview guide for Accenture ASE role covering technical questions, behavioral assessment, and company culture.",
    author: "Accenture ASE Team",
    tags: ["Accenture", "ASE", "Interview", "Software Engineer", "Technical", "Behavioral"]
  }
];
