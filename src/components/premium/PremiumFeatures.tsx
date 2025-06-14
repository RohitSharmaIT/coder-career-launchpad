
import { Download, BookOpen, Zap, X, Crown } from "lucide-react";

const PremiumFeatures = () => {
  const features = [
    { icon: Download, text: "Access all exclusive content" },
    { icon: BookOpen, text: "Premium study materials" },
    { icon: Download, text: "Priority download speeds" },
    { icon: X, text: "No ads or interruptions" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-left">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 flex items-center justify-center">
            <span className="text-2xl">💎</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Unlock All Premium Study Materials & Downloads
          </h1>
        </div>
        <p className="text-gray-600 mb-8">
          Get unlimited access to exclusive content and boost your career preparation
        </p>
      </div>

      {/* What's Included Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h2>
        <div className="space-y-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {index === 0 && <Download className="w-4 h-4 text-green-600" />}
                    {index === 1 && <span className="text-green-600">✓</span>}
                    {index === 2 && <Download className="w-4 h-4 text-green-600" />}
                    {index === 3 && <span className="text-green-600">✓</span>}
                  </div>
                </div>
                <span className="text-gray-700">{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Validity Section */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-yellow-600 text-sm">📅</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Valid for 1 Month</h4>
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
