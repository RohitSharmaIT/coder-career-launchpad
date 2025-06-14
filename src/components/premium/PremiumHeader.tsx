
import { Crown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PremiumHeaderProps {
  isUserPremium: boolean;
  daysLeft: number;
  paymentStatus: 'idle' | 'processing' | 'success' | 'failed';
  onGoToDashboard: () => void;
}

const PremiumHeader = ({ isUserPremium, daysLeft, paymentStatus, onGoToDashboard }: PremiumHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <Crown className="w-16 h-16 text-yellow-500" />
      </div>
      
      {isUserPremium ? (
        <>
          <h1 className="text-4xl font-bold mb-4 text-green-600">
            🎉 You are already a Premium member!
          </h1>
          <p className="text-xl text-gray-600">
            Your premium membership is valid for {daysLeft} days.
          </p>
          <div className="mt-6">
            <Button 
              onClick={onGoToDashboard}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go to Dashboard
            </Button>
          </div>
        </>
      ) : paymentStatus === 'success' ? (
        <>
          <h1 className="text-4xl font-bold mb-4 text-green-600">
            🎉 Welcome to Premium!
          </h1>
          <p className="text-xl text-gray-600">
            Your premium membership has been activated successfully!
          </p>
          <div className="mt-6">
            <Button 
              onClick={onGoToDashboard}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go to Dashboard
            </Button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            💎 Unlock All Premium Study Materials & Downloads
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get unlimited access to exclusive content and boost your career preparation
          </p>
        </>
      )}
    </div>
  );
};

export default PremiumHeader;
