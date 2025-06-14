
import React from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, BriefcaseBusiness, Tag } from "lucide-react";

interface Category {
  value: string;
  label: string;
}

interface JobsFiltersProps {
  selectedLocations: string[];
  selectedTypes: string[];
  selectedExperience: string[];
  selectedCategories: string[];
  toggleFilter: (filter: string, type: 'location' | 'type' | 'experience' | 'category') => void;
  resetFilters: () => void;
  locations: string[];
  jobTypes: string[];
  experienceLevels: string[];
  categories: Category[];
}

const JobsFilters = ({ 
  selectedLocations,
  selectedTypes,
  selectedExperience,
  selectedCategories,
  toggleFilter,
  resetFilters,
  locations,
  jobTypes,
  experienceLevels,
  categories
}: JobsFiltersProps) => {
  return (
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
      
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-bold mb-3 flex items-center">
          <Tag size={18} className="mr-2" /> Category
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.value} className="flex items-center">
              <Checkbox 
                id={`category-${category.value}`}
                checked={selectedCategories.includes(category.value)}
                onCheckedChange={() => toggleFilter(category.value, 'category')}
                className="mr-2"
              />
              <label 
                htmlFor={`category-${category.value}`}
                className="text-sm cursor-pointer"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
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
  );
};

export default JobsFilters;
