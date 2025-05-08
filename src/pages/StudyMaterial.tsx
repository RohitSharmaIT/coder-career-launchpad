
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import StudyHero from "@/components/study-material/StudyHero";
import CategorySidebar from "@/components/study-material/CategorySidebar";
import MaterialsGrid from "@/components/study-material/MaterialsGrid";
import PremiumCTA from "@/components/study-material/PremiumCTA";
import { categories, allMaterials } from "@/components/study-material/materialData";
import { StudyMaterial as StudyMaterialType } from "@/components/study-material/MaterialCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight, BookOpen } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
  }
];

const StudyMaterial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSpecialMaterial, setSelectedSpecialMaterial] = useState<StudyMaterialType | null>(null);

  // Filter materials based on search term and active category
  const filteredMaterials = allMaterials.filter(material => {
    const matchesSearchTerm = material.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             material.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || material.category === activeCategory.toLowerCase();
    
    return matchesSearchTerm && matchesCategory;
  });

  const handleDownload = (id: number, isPremium: boolean) => {
    // Check if user is logged in (implement this based on your auth system)
    const isLoggedIn = false;
    const hasPremiumAccess = false;
    
    if (!isLoggedIn) {
      toast.error("Please log in to download study materials", {
        action: {
          label: "Login",
          onClick: () => {
            // Redirect to login page
            window.location.href = "/login";
          }
        }
      });
      return;
    }
    
    if (isPremium && !hasPremiumAccess) {
      toast.error("This is a premium resource", {
        description: "Upgrade to access premium study materials",
        action: {
          label: "Upgrade",
          onClick: () => {
            // Redirect to upgrade page
            console.log("Redirect to upgrade page");
          }
        }
      });
      return;
    }
    
    // Create a dummy PDF download
    const dummyPdfContent = "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL01lZGlhQm94WzAgMCA1OTUgODQyXS9Db250ZW50cyA0IDAgUj4+CmVuZG9iago0IDAgb2JqCjw8L0ZpbHRlci9GbGF0ZURlY29kZS9MZW5ndGggNTU+PnN0cmVhbQp4nDPQM1Qo5ypUMABCM0MjICWlYKRnZGAMpIxNTECUiYEmGhkbkaeJUC1dABYVBnYKZW5+DkEuAD5MBPEKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NCAwMDAwMCBuIAowMDAwMDAwMTE3IDAwMDAwIG4gCjAwMDAwMDAxOTYgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDUvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgozMTkKJSVFT0YK";
    
    const material = allMaterials.find(m => m.id === id) || {title: "Study Material"};
    const link = document.createElement('a');
    link.href = dummyPdfContent;
    link.download = `${material.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Download started", {
      description: "Your file will download shortly"
    });
  };

  const handleSpecialCardClick = (material: StudyMaterialType) => {
    setSelectedSpecialMaterial(material);
    // Scroll to the topics section
    setTimeout(() => {
      const topicsSection = document.getElementById('dsa-topics-section');
      if (topicsSection) {
        topicsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Search */}
      <StudyHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Categories Sidebar */}
            <CategorySidebar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              categories={categories} 
            />
            
            {/* Materials Grid */}
            <div className="lg:w-3/4">
              <MaterialsGrid 
                materials={filteredMaterials} 
                onDownload={handleDownload} 
                onSpecialCardClick={handleSpecialCardClick}
              />

              {/* DSA Topics Section - Only visible when special card is clicked */}
              {selectedSpecialMaterial && selectedSpecialMaterial.id === 1 && (
                <div id="dsa-topics-section" className="mt-16 pt-8 border-t">
                  <Card>
                    <CardHeader className="bg-gray-50">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl font-bold">
                          {selectedSpecialMaterial.title} - Topics
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {dsaTopics.map((topic) => (
                          <Collapsible key={topic.id} className="border rounded-lg">
                            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                              <div className="flex gap-3 items-center">
                                <BookOpen size={20} className="text-brand-red" />
                                <div>
                                  <h3 className="font-medium">{topic.title}</h3>
                                  <p className="text-sm text-gray-500">Difficulty: {topic.difficulty}</p>
                                </div>
                              </div>
                              <div className="text-gray-400">
                                {/* Toggle icon */}
                                <ChevronDown className="h-5 w-5 collapsible-closed:hidden" />
                                <ChevronRight className="h-5 w-5 collapsible-open:hidden" />
                              </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="p-4 pt-0 border-t">
                                <p className="text-gray-700 mb-4">{topic.description}</p>
                                <div className="flex justify-end">
                                  <Button 
                                    onClick={() => handleDownload(selectedSpecialMaterial.id, false)}
                                    variant="outline" 
                                    className="text-sm border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                                  >
                                    <Download size={16} className="mr-2" />
                                    Download Topic
                                  </Button>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
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

export default StudyMaterial;
