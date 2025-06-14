
import { Badge } from "@/components/ui/badge";
import { Eye, BarChart3 } from "lucide-react";

interface StudyMaterial {
  category: string;
  type: string;
  downloadCount: number;
}

interface StudyMaterialMetricsProps {
  material: StudyMaterial;
}

const StudyMaterialMetrics = ({ material }: StudyMaterialMetricsProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Badge className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Category</p>
            <p className="text-base font-semibold text-gray-900">{material.category}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Type</p>
            <p className="text-base font-semibold text-gray-900">{material.type}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Downloads</p>
            <p className="text-base font-semibold text-gray-900">{material.downloadCount.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialMetrics;
