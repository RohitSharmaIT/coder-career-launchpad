
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface AdminLoginFormProps {
  onLoginSuccess: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AdminLoginForm = ({ onLoginSuccess, isLoading, setIsLoading }: AdminLoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password) {
      toast.error("Please enter both username and password");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Check credentials (in a real app, this would be done on the server)
      if (username === 'apnewalecoders' && password === 'Rohit@2025') {
        toast.success("Admin login successful");
        onLoginSuccess();
      } else {
        toast.error("Invalid credentials. Only Apne Wale Coders team has access.");
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">Admin Login</h2>
        <p className="text-gray-600 mt-2">Only Apne Wale Coders team members can post jobs</p>
      </div>
      
      <form onSubmit={handleAdminLogin}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input 
              id="username" 
              placeholder="Enter admin username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password"
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brand-red hover:bg-red-600 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginForm;
