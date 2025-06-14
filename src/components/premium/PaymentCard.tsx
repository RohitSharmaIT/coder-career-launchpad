
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PaymentCardProps {
  isProcessing: boolean;
  paymentStatus: 'idle' | 'processing' | 'success' | 'failed';
  onPayment: () => void;
}

const PaymentCard = ({ isProcessing, paymentStatus, onPayment }: PaymentCardProps) => {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-md border-2 border-yellow-300 shadow-lg">
        <CardHeader className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 pb-4">
          <div className="inline-block bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
            Limited Time Offer
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Access</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl">💰</span>
            <span className="text-4xl font-bold text-orange-600">₹199</span>
          </div>
          <p className="text-gray-600">One-time payment</p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-700">Instant access to all premium content</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-700">Valid for 30 days</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-700">No recurring charges</span>
            </div>
          </div>
          
          <Button 
            onClick={onPayment}
            disabled={isProcessing}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
};

export default PaymentCard;
