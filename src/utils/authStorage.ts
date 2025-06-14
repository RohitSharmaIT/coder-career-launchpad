
import { User } from '@/types/auth';

export const authStorage = {
  getUser(): User | null {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) return null;
    
    const parsedUser = JSON.parse(storedUser);
    
    // Check if premium has expired
    if (parsedUser.premium && parsedUser.premiumExpiryDate) {
      const expiryDate = new Date(parsedUser.premiumExpiryDate);
      const now = new Date();
      if (now > expiryDate) {
        parsedUser.premium = false;
        parsedUser.premiumExpiryDate = undefined;
        this.setUser(parsedUser);
      }
    }
    
    return parsedUser;
  },

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  },

  removeUser(): void {
    localStorage.removeItem('user');
  }
};
