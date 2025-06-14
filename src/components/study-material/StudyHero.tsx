
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search, BookOpen, GraduationCap } from "lucide-react";

interface StudyHeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const StudyHero = ({ searchTerm, setSearchTerm }: StudyHeroProps) => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-blue-300/20">
        <BookOpen size={80} />
      </div>
      <div className="absolute bottom-20 right-10 text-purple-300/20">
        <GraduationCap size={100} />
      </div>
      
      <div className="relative container-full flex items-center justify-center min-h-[60vh] py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white rounded-full px-6 py-3 mb-8 font-medium text-lg border border-white/20">
            <BookOpen className="h-5 w-5" />
            COMPREHENSIVE LEARNING RESOURCES
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            Study Material
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Hub
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Access our curated collection of resources to prepare for interviews, assessments, and enhance your technical skills with comprehensive study materials.
          </p>
          
          {/* Enhanced Search Box */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white rounded-xl p-2">
              <div className="flex items-center">
                <Search className="ml-4 text-gray-400" size={24} />
                <Input
                  type="text"
                  placeholder="Search for study materials, topics, or categories..."
                  className="border-0 bg-transparent text-lg py-4 px-4 focus:ring-0 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyHero;
