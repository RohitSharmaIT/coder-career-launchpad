
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from '@/contexts/AuthContext';
import { usePaymentHandlers } from '@/hooks/usePaymentHandlers';
import PremiumHeader from '@/components/premium/PremiumHeader';
import PremiumFeatures from '@/components/premium/PremiumFeatures';
import PaymentCard from '@/components/premium/PaymentCard';
import PremiumBenefits from '@/components/premium/PremiumBenefits';

const UpgradePremium = () => {
  const { isAuthenticated, isPremium, user } = useAuth();
  const navigate = useNavigate();
  const { isProcessing, paymentStatus, initializePayment } = usePaymentHandlers();

  const getDaysLeft = () => {
    if (!user?.premiumExpiryDate) return 0;
    const expiryDate = new Date(user.premiumExpiryDate);
    const now = new Date();
    const diffTime = expiryDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  // Check if user is already premium
  const isUserPremium = isAuthenticated && isPremium();
  const daysLeft = getDaysLeft();

  return (
    <div className="pt-20">
      <Navbar />
      
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PremiumHeader 
              isUserPremium={isUserPremium}
              daysLeft={daysLeft}
              paymentStatus={paymentStatus}
              onGoToDashboard={handleGoToDashboard}
            />

            {!isUserPremium && paymentStatus !== 'success' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-12">
                <div className="lg:col-span-2">
                  <PremiumFeatures />
                </div>
                <div className="lg:col-span-1">
                  <PaymentCard 
                    isProcessing={isProcessing}
                    paymentStatus={paymentStatus}
                    onPayment={initializePayment}
                  />
                </div>
              </div>
            )}

            {isUserPremium && (
              <PremiumBenefits />
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default UpgradePremium;
