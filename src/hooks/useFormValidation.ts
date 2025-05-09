
import { useState, useEffect } from 'react';

export interface ValidationRules {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
}

export const useFormValidation = () => {
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateField = (value: string, rules: ValidationRules): string | null => {
    if (rules.required && !value.trim()) {
      return 'This field is required';
    }

    if (rules.email && value && !validateEmail(value)) {
      return 'Please enter a valid email address';
    }

    if (rules.phone && value && !validatePhone(value)) {
      return 'Please enter a valid 10-digit phone number';
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`;
    }

    return null;
  };

  return {
    validateEmail,
    validatePhone,
    validateField
  };
};
