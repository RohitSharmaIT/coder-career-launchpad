
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PaymentCardProps {
  isProcessing: boolean;
  paymentStatus: 'idle' | 'processing' | 'success' | 'failed';
  onPayment: () => void;
}

const PaymentCard = ({ isProcessing, paymentStatus, onPayment }: PaymentCardProps) => {
  return (
    <Card className="w-full max-w-sm bg-white shadow-lg border border-gray-200">
      <CardHeader className="text-center pb-4">
        <div className="inline-block bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
          Limited Time Offer
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Access</h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">💰</span>
          <span className="text-3xl font-bold text-orange-600">₹199</span>
        </div>
        <p className="text-gray-600 text-sm">One-time payment</p>
      </CardHeader>
      
      <CardContent className="px-6 pb-6">
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-sm">✓</span>
            <span className="text-sm text-gray-700">Instant access to all premium content</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-sm">✓</span>
            <span className="text-sm text-gray-700">Valid for 30 days</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-sm">✓</span>
            <span className="text-sm text-gray-700">No recurring charges</span>
          </div>
        </div>
        
        <Button 
          onClick={onPayment}
          disabled={isProcessing}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base py-6 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
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
  );
};

export default PaymentCard;
