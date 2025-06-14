
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Crown } from "lucide-react";

const PremiumCTA = () => {
  const { isPremium } = useAuth();
  const navigate = useNavigate();

  // Don't show CTA if user is already premium
  if (isPremium()) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Crown className="w-12 h-12 text-yellow-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Get Access to Premium Resources</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Unlock premium study materials and ace your interviews and assessments with our expert resources.
        </p>
        
        <Button 
          onClick={() => navigate('/upgrade-simple')}
          className="bg-brand-red hover:bg-red-600 text-white px-8 py-6 text-lg"
        >
          Upgrade to Premium
        </Button>
      </div>
    </section>
  );
};

export default PremiumCTA;
