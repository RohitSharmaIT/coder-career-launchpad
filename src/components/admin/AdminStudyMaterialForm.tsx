
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload, Plus, X } from "lucide-react";

const AdminStudyMaterialForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: '',
    tags: '',
    author: '',
    thumbnail: '',
    pdfFile: null as File | null
  });

  const [tagsList, setTagsList] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, pdfFile: file }));
    }
  };

  const addTag = () => {
    if (currentTag.trim() && !tagsList.includes(currentTag.trim())) {
      setTagsList(prev => [...prev, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTagsList(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Study Material Data:', {
      ...formData,
      tags: tagsList,
      publishedDate: new Date().toISOString()
    });

    toast.success("Study material published successfully!");
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      content: '',
      category: '',
      tags: '',
      author: '',
      thumbnail: '',
      pdfFile: null
    });
    setTagsList([]);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Post Study Material</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
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
              onChange={(e) => handleInputChange('description', e.target.value)}
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
              onValueChange={(value) => handleInputChange('category', value)}
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

          {/* Upload PDF */}
          <div>
            <Label htmlFor="pdf">Upload PDF / File (Optional)</Label>
            <div className="mt-2">
              <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex flex-col items-center space-y-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {formData.pdfFile ? formData.pdfFile.name : "Click to upload PDF or other files"}
                  </span>
                </div>
                <input
                  id="pdf"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {/* Content */}
          <div>
            <Label htmlFor="content">Content (Rich Text)</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              placeholder="Write your study material content here..."
              rows={8}
            />
          </div>

          {/* Tags */}
          <div>
            <Label htmlFor="tags">Tags (Optional)</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add a tag"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" onClick={addTag} variant="outline">
                <Plus size={16} />
              </Button>
            </div>
            {tagsList.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tagsList.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-brand-red/10 text-brand-red px-2 py-1 rounded-md text-sm flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:bg-brand-red/20 rounded"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Author */}
          <div>
            <Label htmlFor="author">Author Name</Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => handleInputChange('author', e.target.value)}
              placeholder="Enter author name"
            />
          </div>

          {/* Thumbnail */}
          <div>
            <Label htmlFor="thumbnail">Thumbnail Image URL (Optional)</Label>
            <Input
              id="thumbnail"
              value={formData.thumbnail}
              onChange={(e) => handleInputChange('thumbnail', e.target.value)}
              placeholder="Enter thumbnail image URL"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-brand-red hover:bg-red-600 text-white"
          >
            Publish Study Material
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdminStudyMaterialForm;
