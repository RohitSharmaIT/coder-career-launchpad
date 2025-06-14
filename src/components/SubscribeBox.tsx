
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, Users, Zap } from "lucide-react";

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
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-brand-red py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_25%_25%,_white_2px,_transparent_2px)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Mail className="h-4 w-4 text-yellow-400" />
            <span className="text-white font-medium">Stay Connected</span>
          </div>
          
          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Get exclusive access to the latest tech interview questions, career tips, job opportunities, and industry insights delivered straight to your inbox.
          </p>
          
          {/* Subscribe Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow py-4 px-6 rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-300 focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </Button>
          </form>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Users className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">5000+ Members</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Mail className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">Weekly Updates</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">Exclusive Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBox;
