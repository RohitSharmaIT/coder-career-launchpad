
import { Button } from "@/components/ui/button";
import JobFormFields from './JobFormFields';
import { useAdminJobForm } from '@/hooks/useAdminJobForm';
import { useCategories } from '@/contexts/CategoriesContext';
import CategorySelect from './CategorySelect';

const AdminJobForm = () => {
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
    jobDescription,
    setJobDescription,
    requirements,
    setRequirements,
    jobCategory,
    setJobCategory,
    logo,
    logoPreview,
    handleLogoChange,
    isSubmitting,
    handleJobSubmit
  } = useAdminJobForm();

  const { jobCategories, addJobCategory } = useCategories();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Post a New Job</h2>
      
      <form onSubmit={handleJobSubmit}>
        <div className="space-y-4">
          <JobFormFields
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
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            requirements={requirements}
            setRequirements={setRequirements}
            logo={logo}
            logoPreview={logoPreview}
            onLogoChange={handleLogoChange}
          />

          <CategorySelect
            label="Job Category"
            value={jobCategory}
            onValueChange={setJobCategory}
            categories={jobCategories}
            onAddCategory={addJobCategory}
            placeholder="Select job category"
            required
          />
        </div>
        
        <Button
          type="submit"
          className="w-full mt-4 bg-brand-red hover:bg-red-600 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              Posting Job...
            </span>
          ) : (
            "Post Job"
          )}
        </Button>
      </form>
    </div>
  );
};

export default AdminJobForm;
