
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  Image,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered
} from 'lucide-react';

interface EditorToolbarProps {
  onCommand: (command: string, value?: string) => void;
  onImageInsert: (imageUrl: string) => void;
  onLinkInsert: (url: string) => void;
}

const EditorToolbar = ({ onCommand, onImageInsert, onLinkInsert }: EditorToolbarProps) => {
  const [linkUrl, setLinkUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [highlightColor, setHighlightColor] = useState('#ffff00');
  const [fontSize, setFontSize] = useState('3');
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  const handleLinkSubmit = () => {
    if (linkUrl.trim()) {
      onLinkInsert(linkUrl);
      setLinkUrl('');
      setIsLinkDialogOpen(false);
    }
  };

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
    <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-50 rounded-lg">
      {/* Text Formatting */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('bold')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <Bold size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('italic')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <Italic size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('underline')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <Underline size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('strikeThrough')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <Strikethrough size={16} />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      {/* Headings */}
      <Select onValueChange={(value) => onCommand('formatBlock', value)}>
        <SelectTrigger className="w-28">
          <SelectValue placeholder="Paragraph" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="h1">Heading 1</SelectItem>
          <SelectItem value="h2">Heading 2</SelectItem>
          <SelectItem value="h3">Heading 3</SelectItem>
          <SelectItem value="h4">Heading 4</SelectItem>
          <SelectItem value="h5">Heading 5</SelectItem>
          <SelectItem value="h6">Heading 6</SelectItem>
          <SelectItem value="p">Paragraph</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="h-6" />

      {/* Font Size */}
      <Select value={fontSize} onValueChange={(value) => {
        setFontSize(value);
        onCommand('fontSize', value);
      }}>
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">8pt</SelectItem>
          <SelectItem value="2">10pt</SelectItem>
          <SelectItem value="3">12pt</SelectItem>
          <SelectItem value="4">14pt</SelectItem>
          <SelectItem value="5">18pt</SelectItem>
          <SelectItem value="6">24pt</SelectItem>
          <SelectItem value="7">36pt</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="h-6" />

      {/* Colors */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <Label htmlFor="textColor" className="text-xs">Text</Label>
          <input
            id="textColor"
            type="color"
            value={textColor}
            onChange={(e) => {
              setTextColor(e.target.value);
              onCommand('foreColor', e.target.value);
            }}
            className="w-8 h-6 border rounded cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center">
          <Label htmlFor="highlightColor" className="text-xs">Highlight</Label>
          <input
            id="highlightColor"
            type="color"
            value={highlightColor}
            onChange={(e) => {
              setHighlightColor(e.target.value);
              onCommand('backColor', e.target.value);
            }}
            className="w-8 h-6 border rounded cursor-pointer"
          />
        </div>
      </div>

      <Separator orientation="vertical" className="h-6" />

      {/* Alignment */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('justifyLeft')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <AlignLeft size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('justifyCenter')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <AlignCenter size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('justifyRight')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <AlignRight size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('justifyFull')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <AlignJustify size={16} />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      {/* Lists */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('insertUnorderedList')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <List size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommand('insertOrderedList')}
          className="p-2 hover:bg-gray-200"
          type="button"
        >
          <ListOrdered size={16} />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      {/* Link */}
      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-200" type="button">
            <Link size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert Link</DialogTitle>
            <DialogDescription>
              Add a link to your content. Select text first to make it clickable, or just insert the URL.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="linkUrl">URL</Label>
              <Input
                id="linkUrl"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://example.com"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleLinkSubmit();
                  }
                }}
              />
            </div>
            <Button onClick={handleLinkSubmit} className="w-full">
              Insert Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image */}
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
    </div>
  );
};

export default EditorToolbar;
