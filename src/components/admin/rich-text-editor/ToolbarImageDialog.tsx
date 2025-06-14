
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Image } from 'lucide-react';

interface ToolbarImageDialogProps {
  onImageInsert: (imageUrl: string) => void;
}

const ToolbarImageDialog = ({ onImageInsert }: ToolbarImageDialogProps) => {
  const [imageUrl, setImageUrl] = useState('');
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  const handleImageSubmit = () => {
    if (imageUrl.trim()) {
      onImageInsert(imageUrl);
      setImageUrl('');
      setIsImageDialogOpen(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          onImageInsert(result);
          setIsImageDialogOpen(false);
          toast.success('Image uploaded successfully');
        }
      };
      reader.onerror = () => {
        toast.error('Error reading image file');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-200" type="button">
          <Image size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insert Image</DialogTitle>
          <DialogDescription>
            Add an image to your content by uploading a file or providing a URL.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="imageUpload">Upload Image (Recommended)</Label>
            <Input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">Max size: 5MB. Formats: JPG, PNG, GIF, WebP</p>
          </div>
          
          <div className="text-center">
            <span className="text-sm text-gray-500">or</span>
          </div>
          
          <div>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleImageSubmit();
                }
              }}
            />
          </div>
          <Button onClick={handleImageSubmit} className="w-full" disabled={!imageUrl.trim()}>
            Insert from URL
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ToolbarImageDialog;
