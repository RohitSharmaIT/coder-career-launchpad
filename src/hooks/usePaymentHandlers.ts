
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "sonner";

export const usePaymentHandlers = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const { upgradeToPremium, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleUpgrade = async () => {
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
    
    try {
      // Simulate payment processing
      toast.info("Processing payment of ₹199...");
      
      // Simulate payment gateway processing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Simulate payment success (in real implementation, this would be handled by payment gateway)
      const paymentSuccess = Math.random() > 0.1; // 90% success rate for demo
      
      if (paymentSuccess) {
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
      } else {
        // Simulate payment failure
        setPaymentStatus('failed');
        toast.error("Payment failed. Please try again or contact support.");
      }
      
    } catch (error) {
      console.error('Payment processing failed:', error);
      setPaymentStatus('failed');
      toast.error("Payment processing failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    paymentStatus,
    initializePayment: handleUpgrade
  };
};
