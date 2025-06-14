
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import StudyHero from "@/components/study-material/StudyHero";
import StudyMaterialContent from "@/components/study-material/StudyMaterialContent";
import DsaTopicsSection from "@/components/study-material/DsaTopicsSection";
import PremiumCTA from "@/components/study-material/PremiumCTA";
import { allMaterials } from "@/components/study-material/materialData";
import { StudyMaterial as StudyMaterialType } from "@/components/study-material/MaterialCard";
import { useStudyMaterials } from "@/contexts/StudyMaterialsContext";
import { useStudyMaterialDownload } from "@/hooks/useStudyMaterialDownload";

const StudyMaterial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialMaterial, setSelectedSpecialMaterial] = useState<StudyMaterialType | null>(null);
  const navigate = useNavigate();
  const { studyMaterials } = useStudyMaterials();
  const { handleDownload } = useStudyMaterialDownload();

  // Combine static materials with dynamic ones from context
  const combinedMaterials = [...studyMaterials, ...allMaterials];

  // Filter materials by search term only
  const filteredMaterials = combinedMaterials.filter(material => {
    const matchesSearchTerm = material.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             material.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearchTerm;
  });

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

  const handleDsaTopicHeaderClick = () => {
    // Navigate to a dedicated DSA topics page
    navigate('/study-material/dsa-topics');
  };

  const handleCategoriesClick = () => {
    navigate('/study-material/categories');
  };

  return (
    <div className="pt-20">
      <Navbar />
      
      {/* Hero Section with Search */}
      <StudyHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {/* Main Content */}
      <StudyMaterialContent
        filteredMaterials={filteredMaterials}
        onDownload={handleDownload}
        onSpecialCardClick={handleSpecialCardClick}
        onCategoriesClick={handleCategoriesClick}
      />

      {/* DSA Topics Section - Only visible when special card is clicked */}
      <DsaTopicsSection
        selectedSpecialMaterial={selectedSpecialMaterial}
        onDownload={handleDownload}
        onDsaTopicHeaderClick={handleDsaTopicHeaderClick}
      />
      
      {/* Subscribe Section */}
      <PremiumCTA />
      
      <Footer />
    </div>
  );
};

export default StudyMaterial;
