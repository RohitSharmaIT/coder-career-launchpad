
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MaterialsGrid from "@/components/study-material/MaterialsGrid";
import PremiumCTA from "@/components/study-material/PremiumCTA";
import { allMaterials } from "@/components/study-material/materialData";
import { StudyMaterial } from "@/components/study-material/MaterialCard";
import { toast } from "sonner";

const StudyMaterialCategory = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Get category display name
  const getCategoryDisplayName = (cat: string) => {
    const categoryMap: { [key: string]: string } = {
      'interview': 'Interview Preparation',
      'dsa': 'Data Structures & Algorithms',
      'tcs': 'TCS Specific',
      'wipro': 'Wipro Specific',
      'infosys': 'Infosys Specific',
      'cognizant': 'Cognizant Specific',
      'accenture': 'Accenture Specific'
    };
    return categoryMap[cat || ''] || cat || 'Category';
  };

  const categoryDisplayName = getCategoryDisplayName(category || '');

  // Filter materials based on category and search term
  const filteredMaterials = allMaterials.filter(material => {
    const matchesCategory = category === 'all' || material.category === category?.toLowerCase();
    const matchesSearchTerm = material.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             material.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
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

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              onClick={() => navigate('/study-material')}
              className="mr-4"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Study Materials
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryDisplayName}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our curated collection of {categoryDisplayName.toLowerCase()} materials to enhance your skills and prepare for success.
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder={`Search ${categoryDisplayName.toLowerCase()} materials...`}
                className="pl-10 py-6 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Materials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {filteredMaterials.length} Material{filteredMaterials.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-gray-600">
              {searchTerm ? `Results for "${searchTerm}" in ${categoryDisplayName}` : `All ${categoryDisplayName} materials`}
            </p>
          </div>
          
          <MaterialsGrid 
            materials={filteredMaterials} 
            onDownload={handleDownload} 
          />
        </div>
      </section>
      
      {/* Subscribe Section */}
      <PremiumCTA />
      
      <Footer />
    </>
  );
};

export default StudyMaterialCategory;
