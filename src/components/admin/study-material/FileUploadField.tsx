
import React from 'react';
import { Label } from "@/components/ui/label";
import { Upload, Image } from "lucide-react";

interface FileUploadFieldProps {
  id: string;
  label: string;
  accept: string;
  file: File | null;
  preview?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: 'upload' | 'image';
}

const FileUploadField = ({ 
  id, 
  label, 
  accept, 
  file, 
  preview, 
  onChange, 
  icon 
}: FileUploadFieldProps) => {
  const IconComponent = icon === 'upload' ? Upload : Image;

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-2">
        <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
          <div className="flex flex-col items-center space-y-2">
            {preview ? (
              <img src={preview} alt="Preview" className="h-20 w-20 object-cover rounded" />
            ) : (
              <IconComponent className="h-8 w-8 text-gray-400" />
            )}
            <span className="text-sm text-gray-500">
              {file ? file.name : `Click to ${label.toLowerCase()}`}
            </span>
          </div>
          <input
            id={id}
            type="file"
            className="hidden"
            accept={accept}
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );
};

export default FileUploadField;
