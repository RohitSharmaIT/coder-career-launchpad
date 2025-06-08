
import { Button } from "@/components/ui/button";
import JobPostingFormFields from './JobPostingFormFields';
import { useJobPostingForm } from '@/hooks/useJobPostingForm';

const JobPostingForm = () => {
  const {
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
    experience,
    setExperience,
    skills,
    setSkills,
    description,
    setDescription,
    aboutCompany,
    setAboutCompany,
    applyBy,
    setApplyBy,
    isSubmitting,
    handleSubmitJob
  } = useJobPostingForm();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-xl font-bold mb-6">Post a New Job</h2>
      
      <form onSubmit={handleSubmitJob}>
        <JobPostingFormFields
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          company={company}
          setCompany={setCompany}
          location={location}
          setLocation={setLocation}
          jobType={jobType}
          setJobType={setJobType}
          salary={salary}
          setSalary={setSalary}
          experience={experience}
          setExperience={setExperience}
          skills={skills}
          setSkills={setSkills}
          description={description}
          setDescription={setDescription}
          aboutCompany={aboutCompany}
          setAboutCompany={setAboutCompany}
          applyBy={applyBy}
          setApplyBy={setApplyBy}
        />
        
        <Button 
          type="submit" 
          className="w-full mt-6 bg-brand-red hover:bg-red-600 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting Job..." : "Post Job"}
        </Button>
      </form>
    </div>
  );
};

export default JobPostingForm;
