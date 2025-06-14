
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allMaterials } from "@/components/study-material/materialData";
import StudyMaterialBreadcrumbs from "@/components/study-material/StudyMaterialBreadcrumbs";
import StudyMaterialCategoriesSidebar from "@/components/study-material/StudyMaterialCategoriesSidebar";
import StudyMaterialDetailsContent from "@/components/study-material/StudyMaterialDetailsContent";
import StudyMaterialInfoSidebar from "@/components/study-material/StudyMaterialInfoSidebar";

const StudyMaterialDetails = () => {
  const { id } = useParams();
  
  const material = allMaterials.find(m => m.id === parseInt(id || '0'));
  
  if (!material) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Material Not Found</h1>
            <Link to="/study-material" className="text-brand-red hover:underline">
              Back to Study Materials
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <StudyMaterialBreadcrumbs />
      
      {/* Main Content */}
      <section className="py-6 sm:py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
            <StudyMaterialCategoriesSidebar />
            <StudyMaterialDetailsContent material={material} />
            <StudyMaterialInfoSidebar material={material} />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default StudyMaterialDetails;
