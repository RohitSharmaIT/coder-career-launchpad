
import { Download, Crown, Zap, Check, Calendar } from "lucide-react";

const PremiumFeatures = () => {
  const features = [
    { icon: Download, text: "Access all exclusive content" },
    { icon: Crown, text: "Premium study materials" },
    { icon: Zap, text: "Priority download speeds" },
    { icon: Check, text: "No ads or interruptions" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">What's Included:</h2>
      <div className="space-y-4">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-lg">✅ {feature.text}</span>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-lg border border-yellow-200">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-yellow-600" />
          <span className="font-semibold">📅 Valid for 1 Month</span>
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
