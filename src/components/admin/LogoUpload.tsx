
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface LogoUploadProps {
  logo: File | null;
  logoPreview: string;
  onLogoChange: (file: File | null) => void;
}

const LogoUpload = ({ logo, logoPreview, onLogoChange }: LogoUploadProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onLogoChange(file);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onLogoChange(file);
    }
  };

  const removeLogo = () => {
    onLogoChange(null);
  };

  return (
    <div>
      <Label className="block mb-2">Company Logo (Optional)</Label>
      
      {logoPreview ? (
        <div className="relative inline-block">
          <img
            src={logoPreview}
            alt="Company logo preview"
            className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200"
          />
          <button
            type="button"
            onClick={removeLogo}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
          >
            <X size={12} />
          </button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragActive
              ? 'border-brand-red bg-red-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-2">
            Drag and drop your logo here, or click to browse
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="logo-upload"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById('logo-upload')?.click()}
          >
            Choose File
          </Button>
          <p className="text-xs text-gray-500 mt-2">
            PNG, JPG, GIF up to 5MB
          </p>
        </div>
      )}
    </div>
  );
};

export default LogoUpload;
