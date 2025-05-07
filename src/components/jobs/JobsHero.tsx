
import React from 'react';
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface JobsHeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const JobsHero = ({ searchTerm, setSearchTerm }: JobsHeroProps) => {
  return (
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
  );
};

export default JobsHero;
