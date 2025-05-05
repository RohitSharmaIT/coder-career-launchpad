
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface StudyHeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const StudyHero = ({ searchTerm, setSearchTerm }: StudyHeroProps) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Study Material</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access our curated collection of resources to prepare for interviews, assessments, and enhance your technical skills.
        </p>
        
        {/* Search Box */}
        <div className="max-w-2xl mx-auto mt-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search for study materials..."
            className="pl-10 py-6 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default StudyHero;
