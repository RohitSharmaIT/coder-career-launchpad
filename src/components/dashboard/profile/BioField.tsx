
import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BioFieldProps {
  bio: string;
  onBioChange: (value: string) => void;
}

const BioField = ({ bio, onBioChange }: BioFieldProps) => {
  return (
    <div>
      <Label htmlFor="bio">Bio</Label>
      <Textarea
        id="bio"
        placeholder="Tell us about yourself..."
        value={bio}
        onChange={(e) => onBioChange(e.target.value)}
        rows={3}
      />
    </div>
  );
};

export default BioField;
