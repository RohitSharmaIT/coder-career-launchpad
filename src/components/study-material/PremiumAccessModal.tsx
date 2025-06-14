
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Crown, Lock, User, Sparkles } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface PremiumAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  materialTitle?: string;
}

const PremiumAccessModal = ({ isOpen, onClose, materialTitle }: PremiumAccessModalProps) => {
  const { isAuthenticated, isPremium } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onClose();
    navigate("/login");
  };

  const handleUpgradeClick = () => {
    onClose();
    navigate("/upgrade-premium");
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4 p-0 overflow-hidden border-0 bg-white rounded-2xl shadow-2xl">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-3">
              <div className="relative">
                <Crown className="w-12 h-12 text-white drop-shadow-lg" />
                <Sparkles className="w-4 h-4 text-yellow-200 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <DialogTitle className="text-white text-xl font-bold mb-2">
              Premium Content
            </DialogTitle>
            <div className="flex items-center justify-center gap-2 text-yellow-100">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">Exclusive Access Required</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            This is a Premium Study Material
          </h3>
          
          {materialTitle && (
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600 font-medium">
                📚 {materialTitle}
              </p>
            </div>
          )}

          <p className="text-gray-600 mb-6 leading-relaxed">
            Upgrade to Premium to access full content and download exclusive study materials.
          </p>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Premium Benefits:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Unlimited access to all study materials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Download materials for offline study</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Early access to new content</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {!isAuthenticated ? (
              <>
                <Button
                  onClick={handleLoginClick}
                  className="w-full bg-brand-red hover:bg-red-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  size="lg"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login Now
                </Button>
                <Button
                  onClick={handleUpgradeClick}
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium"
                  size="lg"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Learn About Premium
                </Button>
              </>
            ) : !isPremium() ? (
              <>
                <Button
                  onClick={handleUpgradeClick}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  size="lg"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade to Premium
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium"
                  size="lg"
                >
                  Maybe Later
                </Button>
              </>
            ) : null}
          </div>

          {/* Close text */}
          <p className="text-xs text-gray-500 mt-4">
            Click outside to close
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PremiumAccessModal;
