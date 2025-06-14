
import { User } from '@/types/auth';

export const authService = {
  async login(email: string, password: string): Promise<User | null> {
    // For demo purposes, we'll use fixed credentials
    // In a real app, this would call an API endpoint
    
    // Admin user
    if (email === 'apnewalecoders@gmail.com' && password === 'apne') {
      return {
        id: '1',
        name: 'Apne Wale Coders',
        email: 'apnewalecoders@gmail.com',
        role: 'admin',
        premium: true
      };
    } 
    
    // Demo regular user
    else if (email === 'user@example.com' && password === 'password') {
      return {
        id: '2',
        name: 'Demo User',
        email: 'user@example.com',
        role: 'user',
        premium: false
      };
    }
    
    return null;
  },

  async signup(name: string, email: string, password: string): Promise<User> {
    // In a real app, this would call an API endpoint to register
    return {
      id: Date.now().toString(), // Generate a temporary ID
      name,
      email,
      role: 'user',
      premium: false
    };
  },

  async updateProfile(user: User, data: Partial<User> & { password?: string }): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      ...user,
      ...data
    };
  }
};
