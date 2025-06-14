
import { Download, Crown, Check } from "lucide-react";

const PremiumFeatures = () => {
  const features = [
    { icon: Download, text: "Access all exclusive content" },
    { icon: Crown, text: "Premium study materials" },
    { icon: Download, text: "Priority download speeds" },
    { icon: Check, text: "No ads or interruptions" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">What's Included:</h2>
      <div className="space-y-4">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <IconComponent className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600 bg-green-100 rounded p-1" />
                <span className="text-lg text-gray-700">{feature.text}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-yellow-600 text-sm">📅</span>
          </div>
          <span className="font-semibold text-gray-800">Valid for 1 Month</span>
        </div>
        <p className="text-gray-600">
          Your premium access will be valid for 30 days from the date of purchase.  
          Download as much content as you want during this period!
        </p>
      </div>
    </div>
  );
};

export default PremiumFeatures;
