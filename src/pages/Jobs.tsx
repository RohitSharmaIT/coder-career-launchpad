
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useJobs } from '@/contexts/JobsContext';
import { useCategories } from '@/contexts/CategoriesContext';
import JobsHero from '@/components/jobs/JobsHero';
import JobsFilters from '@/components/jobs/JobsFilters';
import JobsList from '@/components/jobs/JobsList';
import MobileFilterToggle from '@/components/jobs/MobileFilterToggle';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { jobs } = useJobs();
  const { jobCategories } = useCategories();

  // Filter options
  const locations = ["Remote", "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Pune"];
  const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];
  const experienceLevels = ["0-1 years", "1-3 years", "3-5 years", "5+ years"];

  // Filter states
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Toggle filter selection
  const toggleFilter = (filter: string, type: 'location' | 'type' | 'experience' | 'category') => {
    if (type === 'location') {
      if (selectedLocations.includes(filter)) {
        setSelectedLocations(selectedLocations.filter(loc => loc !== filter));
      } else {
        setSelectedLocations([...selectedLocations, filter]);
      }
    } else if (type === 'type') {
      if (selectedTypes.includes(filter)) {
        setSelectedTypes(selectedTypes.filter(t => t !== filter));
      } else {
        setSelectedTypes([...selectedTypes, filter]);
      }
    } else if (type === 'experience') {
      if (selectedExperience.includes(filter)) {
        setSelectedExperience(selectedExperience.filter(exp => exp !== filter));
      } else {
        setSelectedExperience([...selectedExperience, filter]);
      }
    } else if (type === 'category') {
      if (selectedCategories.includes(filter)) {
        setSelectedCategories(selectedCategories.filter(cat => cat !== filter));
      } else {
        setSelectedCategories([...selectedCategories, filter]);
      }
    }
  };

  // Filter jobs based on search term and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearchTerm = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.skills && job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesLocation = selectedLocations.length === 0 || 
      selectedLocations.some(loc => job.location.includes(loc));
    
    const matchesType = selectedTypes.length === 0 || 
      selectedTypes.includes(job.type);
    
    // Simplified experience matching
    const matchesExperience = selectedExperience.length === 0 || true;
    
    // Category matching - assuming jobs have a category property
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.some(cat => {
        // Find the category object and match by value
        const categoryObj = jobCategories.find(c => c.value === cat);
        return categoryObj && job.title.toLowerCase().includes(categoryObj.label.toLowerCase());
      });
    
    return matchesSearchTerm && matchesLocation && matchesType && matchesExperience && matchesCategory;
  });

  const resetFilters = () => {
    setSelectedLocations([]);
    setSelectedTypes([]);
    setSelectedExperience([]);
    setSelectedCategories([]);
  };

  return (
    <div className="pt-20">
      <Navbar />
      
      {/* Hero Section with Search */}
      <JobsHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {/* Jobs Listing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Filters - Mobile Toggle */}
            <MobileFilterToggle showFilters={showFilters} setShowFilters={setShowFilters} />
            
            {/* Filters */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <JobsFilters 
                selectedLocations={selectedLocations}
                selectedTypes={selectedTypes}
                selectedExperience={selectedExperience}
                selectedCategories={selectedCategories}
                toggleFilter={toggleFilter}
                resetFilters={resetFilters}
                locations={locations}
                jobTypes={jobTypes}
                experienceLevels={experienceLevels}
                categories={jobCategories}
              />
            </div>
            
            {/* Job Listings */}
            <JobsList filteredJobs={filteredJobs} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Jobs;
