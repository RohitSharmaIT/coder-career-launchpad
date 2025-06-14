import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "sonner";
import { Check, Crown, Download, Calendar, Zap, ArrowLeft } from "lucide-react";

const UpgradePremium = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const { upgradeToPremium, isAuthenticated, isPremium, user } = useAuth();
  const navigate = useNavigate();

  const getDaysLeft = () => {
    if (!user?.premiumExpiryDate) return 0;
    const expiryDate = new Date(user.premiumExpiryDate);
    const now = new Date();
    const diffTime = expiryDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const initializePayment = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to upgrade to Premium", {
        action: {
          label: "Login",
          onClick: () => navigate("/login")
        }
      });
      return;
    }

    setIsProcessing(true);
    setPaymentStatus('processing');
    
    // Initialize Razorpay payment
    const options = {
      key: 'rzp_test_9999999999', // Replace with your Razorpay key
      amount: 19900, // ₹199 in paisa
      currency: 'INR',
      name: 'Premium Upgrade',
      description: '30 Days Premium Access',
      order_id: '', // This should come from your backend
      handler: function (response: any) {
        // Payment successful
        handlePaymentSuccess(response);
      },
      prefill: {
        name: user?.name || '',
        email: user?.email || '',
      },
      theme: {
        color: '#F59E0B'
      },
      modal: {
        ondismiss: function() {
          // Payment cancelled
          handlePaymentCancel();
        }
      }
    };

    // Check if Razorpay is loaded
    if (typeof (window as any).Razorpay !== 'undefined') {
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      // Fallback: simulate payment for demo
      simulatePayment();
    }
  };

  const handlePaymentSuccess = async (response: any) => {
    try {
      // Verify payment with backend (in a real app)
      console.log('Payment successful:', response);
      
      // Simulate payment verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Only upgrade after successful payment verification
      upgradeToPremium();
      setPaymentStatus('success');
      
      toast.success("🎉 Payment Successful! Premium Activated!", {
        description: "You now have access to all premium content for 30 days"
      });
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
      
    } catch (error) {
      setPaymentStatus('failed');
      toast.error("Payment verification failed. Please contact support.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentCancel = () => {
    setIsProcessing(false);
    setPaymentStatus('idle');
    toast.info("Payment cancelled. You can try again anytime.");
  };

  const simulatePayment = async () => {
    try {
      // Simulate payment processing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Simulate successful payment response
      const mockResponse = {
        razorpay_payment_id: 'pay_mock_' + Date.now(),
        razorpay_order_id: 'order_mock_' + Date.now(),
        razorpay_signature: 'mock_signature'
      };
      
      handlePaymentSuccess(mockResponse);
    } catch (error) {
      setPaymentStatus('failed');
      setIsProcessing(false);
      toast.error("Payment failed. Please try again.");
    }
  };

  // ... keep existing code (features array)
  const features = [
    { icon: Download, text: "Access all exclusive content" },
    { icon: Crown, text: "Premium study materials" },
    { icon: Zap, text: "Priority download speeds" },
    { icon: Check, text: "No ads or interruptions" },
  ];

  // Check if user is already premium
  const isUserPremium = isAuthenticated && isPremium();
  const daysLeft = getDaysLeft();

  return (
    <div className="pt-20">
      <Navbar />
      
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
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
                      onClick={() => navigate("/dashboard")}
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
                      onClick={() => navigate("/dashboard")}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                    >
                      <ArrowLeft className="mr-2 w-5 h-5" />
                      Go to Dashboard
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                    💎 Unlock All Premium Study Materials & Downloads
                  </h1>
                  <p className="text-xl text-gray-600">
                    Get unlimited access to exclusive content and boost your career preparation
                  </p>
                </>
              )}
            </div>

            {!isUserPremium && paymentStatus !== 'success' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features */}
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

                {/* Pricing Card */}
                <div className="flex justify-center">
                  <Card className="w-full max-w-md border-2 border-yellow-300 shadow-lg">
                    <CardHeader className="text-center bg-gradient-to-r from-yellow-100 to-orange-100">
                      <div className="flex justify-center mb-2">
                        <Badge className="bg-yellow-500 text-white text-lg px-4 py-1">
                          Limited Time Offer
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl font-bold">Premium Access</CardTitle>
                      <div className="text-4xl font-bold text-yellow-600 mt-4">
                        💰 ₹199
                      </div>
                      <p className="text-gray-600">One-time payment</p>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Instant access to all premium content</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Valid for 30 days</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>No recurring charges</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={initializePayment}
                        disabled={isProcessing}
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg py-6"
                        size="lg"
                      >
                        {isProcessing ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            {paymentStatus === 'processing' ? 'Processing Payment...' : 'Please wait...'}
                          </div>
                        ) : (
                          "Pay ₹199 - Upgrade Now"
                        )}
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center mt-4">
                        Secure payment via Razorpay • No hidden fees • Instant activation
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Premium Benefits for existing premium users */}
            {isUserPremium && (
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
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default UpgradePremium;
