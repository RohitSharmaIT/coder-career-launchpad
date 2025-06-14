import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allMaterials } from "@/components/study-material/materialData";
import { useStudyMaterials } from "@/contexts/StudyMaterialsContext";
import StudyMaterialBreadcrumbs from "@/components/study-material/StudyMaterialBreadcrumbs";
import StudyMaterialCategoriesSidebar from "@/components/study-material/StudyMaterialCategoriesSidebar";
import StudyMaterialDetailsContent from "@/components/study-material/StudyMaterialDetailsContent";
import StudyMaterialInfoSidebar from "@/components/study-material/StudyMaterialInfoSidebar";

const StudyMaterialDetails = () => {
  const { id } = useParams();
  const { studyMaterials } = useStudyMaterials();
  
  // Combine static materials with dynamic ones from context
  const combinedMaterials = [...studyMaterials, ...allMaterials];
  
  const material = combinedMaterials.find(m => m.id === parseInt(id || '0'));
  
  if (!material) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold mb-4">Material Not Found</h1>
            <Link to="/study-material" className="text-brand-red hover:underline">
              Back to Study Materials
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <StudyMaterialBreadcrumbs />
        
        {/* Main Content */}
        <section className="bg-white">
          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar - Categories */}
            <div className="lg:w-1/4">
              <StudyMaterialCategoriesSidebar />
            </div>
            
            {/* Main Content Area */}
            <div className="lg:w-1/2">
              <StudyMaterialDetailsContent material={material} />
            </div>
            
            {/* Right Sidebar - Material Info */}
            <div className="lg:w-1/4">
              <StudyMaterialInfoSidebar material={material} />
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default StudyMaterialDetails;
