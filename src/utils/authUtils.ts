
import { User } from '@/types/auth';

export const authUtils = {
  isAdmin(user: User | null): boolean {
    return user?.role === 'admin';
  },

  isPremium(user: User | null): boolean {
    if (!user || !user.premium) return false;
    
    if (user.premiumExpiryDate) {
      const expiryDate = new Date(user.premiumExpiryDate);
      const now = new Date();
      return now <= expiryDate;
    }
    
    return user.premium;
  },

  upgradeToPremium(user: User): User {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30); // 30 days from now
    
    return {
      ...user,
      premium: true,
      premiumExpiryDate: expiryDate.toISOString()
    };
  }
};
