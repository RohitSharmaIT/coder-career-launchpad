
import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface MobileFilterToggleProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const MobileFilterToggle = ({ showFilters, setShowFilters }: MobileFilterToggleProps) => {
  return (
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
  );
};

export default MobileFilterToggle;
