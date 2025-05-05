
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import StudyHero from "@/components/study-material/StudyHero";
import CategorySidebar from "@/components/study-material/CategorySidebar";
import MaterialsGrid from "@/components/study-material/MaterialsGrid";
import PremiumCTA from "@/components/study-material/PremiumCTA";
import { categories, allMaterials } from "@/components/study-material/materialData";

const StudyMaterial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

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
              />
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
