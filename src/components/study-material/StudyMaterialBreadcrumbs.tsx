
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const StudyMaterialBreadcrumbs = () => {
  return (
    <div className="bg-gray-50 py-3 sm:py-4">
      <div className="container mx-auto px-4">
        <Link to="/study-material" className="flex items-center text-brand-red hover:underline text-xs sm:text-sm lg:text-base">
          <ChevronLeft size={14} className="mr-1" />
          Back to Study Materials
        </Link>
      </div>
    </div>
  );
};

export default StudyMaterialBreadcrumbs;
