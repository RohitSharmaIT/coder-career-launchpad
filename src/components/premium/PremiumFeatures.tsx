
import { Download, Crown, Check, Zap, Shield } from "lucide-react";

const PremiumFeatures = () => {
  const features = [
    { icon: Download, text: "Access all exclusive content" },
    { icon: Crown, text: "Premium study materials" },
    { icon: Zap, text: "Priority download speeds" },
    { icon: Shield, text: "No ads or interruptions" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
            <Crown className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Unlock All Premium Study Materials & Downloads</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Get unlimited access to exclusive content and boost your career preparation
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <span className="text-gray-700">{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-yellow-600 text-sm">📅</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Valid for 1 Month</h4>
            <p className="text-sm text-gray-600">
              Your premium access will be valid for 30 days from the date of purchase. 
              Download as much content as you want during this period!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;
