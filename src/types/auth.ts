
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  bio?: string;
  profilePicture?: string;
  premium: boolean;
  premiumExpiryDate?: string;
}

export interface AuthContextType {
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
