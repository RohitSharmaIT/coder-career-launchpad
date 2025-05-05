
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Book, FileText, Code, Download, Lock, Unlock } from "lucide-react";
import { toast } from "sonner";

const StudyMaterial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample categories
  const categories = [
    { id: 'all', name: 'All', icon: <Book size={18} /> },
    { id: 'interview', name: 'Interview Preparation', icon: <FileText size={18} /> },
    { id: 'dsa', name: 'Data Structures & Algorithms', icon: <Code size={18} /> },
    { id: 'tcs', name: 'TCS Specific', icon: <FileText size={18} /> },
    { id: 'wipro', name: 'Wipro Specific', icon: <FileText size={18} /> },
    { id: 'infosys', name: 'Infosys Specific', icon: <FileText size={18} /> },
    { id: 'cognizant', name: 'Cognizant Specific', icon: <FileText size={18} /> },
    { id: 'accenture', name: 'Accenture Specific', icon: <FileText size={18} /> }
  ];

  // Sample study materials
  const allMaterials = [
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
    
    // If all checks pass, proceed with download
    toast.success("Download started", {
      description: "Your file will download shortly"
    });
    
    // In a real application, you would trigger the actual download here
    console.log(`Downloading material with ID: ${id}`);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Study Material</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our curated collection of resources to prepare for interviews, assessments, and enhance your technical skills.
          </p>
          
          {/* Search Box */}
          <div className="max-w-2xl mx-auto mt-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search for study materials..."
              className="pl-10 py-6 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-bold mb-6">Categories</h2>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.name ? "default" : "outline"}
                      className={`w-full justify-start text-left mb-2 ${
                        activeCategory === category.name 
                          ? "bg-brand-red hover:bg-red-600" 
                          : "border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveCategory(category.name)}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Materials Grid */}
            <div className="lg:w-3/4">
              {filteredMaterials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMaterials.map((material) => (
                    <Card key={material.id} className="overflow-hidden">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={material.thumbnail} 
                          alt={material.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <Badge 
                          className={`absolute top-3 right-3 ${
                            material.isPremium ? "bg-yellow-500" : "bg-green-500"
                          }`}
                        >
                          {material.isPremium ? "Premium" : "Free"}
                        </Badge>
                      </div>
                      
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="line-clamp-1">{material.title}</CardTitle>
                            <CardDescription className="text-sm text-gray-500">
                              {material.date} • {material.type} • {material.size}
                            </CardDescription>
                          </div>
                          {material.isPremium ? 
                            <Lock size={18} className="text-yellow-500" /> : 
                            <Unlock size={18} className="text-green-500" />
                          }
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-gray-600 line-clamp-2">{material.description}</p>
                      </CardContent>
                      
                      <CardFooter className="flex justify-between border-t pt-4">
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">{material.downloadCount}</span> downloads
                        </div>
                        <Button 
                          onClick={() => handleDownload(material.id, material.isPremium)}
                          variant="outline" 
                          className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                        >
                          <Download size={16} className="mr-2" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">No materials found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or category filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Access to Premium Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Unlock premium study materials and ace your interviews and assessments with our expert resources.
          </p>
          <Button className="bg-brand-red hover:bg-red-600 text-white px-8 py-6 text-lg">
            Upgrade to Premium
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default StudyMaterial;
