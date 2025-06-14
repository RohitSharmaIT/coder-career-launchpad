
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { usePaymentHandlers } from "@/hooks/usePaymentHandlers";
import { Crown } from "lucide-react";

const PremiumCTA = () => {
  const { isPremium } = useAuth();
  const { isProcessing, paymentStatus, initializePayment } = usePaymentHandlers();

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
        
        {paymentStatus === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
            <div className="text-green-800">
              <Crown className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold text-lg mb-2">🎉 Premium Activated!</h3>
              <p className="text-sm">You now have access to all premium study materials!</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl">💰</span>
              <span className="text-3xl font-bold text-orange-600">₹199</span>
              <span className="text-gray-600">for 1 month</span>
            </div>
            
            <Button 
              onClick={initializePayment}
              disabled={isProcessing}
              className="bg-brand-red hover:bg-red-600 text-white px-8 py-6 text-lg"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  {paymentStatus === 'processing' ? 'Processing Payment...' : 'Please wait...'}
                </div>
              ) : (
                "Upgrade to Premium"
              )}
            </Button>
            
            <p className="text-sm text-gray-500 mt-4">
              Secure payment • Instant activation • 30-day access
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PremiumCTA;
