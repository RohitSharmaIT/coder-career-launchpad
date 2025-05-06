
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ServiceFieldsProps {
  service: string;
  resumeLink: string;
  setResumeLink: (link: string) => void;
}

const ServiceFields = ({ service, resumeLink, setResumeLink }: ServiceFieldsProps) => {
  switch (service) {
    case 'resume':
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="currentResume">Current Resume Link (if any)</Label>
            <Input 
              id="currentResume" 
              placeholder="Google Drive or Dropbox link" 
              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="targetRole">Target Role</Label>
            <Input 
              id="targetRole" 
              placeholder="E.g., Frontend Developer, Data Analyst" 
            />
          </div>
        </div>
      );
    
    case 'interview':
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="interviewType">Interview Type</Label>
            <select 
              id="interviewType" 
              className="w-full rounded-md border border-gray-300 py-2 px-3"
            >
              <option value="">Select Interview Type</option>
              <option value="technical">Technical Interview</option>
              <option value="hr">HR Interview</option>
              <option value="behavioral">Behavioral Interview</option>
              <option value="system-design">System Design Interview</option>
            </select>
          </div>
          <div>
            <Label htmlFor="targetCompany">Target Company (Optional)</Label>
            <Input id="targetCompany" placeholder="E.g., Google, Microsoft, etc." />
          </div>
        </div>
      );
    
    case 'assessment':
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="E.g., TCS, Infosys, etc." />
          </div>
          <div>
            <Label htmlFor="examPattern">Exam Pattern (if known)</Label>
            <Textarea 
              id="examPattern" 
              placeholder="Describe the assessment format"
              className="resize-none"
              rows={3}
            />
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

export default ServiceFields;
