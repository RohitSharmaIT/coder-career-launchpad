
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SubscribeBox = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send this email to your server
      console.log(`Email submitted: ${email}`);
      toast.success("Thanks for subscribing! We'll be in touch soon.");
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay updated with the latest tech interview questions, career tips, and exclusive job opportunities.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="bg-brand-red hover:bg-red-600 text-white"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeBox;
