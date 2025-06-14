
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const UpgradeSimple = () => {
  const navigate = useNavigate();

  const handleUpgradeNow = () => {
    navigate('/upgrade-premium');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <section className="py-16 bg-gray-50 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 5rem)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
              {/* Crown Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-yellow-600" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Upgrade to Premium
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray-600 mb-8">
                Unlock exclusive study materials and downloads with Premium membership
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Access all premium content</span>
                </div>
                
                <div className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Valid for 1 month</span>
                </div>
                
                <div className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Unlimited downloads</span>
                </div>
                
                <div className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">One-time payment ₹199</span>
                </div>
              </div>

              {/* Upgrade Button */}
              <Button 
                onClick={handleUpgradeNow}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg font-semibold rounded-lg"
              >
                Upgrade Now →
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default UpgradeSimple;
