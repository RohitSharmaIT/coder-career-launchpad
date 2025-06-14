
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface StudyMaterialContentRendererProps {
  content: string;
  isPremium: boolean;
}

const StudyMaterialContentRenderer = ({ content, isPremium }: StudyMaterialContentRendererProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isPremiumUser = user?.premium || false;

  const handleUpgradeClick = () => {
    navigate('/upgrade-simple');
  };

  if (isPremium && !isPremiumUser) {
    const textContent = content.replace(/<[^>]*>/g, '');
    const truncatedText = textContent.substring(0, 200) + '...';
    return (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">{truncatedText}</p>
        <div className="bg-gradient-to-t from-white to-transparent p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3">
            <Lock className="text-amber-600" size={20} />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Upgrade to premium to access full content
          </p>
          <Button 
            size="sm" 
            className="bg-brand-red hover:bg-red-600"
            onClick={handleUpgradeClick}
          >
            Upgrade Now
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default StudyMaterialContentRenderer;
