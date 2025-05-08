
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import CategorySidebar from "@/components/study-material/CategorySidebar";
import PremiumCTA from "@/components/study-material/PremiumCTA";
import { categories } from "@/components/study-material/materialData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronLeft, Download } from "lucide-react";

// Define the topic cards for the Complete DSA Interview Preparation
const dsaTopics = [
  {
    id: 101,
    title: "Arrays and Strings",
    description: "Fundamental techniques for working with arrays and strings, including in-place operations and sliding window.",
    difficulty: "Beginner"
  },
  {
    id: 102,
    title: "Linked Lists",
    description: "Common operations and techniques for manipulating singly and doubly linked lists.",
    difficulty: "Beginner"
  },
  {
    id: 103,
    title: "Stacks and Queues",
    description: "Implementation and applications of stack and queue data structures.",
    difficulty: "Beginner"
  },
  {
    id: 104,
    title: "Trees and Graphs",
    description: "Traversal algorithms, binary search trees, and graph search algorithms.",
    difficulty: "Intermediate"
  },
  {
    id: 105,
    title: "Dynamic Programming",
    description: "Solving optimization problems with overlapping subproblems and optimal substructure.",
    difficulty: "Advanced"
  },
  {
    id: 106,
    title: "Greedy Algorithms",
    description: "Solutions that make locally optimal choices at each stage.",
    difficulty: "Intermediate"
  },
  {
    id: 107,
    title: "Backtracking",
    description: "Algorithmic technique for solving problems recursively by building candidates to solutions incrementally.",
    difficulty: "Intermediate"
  },
  {
    id: 108,
    title: "Sorting and Searching",
    description: "Algorithms for sorting data and efficient searching techniques.",
    difficulty: "Beginner"
  },
  {
    id: 109,
    title: "Bit Manipulation",
    description: "Techniques for performing operations at the bit level to optimize space and time complexity.",
    difficulty: "Intermediate"
  },
  {
    id: 110,
    title: "System Design Basics",
    description: "Introduction to designing scalable systems and services.",
    difficulty: "Advanced"
  }
];

// Additional resources for the right sidebar
const additionalResources = [
  { 
    id: 1, 
    title: "Cracking the Coding Interview", 
    description: "Popular book with essential interview coding problems",
    link: "#"
  },
  { 
    id: 2, 
    title: "LeetCode Problem Sets", 
    description: "Practice platform with thousands of coding challenges",
    link: "#"
  },
  { 
    id: 3, 
    title: "AlgoExpert", 
    description: "Platform with curated list of 160+ algorithm questions",
    link: "#"
  },
  { 
    id: 4, 
    title: "Big-O Cheat Sheet", 
    description: "Time and space complexity reference guide",
    link: "#"
  },
];

const DsaTopicsPage = () => {
  const [activeCategory, setActiveCategory] = useState('DSA');
  
  const handleDownload = (id: number, isPremium: boolean = false) => {
    // Create a dummy PDF download
    const dummyPdfContent = "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL01lZGlhQm94WzAgMCA1OTUgODQyXS9Db250ZW50cyA0IDAgUj4+CmVuZG9iago0IDAgb2JqCjw8L0ZpbHRlci9GbGF0ZURlY29kZS9MZW5ndGggNTU+PnN0cmVhbQp4nDPQM1Qo5ypUMABCM0MjICWlYKRnZGAMpIxNTECUiYEmGhkbkaeJUC1dABYVBnYKZW5+DkEuAD5MBPEKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NCAwMDAwMCBuIAowMDAwMDAwMTE3IDAwMDAwIG4gCjAwMDAwMDAxOTYgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDUvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgozMTkKJSVFT0YK";
    
    const topic = dsaTopics.find(t => t.id === id) || {title: "DSA Topic"};
    const link = document.createElement('a');
    link.href = dummyPdfContent;
    link.download = `DSA_${topic.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Download started", {
      description: "Your file will download shortly"
    });
  };

  return (
    <>
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link to="/study-material" className="flex items-center text-brand-red hover:underline">
            <ChevronLeft size={16} className="mr-1" />
            Back to Study Materials
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <CategorySidebar 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
                categories={categories} 
              />
            </div>
            
            {/* Topics Content */}
            <div className="lg:w-2/4">
              <Card>
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-2xl font-bold">Complete DSA Interview Preparation - Topics</CardTitle>
                  <p className="text-gray-600 mt-2">
                    Master all essential topics for Data Structures and Algorithms interviews
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {dsaTopics.map((topic) => (
                      <AccordionItem key={topic.id} value={`topic-${topic.id}`}>
                        <AccordionTrigger className="py-4 hover:no-underline">
                          <div className="flex gap-3 items-center">
                            <BookOpen size={20} className="text-brand-red shrink-0" />
                            <div className="text-left">
                              <h3 className="font-medium text-lg">{topic.title}</h3>
                              <p className="text-sm text-gray-500">Difficulty: {topic.difficulty}</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="p-2 pt-0">
                            <p className="text-gray-700 mb-4">{topic.description}</p>
                            <div className="mt-4 bg-gray-50 p-4 rounded-md">
                              <h4 className="font-medium mb-2">What you'll learn:</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Key techniques and algorithms</li>
                                <li>Common interview questions</li>
                                <li>Time and space complexity analysis</li>
                                <li>Implementation strategies</li>
                              </ul>
                            </div>
                            <div className="flex justify-end mt-4">
                              <Button 
                                onClick={() => handleDownload(topic.id)}
                                variant="outline" 
                                className="text-sm border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                              >
                                <Download size={16} className="mr-2" />
                                Download Topic Materials
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6">Additional Resources</h3>
                <div className="space-y-4">
                  {additionalResources.map(resource => (
                    <div key={resource.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-gray-900">{resource.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                      <a 
                        href={resource.link} 
                        className="text-brand-red text-sm font-medium mt-2 inline-block hover:underline"
                      >
                        Learn more
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Ready to master DSA?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Download our complete DSA preparation guide and ace your next technical interview.
                  </p>
                  <Button 
                    onClick={() => handleDownload(100, true)}
                    className="w-full bg-brand-red hover:bg-red-700"
                  >
                    <Download size={16} className="mr-2" />
                    Download Complete Guide
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <PremiumCTA />
      
      <Footer />
    </>
  );
};

export default DsaTopicsPage;
