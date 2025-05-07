import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, MapPin, BriefcaseBusiness, Filter } from "lucide-react";
import { useJobs } from '@/contexts/JobsContext';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { jobs } = useJobs();

  // Filter options
  const locations = ["Remote", "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Pune"];
  const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];
  const experienceLevels = ["0-1 years", "1-3 years", "3-5 years", "5+ years"];

  // Filter states
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);

  // Toggle filter selection
  const toggleFilter = (filter: string, type: 'location' | 'type' | 'experience') => {
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
    
    return matchesSearchTerm && matchesLocation && matchesType && matchesExperience;
  });

  const resetFilters = () => {
    setSelectedLocations([]);
    setSelectedTypes([]);
    setSelectedExperience([]);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Job</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our curated list of opportunities in the tech industry.
          </p>
          
          {/* Search Box */}
          <div className="max-w-2xl mx-auto mt-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search by title, company, or skills..."
              className="pl-10 py-6 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>
      
      {/* Jobs Listing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Filters - Mobile Toggle */}
            <div className="lg:hidden mb-6">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>
            
            {/* Filters */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={resetFilters}
                    className="text-brand-red hover:text-brand-red hover:bg-red-50"
                  >
                    Reset All
                  </Button>
                </div>
                
                {/* Location Filter */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3 flex items-center">
                    <MapPin size={18} className="mr-2" /> Location
                  </h3>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center">
                        <Checkbox 
                          id={`location-${location}`}
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={() => toggleFilter(location, 'location')}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={`location-${location}`}
                          className="text-sm cursor-pointer"
                        >
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Job Type Filter */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3 flex items-center">
                    <BriefcaseBusiness size={18} className="mr-2" /> Job Type
                  </h3>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <Checkbox 
                          id={`type-${type}`}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => toggleFilter(type, 'type')}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={`type-${type}`}
                          className="text-sm cursor-pointer"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Experience Level Filter */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3">Experience Level</h3>
                  <div className="space-y-2">
                    {experienceLevels.map((level) => (
                      <div key={level} className="flex items-center">
                        <Checkbox 
                          id={`experience-${level}`}
                          checked={selectedExperience.includes(level)}
                          onCheckedChange={() => toggleFilter(level, 'experience')}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={`experience-${level}`}
                          className="text-sm cursor-pointer"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-bold">{filteredJobs.length}</span> available positions
                </p>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="hidden md:flex">
                    Newest First
                  </Button>
                  <Link to="/post-job">
                    <Button className="bg-brand-red hover:bg-red-600 text-white">
                      Post a Job
                    </Button>
                  </Link>
                </div>
              </div>
              
              {filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      id={job.id}
                      title={job.title}
                      company={job.company}
                      location={job.location}
                      type={job.type}
                      postedDate={job.postedDate}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">No jobs found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Jobs;
