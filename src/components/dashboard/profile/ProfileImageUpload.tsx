
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";

interface ProfileImageUploadProps {
  profilePicture: string;
  name: string;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileImageUpload = ({ profilePicture, name, onImageUpload }: ProfileImageUploadProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <Avatar className="h-24 w-24">
          <AvatarImage src={profilePicture} />
          <AvatarFallback className="text-lg">
            {name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <Label htmlFor="profile-picture" className="absolute bottom-0 right-0 bg-brand-red text-white rounded-full p-2 cursor-pointer hover:bg-red-600 transition-colors">
          <Camera className="h-4 w-4" />
        </Label>
        <input
          id="profile-picture"
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
        />
      </div>
      <p className="text-sm text-gray-600">Click the camera icon to change your profile picture</p>
    </div>
  );
};

export default ProfileImageUpload;
