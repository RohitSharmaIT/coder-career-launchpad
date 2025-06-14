
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Lock } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

interface StudyMaterial {
  id: number;
  title: string;
  description: string;
  content?: string;
  category: string;
  type: string;
  size: string;
  isPremium: boolean;
  downloadCount: number;
  tags?: string[];
  author?: string;
}

interface StudyMaterialContentProps {
  material: StudyMaterial;
}

const StudyMaterialContent = ({ material }: StudyMaterialContentProps) => {
  const navigate = useNavigate();
  const { isAuthenticated, isPremium } = useAuth();
  
  const canAccessPremiumContent = !material.isPremium || (isAuthenticated && isPremium());

  const handleDownload = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to download study materials", {
        action: {
          label: "Login",
          onClick: () => {
            navigate("/login");
          }
        }
      });
      return;
    }
    
    if (material.isPremium && !isPremium()) {
      toast.error("This is a premium resource", {
        description: "Upgrade to Premium to access exclusive content",
        action: {
          label: "Upgrade Now",
          onClick: () => {
            navigate("/upgrade-premium");
          }
        }
      });
      return;
    }

    const dummyPdfContent = "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL01lZGlhQm94WzAgMCA1OTUgODQyXS9Db250ZW50cyA0IDAgUj4+CmVuZG9iago0IDAgb2JqCjw8L0ZpbHRlci9GbGF0ZURlY29kZS9MZW5ndGggNTU+PnN0cmVhbQp4nDPQM1Qo5ypUMABCM0MjICWlYKRnZGAMpIxNTECUiYEmGhkbkaeJUC1dABYVBnYKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NCAwMDAwMCBuIAowMDAwMDAwMTE3IDAwMDAwIG4gCjAwMDAwMDAxOTYgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDUvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgozMTkKJSVFT0YK";
    
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
    <div className="flex-1 order-2 lg:order-2 lg:max-w-2xl">
      <Card>
        <CardHeader className="bg-gray-50 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold break-words">{material.title}</CardTitle>
              <p className="text-gray-600 mt-2 text-xs sm:text-sm lg:text-base">{material.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
              <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                material.isPremium ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {material.isPremium ? 'Premium' : 'Free'}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {material.category}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
          {/* Premium Content Protection */}
          {material.isPremium && !canAccessPremiumContent ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <Lock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Premium Content</h3>
              <p className="text-yellow-700 mb-4">
                This is premium content. Upgrade to Premium to access the full material and download.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {!isAuthenticated ? (
                  <Button 
                    onClick={() => navigate('/login')}
                    className="bg-brand-red hover:bg-red-600 text-white"
                  >
                    Login to Continue
                  </Button>
                ) : (
                  <Button 
                    onClick={() => navigate('/upgrade-premium')}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                  >
                    Upgrade to Premium
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-sm sm:text-base">{material.content || material.description}</div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button 
              onClick={handleDownload}
              className={`text-xs sm:text-sm flex-1 sm:flex-none ${
                material.isPremium && !canAccessPremiumContent 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-brand-red hover:bg-red-600'
              } text-white`}
              disabled={material.isPremium && !canAccessPremiumContent}
            >
              <Download size={16} className="mr-2" />
              {material.isPremium && !canAccessPremiumContent ? 'Premium Required' : 'Download PDF'}
            </Button>
            <div className="text-xs sm:text-sm text-gray-500 flex items-center">
              <span>Downloads: {material.downloadCount}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialContent;
