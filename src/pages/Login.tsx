
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';
import { Mail, Lock, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form
      if (!email.trim() || !password.trim()) {
        toast.error("Please fill in all fields");
        return;
      }

      const success = await login(email, password);
      
      if (success) {
        toast.success("Login successful");
        navigate('/dashboard');
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("An error occurred while logging in");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto animate-fade-in">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-gray-600">
                Sign in to continue your career journey
              </p>
            </div>
            
            {/* Login Card */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm animate-scale-in">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">Log In</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 border-gray-200 focus:border-brand-red focus:ring-brand-red"
                          required
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1 px-1">
                        Demo: user@example.com / password
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                          Password
                        </Label>
                        <Link 
                          to="/forgot-password" 
                          className="text-sm text-brand-red hover:text-red-600 transition-colors"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 h-12 border-gray-200 focus:border-brand-red focus:ring-brand-red"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg group"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                          Signing in...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Log In
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
                
                <div className="mt-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link 
                      to="/signup" 
                      className="text-brand-red hover:text-red-600 font-medium transition-colors"
                    >
                      Create your account →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
