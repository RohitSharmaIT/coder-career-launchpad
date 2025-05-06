
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PersonalInformationProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  resumeLink: string;
  setResumeLink: (link: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  service: string;
  getDynamicFields: () => JSX.Element | null;
}

const PersonalInformation = ({ 
  name, setName, 
  email, setEmail, 
  phone, setPhone, 
  resumeLink, setResumeLink,
  notes, setNotes,
  service,
  getDynamicFields
}: PersonalInformationProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Your Information</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="required">Full Name</Label>
          <Input 
            id="name" 
            placeholder="John Doe" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="required">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="required">Phone Number</Label>
          <Input 
            id="phone" 
            placeholder="1234567890" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        
        {getDynamicFields()}
        
        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea 
            id="notes" 
            placeholder="Any specific requirements or questions" 
            className="resize-none"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
