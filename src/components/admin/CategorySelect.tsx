
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";

interface CategorySelectProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  categories: Array<{ value: string; label: string }>;
  onAddCategory: (category: { value: string; label: string }) => void;
  placeholder?: string;
  required?: boolean;
}

const CategorySelect = ({ 
  label, 
  value, 
  onValueChange, 
  categories, 
  onAddCategory,
  placeholder = "Select a category",
  required = false 
}: CategorySelectProps) => {
  const [showAddNew, setShowAddNew] = useState(false);
  const [newCategoryLabel, setNewCategoryLabel] = useState('');

  const handleAddNewCategory = () => {
    if (!newCategoryLabel.trim()) {
      toast.error("Please enter a category name");
      return;
    }

    const newCategoryValue = newCategoryLabel.toLowerCase().replace(/\s+/g, '-');
    
    // Check if category already exists
    if (categories.some(cat => cat.value === newCategoryValue)) {
      toast.error("This category already exists");
      return;
    }

    const newCategory = {
      value: newCategoryValue,
      label: newCategoryLabel.trim()
    };

    onAddCategory(newCategory);
    onValueChange(newCategoryValue);
    setNewCategoryLabel('');
    setShowAddNew(false);
    toast.success(`Category "${newCategoryLabel}" added successfully`);
  };

  const handleCancelAdd = () => {
    setShowAddNew(false);
    setNewCategoryLabel('');
  };

  return (
    <div>
      <Label htmlFor="category" className={required ? "required" : ""}>{label}</Label>
      
      {!showAddNew ? (
        <div className="space-y-2">
          <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowAddNew(true)}
            className="text-sm"
          >
            <Plus size={14} className="mr-1" />
            Add New Category
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={newCategoryLabel}
              onChange={(e) => setNewCategoryLabel(e.target.value)}
              placeholder="Enter new category name"
              onKeyPress={(e) => e.key === 'Enter' && handleAddNewCategory()}
            />
            <Button
              type="button"
              size="sm"
              onClick={handleAddNewCategory}
              className="bg-brand-red hover:bg-red-600"
            >
              Add
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCancelAdd}
            >
              <X size={14} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
