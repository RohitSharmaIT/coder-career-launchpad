
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCategories } from '@/contexts/CategoriesContext';
import CategorySelect from '../CategorySelect';
import RichTextEditor from '../rich-text-editor/RichTextEditor';

interface FormData {
  title: string;
  tagline: string;
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

const StudyMaterialFormFields = ({ formData, onInputChange }: StudyMaterialFormFieldsProps) => {
  const { studyMaterialCategories, addStudyMaterialCategory } = useCategories();

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

      {/* Tagline */}
      <div>
        <Label htmlFor="tagline">Tagline</Label>
        <Input
          id="tagline"
          value={formData.tagline}
          onChange={(e) => onInputChange('tagline', e.target.value)}
          placeholder="Enter a catchy tagline or subtitle"
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
      <CategorySelect
        label="Category"
        value={formData.category}
        onValueChange={(value) => onInputChange('category', value)}
        categories={studyMaterialCategories}
        onAddCategory={addStudyMaterialCategory}
        placeholder="Select a category"
        required
      />

      {/* Rich Text Content */}
      <div>
        <Label>Content (Rich Text Editor)</Label>
        <RichTextEditor
          value={formData.content}
          onChange={(value) => onInputChange('content', value)}
          placeholder="Write your study material content here..."
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
