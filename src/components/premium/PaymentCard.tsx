
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <CardHeader className="text-center bg-gradient-to-r from-yellow-100 to-orange-100">
          <div className="flex justify-center mb-2">
            <Badge className="bg-yellow-500 text-white text-lg px-4 py-1">
              Free Upgrade
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold">Premium Access</CardTitle>
          <div className="text-4xl font-bold text-green-600 mt-4">
            🎉 FREE
          </div>
          <p className="text-gray-600">No payment required</p>
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
            onClick={onPayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
            size="lg"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                {paymentStatus === 'processing' ? 'Activating Premium...' : 'Please wait...'}
              </div>
            ) : (
              "Activate Premium - FREE"
            )}
          </Button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Instant activation • No payment required
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCard;
