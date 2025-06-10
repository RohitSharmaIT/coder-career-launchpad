
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormData {
  title: string;
  description: string;
  content: string;
  category: string;
  author: string;
  isPremium: boolean;
  type: string;
  size: string;
}

interface StudyMaterialFormFieldsProps {
  formData: FormData;
  onInputChange: (field: string, value: string | boolean) => void;
}

const categories = [
  { value: 'interview', label: 'Interview Preparation' },
  { value: 'dsa', label: 'Data Structures & Algorithms' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'ai-ml', label: 'AI & ML' },
  { value: 'ai-tools', label: 'AI Tools' },
  { value: 'tcs', label: 'TCS Specific' },
  { value: 'wipro', label: 'Wipro Specific' },
  { value: 'infosys', label: 'Infosys Specific' },
  { value: 'cognizant', label: 'Cognizant Specific' },
  { value: 'accenture', label: 'Accenture Specific' }
];

const StudyMaterialFormFields = ({ formData, onInputChange }: StudyMaterialFormFieldsProps) => {
  return (
    <>
      {/* Title */}
      <div>
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => onInputChange('title', e.target.value)}
          placeholder="Enter study material title"
          required
        />
      </div>

      {/* Description */}
      <div>
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => onInputChange('description', e.target.value)}
          placeholder="Enter a brief description"
          rows={3}
          required
        />
      </div>

      {/* Category */}
      <div>
        <Label htmlFor="category">Category *</Label>
        <Select
          value={formData.category}
          onValueChange={(value) => onInputChange('category', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Content */}
      <div>
        <Label htmlFor="content">Content (Rich Text)</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => onInputChange('content', e.target.value)}
          placeholder="Write your study material content here..."
          rows={8}
        />
      </div>

      {/* Author */}
      <div>
        <Label htmlFor="author">Author Name</Label>
        <Input
          id="author"
          value={formData.author}
          onChange={(e) => onInputChange('author', e.target.value)}
          placeholder="Enter author name"
        />
      </div>

      {/* Premium Toggle */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isPremium"
          checked={formData.isPremium}
          onChange={(e) => onInputChange('isPremium', e.target.checked)}
          className="rounded"
        />
        <Label htmlFor="isPremium">Mark as Premium Content</Label>
      </div>
    </>
  );
};

export default StudyMaterialFormFields;
