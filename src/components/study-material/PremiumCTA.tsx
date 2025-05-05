
import { Button } from "@/components/ui/button";

const PremiumCTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Access to Premium Resources</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Unlock premium study materials and ace your interviews and assessments with our expert resources.
        </p>
        <Button className="bg-brand-red hover:bg-red-600 text-white px-8 py-6 text-lg">
          Upgrade to Premium
        </Button>
      </div>
    </section>
  );
};

export default PremiumCTA;
