
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Crown, Lock, User } from "lucide-react";
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
    navigate("/upgrade-simple");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4 p-0 overflow-hidden border-0 bg-white rounded-xl shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 text-center">
          <Crown className="w-8 h-8 text-white mx-auto mb-2" />
          <DialogTitle className="text-white text-lg font-bold">
            Premium Content
          </DialogTitle>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <Lock className="w-4 h-4" />
            <span className="text-sm">This is a Premium Study Material</span>
          </div>

          <p className="text-gray-700 mb-6">
            Upgrade to Premium to access full content and download.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            {!isAuthenticated ? (
              <Button
                onClick={handleLoginClick}
                className="w-full bg-brand-red hover:bg-red-600 text-white py-2 rounded-lg font-medium"
              >
                <User className="w-4 h-4 mr-2" />
                Login Now
              </Button>
            ) : !isPremium() ? (
              <Button
                onClick={handleUpgradeClick}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-2 rounded-lg font-medium"
              >
                <Crown className="w-4 h-4 mr-2" />
                Upgrade to Premium
              </Button>
            ) : null}
            
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-2 rounded-lg"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PremiumAccessModal;
