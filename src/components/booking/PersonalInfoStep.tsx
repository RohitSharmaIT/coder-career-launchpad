
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ConsultationData {
  name: string;
  companyName: string;
  email: string;
  contactDetail: string;
  requirement: string;
  selectedDate: Date | undefined;
  selectedTime: string;
}

interface PersonalInfoStepProps {
  formData: ConsultationData;
  onInputChange: (field: keyof ConsultationData, value: string | Date | undefined) => void;
}

const PersonalInfoStep = ({ formData, onInputChange }: PersonalInfoStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            placeholder="Enter your full name"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e) => onInputChange('companyName', e.target.value)}
            placeholder="Enter your company name"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            placeholder="Enter your email address"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="contactDetail">Contact Number *</Label>
          <Input
            id="contactDetail"
            value={formData.contactDetail}
            onChange={(e) => onInputChange('contactDetail', e.target.value)}
            placeholder="Enter your phone number"
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="requirement">Requirement to Connect *</Label>
        <Textarea
          id="requirement"
          value={formData.requirement}
          onChange={(e) => onInputChange('requirement', e.target.value)}
          placeholder="Describe your requirements or questions"
          rows={4}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
