import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useStudyMaterials } from "@/contexts/StudyMaterialsContext";
import FileUploadField from "./study-material/FileUploadField";
import TagManager from "./study-material/TagManager";
import StudyMaterialFormFields from "./study-material/StudyMaterialFormFields";

const AdminStudyMaterialForm = () => {
  const { addStudyMaterial } = useStudyMaterials();
  
  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    description: '',
    content: '',
    category: '',
    author: '',
    isPremium: false,
    type: 'PDF',
    size: '1MB'
  });

  const [tagsList, setTagsList] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>('');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePdfFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPdfFile(file);
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(1);
      setFormData(prev => ({ 
        ...prev, 
        size: `${sizeInMB}MB`,
        type: file.type.includes('pdf') ? 'PDF' : 'Document'
      }));
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
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

    const thumbnailUrl = thumbnailPreview || "/placeholder.svg";

    addStudyMaterial({
      title: formData.title,
      tagline: formData.tagline,
      description: formData.description,
      content: formData.content,
      category: formData.category,
      tags: tagsList,
      author: formData.author || 'Anonymous',
      thumbnail: thumbnailUrl,
      type: formData.type,
      size: formData.size,
      isPremium: formData.isPremium,
      pdfFile: pdfFile
    });

    toast.success("Study material published successfully!");
    
    // Reset form
    setFormData({
      title: '',
      tagline: '',
      description: '',
      content: '',
      category: '',
      author: '',
      isPremium: false,
      type: 'PDF',
      size: '1MB'
    });
    setTagsList([]);
    setPdfFile(null);
    setThumbnailFile(null);
    setThumbnailPreview('');
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Post Study Material</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <StudyMaterialFormFields 
            formData={formData}
            onInputChange={handleInputChange}
          />

          <FileUploadField
            id="thumbnail"
            label="Upload Thumbnail Image (Optional)"
            accept="image/*"
            file={thumbnailFile}
            preview={thumbnailPreview}
            onChange={handleThumbnailChange}
            icon="image"
          />

          <FileUploadField
            id="pdf"
            label="Upload PDF / File (Optional)"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            file={pdfFile}
            onChange={handlePdfFileChange}
            icon="upload"
          />

          <TagManager
            tags={tagsList}
            currentTag={currentTag}
            setCurrentTag={setCurrentTag}
            onAddTag={addTag}
            onRemoveTag={removeTag}
          />

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
