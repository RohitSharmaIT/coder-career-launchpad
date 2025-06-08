
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface JobFormFieldsProps {
  jobTitle: string;
  setJobTitle: (value: string) => void;
  company: string;
  setCompany: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  jobType: string;
  setJobType: (value: string) => void;
  salary: string;
  setSalary: (value: string) => void;
  jobDescription: string;
  setJobDescription: (value: string) => void;
  requirements: string;
  setRequirements: (value: string) => void;
}

const JobFormFields = ({
  jobTitle,
  setJobTitle,
  company,
  setCompany,
  location,
  setLocation,
  jobType,
  setJobType,
  salary,
  setSalary,
  jobDescription,
  setJobDescription,
  requirements,
  setRequirements
}: JobFormFieldsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="jobTitle" className="required">Job Title</Label>
        <Input
          id="jobTitle"
          placeholder="e.g., Frontend Developer"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="company" className="required">Company Name</Label>
        <Input
          id="company"
          placeholder="e.g., TechCorp Inc."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="location" className="required">Location</Label>
          <Input
            id="location"
            placeholder="e.g., Bangalore, India"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="jobType" className="required">Job Type</Label>
          <select
            id="jobType"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
            <option value="remote">Remote</option>
          </select>
        </div>
      </div>
      
      <div>
        <Label htmlFor="salary">Salary Range (Optional)</Label>
        <Input
          id="salary"
          placeholder="e.g., ₹8-12 LPA"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      
      <div>
        <Label htmlFor="jobDescription" className="required">Job Description</Label>
        <Textarea
          id="jobDescription"
          placeholder="Describe the role, responsibilities, and what the candidate will be doing..."
          rows={5}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="requirements" className="required">Requirements & Qualifications</Label>
        <Textarea
          id="requirements"
          placeholder="List the skills, experience, and qualifications required for this role (comma separated)..."
          rows={5}
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default JobFormFields;
