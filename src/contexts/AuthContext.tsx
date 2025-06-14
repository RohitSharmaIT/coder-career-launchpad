
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  bio?: string;
  profilePicture?: string;
  premium: boolean;
  premiumExpiryDate?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: () => boolean;
  isPremium: () => boolean;
  updateProfile: (data: Partial<User> & { password?: string }) => Promise<void>;
  upgradeToPremium: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Check if premium has expired
      if (parsedUser.premium && parsedUser.premiumExpiryDate) {
        const expiryDate = new Date(parsedUser.premiumExpiryDate);
        const now = new Date();
        if (now > expiryDate) {
          parsedUser.premium = false;
          parsedUser.premiumExpiryDate = undefined;
          localStorage.setItem('user', JSON.stringify(parsedUser));
        }
      }
      setUser(parsedUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // For demo purposes, we'll use fixed credentials
    // In a real app, this would call an API endpoint
    setIsLoading(true);
    
    try {
      // Admin user
      if (email === 'apnewalecoders@gmail.com' && password === 'apne') {
        const adminUser: User = {
          id: '1',
          name: 'Apne Wale Coders',
          email: 'apnewalecoders@gmail.com',
          role: 'admin',
          premium: true
        };
        setUser(adminUser);
        localStorage.setItem('user', JSON.stringify(adminUser));
        return true;
      } 
      
      // Demo regular user
      else if (email === 'user@example.com' && password === 'password') {
        const regularUser: User = {
          id: '2',
          name: 'Demo User',
          email: 'user@example.com',
          role: 'user',
          premium: false
        };
        setUser(regularUser);
        localStorage.setItem('user', JSON.stringify(regularUser));
        return true;
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would call an API endpoint to register
    setIsLoading(true);
    
    try {
      // Create new user
      const newUser: User = {
        id: Date.now().toString(), // Generate a temporary ID
        name,
        email,
        role: 'user',
        premium: false
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: Partial<User> & { password?: string }): Promise<void> => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedUser: User = {
        ...user,
        ...data
      };
      
      // Remove password from user object (it shouldn't be stored)
      delete (data as any).password;
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } finally {
      setIsLoading(false);
    }
  };

  const upgradeToPremium = () => {
    if (!user) return;
    
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30); // 30 days from now
    
    const updatedUser: User = {
      ...user,
      premium: true,
      premiumExpiryDate: expiryDate.toISOString()
    };
    
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const isPremium = () => {
    if (!user || !user.premium) return false;
    
    if (user.premiumExpiryDate) {
      const expiryDate = new Date(user.premiumExpiryDate);
      const now = new Date();
      return now <= expiryDate;
    }
    
    return user.premium;
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isAdmin,
        isPremium,
        updateProfile,
        upgradeToPremium
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
