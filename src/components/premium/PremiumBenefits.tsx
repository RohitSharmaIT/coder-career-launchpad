
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Crown, Zap, Check } from "lucide-react";

const PremiumBenefits = () => {
  const features = [
    { icon: Download, text: "Access all exclusive content" },
    { icon: Crown, text: "Premium study materials" },
    { icon: Zap, text: "Priority download speeds" },
    { icon: Check, text: "No ads or interruptions" },
  ];

  return (
    <div className="mt-12">
      <Card className="border-2 border-green-300 bg-green-50">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-green-700">Your Premium Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm text-green-700">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PremiumBenefits;
