
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Save, X } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import ProfileImageUpload from './profile/ProfileImageUpload';
import BasicInfoFields from './profile/BasicInfoFields';
import BioField from './profile/BioField';
import PasswordChangeSection from './profile/PasswordChangeSection';

interface ProfileEditFormProps {
  onCancel: () => void;
}

const ProfileEditForm = ({ onCancel }: ProfileEditFormProps) => {
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    profilePicture: user?.profilePicture || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords if changing
    if (formData.newPassword) {
      if (formData.newPassword !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "New passwords don't match",
          variant: "destructive"
        });
        return;
      }
      
      if (formData.newPassword.length < 6) {
        toast({
          title: "Error", 
          description: "Password must be at least 6 characters long",
          variant: "destructive"
        });
        return;
      }
    }

    try {
      const updateData = {
        name: formData.name,
        email: formData.email,
        bio: formData.bio,
        profilePicture: formData.profilePicture,
        ...(formData.newPassword && { password: formData.newPassword })
      };

      await updateProfile(updateData);
      
      toast({
        title: "Success",
        description: "Profile updated successfully"
      });
      
      onCancel();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive"
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          profilePicture: event.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Edit Profile</h2>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <ProfileImageUpload
          profilePicture={formData.profilePicture}
          name={formData.name}
          onImageUpload={handleImageUpload}
        />

        <BasicInfoFields
          name={formData.name}
          email={formData.email}
          onNameChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
          onEmailChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
        />

        <BioField
          bio={formData.bio}
          onBioChange={(value) => setFormData(prev => ({ ...prev, bio: value }))}
        />

        <PasswordChangeSection
          currentPassword={formData.currentPassword}
          newPassword={formData.newPassword}
          confirmPassword={formData.confirmPassword}
          onCurrentPasswordChange={(value) => setFormData(prev => ({ ...prev, currentPassword: value }))}
          onNewPasswordChange={(value) => setFormData(prev => ({ ...prev, newPassword: value }))}
          onConfirmPasswordChange={(value) => setFormData(prev => ({ ...prev, confirmPassword: value }))}
        />

        <div className="flex justify-end space-x-4 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-brand-red hover:bg-red-600">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
