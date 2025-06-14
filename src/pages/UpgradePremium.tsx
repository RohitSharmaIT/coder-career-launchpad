
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

// Declare Razorpay type for TypeScript
declare global {
  interface Window {
    Razorpay: any;
  }
}

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

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const initializePayment = async () => {
    if (!isAuthenticated) {
      toast.error("Please log in to upgrade to Premium", {
        action: {
          label: "Login",
          onClick: () => navigate("/login")
        }
      });
      return;
    }

    if (isProcessing) {
      toast.info("Payment is already in progress. Please wait...");
      return;
    }

    setIsProcessing(true);
    setPaymentStatus('processing');
    
    // Load Razorpay script if not already loaded
    const isRazorpayLoaded = await loadRazorpayScript();
    
    if (!isRazorpayLoaded) {
      toast.error("Failed to load payment gateway. Please try again.");
      setIsProcessing(false);
      setPaymentStatus('failed');
      return;
    }

    // Generate order ID (in real app, this would come from backend)
    const orderId = 'order_' + Date.now();
    
    const options = {
      key: 'rzp_test_9999999999', // Razorpay Test Key
      amount: 19900, // ₹199 in paisa (₹199 * 100)
      currency: 'INR',
      name: 'Premium Upgrade',
      description: '30 Days Premium Access',
      order_id: orderId,
      handler: function (response: any) {
        console.log('Payment successful:', response);
        handlePaymentSuccess(response);
      },
      prefill: {
        name: user?.name || '',
        email: user?.email || '',
        contact: '' // Add phone number if available
      },
      theme: {
        color: '#F59E0B' // Yellow/orange theme
      },
      modal: {
        ondismiss: function() {
          console.log('Payment dismissed');
          handlePaymentCancel();
        }
      },
      retry: {
        enabled: true,
        max_count: 3
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        console.log('Payment failed:', response);
        handlePaymentFailure(response);
      });
      
      rzp.open();
    } catch (error) {
      console.error('Error opening Razorpay:', error);
      toast.error("Failed to open payment gateway. Please try again.");
      setIsProcessing(false);
      setPaymentStatus('failed');
    }
  };

  const handlePaymentSuccess = async (response: any) => {
    try {
      console.log('Processing successful payment:', response);
      
      // In a real application, verify payment with backend
      // For now, we'll simulate verification
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update user to premium status
      upgradeToPremium();
      setPaymentStatus('success');
      
      // Calculate expiry date (1 month from now)
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      const formattedDate = expiryDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      
      toast.success("🎉 Payment Successful! Premium Activated!", {
        description: `You are now a Premium Member! Valid till: ${formattedDate}`
      });
      
      // Redirect to dashboard after success message
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      
    } catch (error) {
      console.error('Payment verification failed:', error);
      setPaymentStatus('failed');
      toast.error("Payment verification failed. Please contact support with your payment ID: " + response.razorpay_payment_id);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentFailure = (response: any) => {
    console.error('Payment failed:', response);
    setIsProcessing(false);
    setPaymentStatus('failed');
    
    const errorMsg = response.error?.description || "Payment failed. Please try again.";
    toast.error("Payment Failed", {
      description: errorMsg
    });
  };

  const handlePaymentCancel = () => {
    console.log('Payment cancelled by user');
    setIsProcessing(false);
    setPaymentStatus('idle');
    toast.info("Payment cancelled. You can try again anytime.");
  };

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
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        size="lg"
                      >
                        {isProcessing ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            {paymentStatus === 'processing' ? 'Opening Payment...' : 'Please wait...'}
                          </div>
                        ) : (
                          "Pay ₹199 - Upgrade Now"
                        )}
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center mt-4">
                        Secure payment via Razorpay • Test Mode • Instant activation
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
