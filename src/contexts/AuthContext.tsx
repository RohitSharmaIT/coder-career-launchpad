
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '@/types/auth';
import { authService } from '@/services/authService';
import { authStorage } from '@/utils/authStorage';
import { authUtils } from '@/utils/authUtils';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = authStorage.getUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      const authenticatedUser = await authService.login(email, password);
      
      if (authenticatedUser) {
        setUser(authenticatedUser);
        authStorage.setUser(authenticatedUser);
        return true;
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      const newUser = await authService.signup(name, email, password);
      setUser(newUser);
      authStorage.setUser(newUser);
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: Partial<User> & { password?: string }): Promise<void> => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const updatedUser = await authService.updateProfile(user, data);
      
      // Remove password from user object (it shouldn't be stored)
      delete (data as any).password;
      
      setUser(updatedUser);
      authStorage.setUser(updatedUser);
    } finally {
      setIsLoading(false);
    }
  };

  const upgradeToPremium = () => {
    if (!user) return;
    
    const updatedUser = authUtils.upgradeToPremium(user);
    setUser(updatedUser);
    authStorage.setUser(updatedUser);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeUser();
  };
  
  const isAdmin = () => {
    return authUtils.isAdmin(user);
  };

  const isPremium = () => {
    return authUtils.isPremium(user);
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
