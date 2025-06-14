
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "sonner";

// Declare Razorpay type for TypeScript
declare global {
  interface Window {
    Razorpay: any;
  }
}

export const usePaymentHandlers = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const { upgradeToPremium, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      // Check if Razorpay is already loaded
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('Razorpay script loaded successfully');
        resolve(true);
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay script');
        resolve(false);
      };
      document.body.appendChild(script);
    });
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
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your actual Razorpay Key ID
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
        contact: ''
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
      console.log('Initializing Razorpay with options:', options);
      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response: any) {
        console.log('Payment failed event:', response);
        handlePaymentFailure(response);
      });
      
      console.log('Opening Razorpay checkout...');
      rzp.open();
    } catch (error) {
      console.error('Error opening Razorpay:', error);
      toast.error("Failed to open payment gateway. Please try again.");
      setIsProcessing(false);
      setPaymentStatus('failed');
    }
  };

  return {
    isProcessing,
    paymentStatus,
    initializePayment
  };
};
