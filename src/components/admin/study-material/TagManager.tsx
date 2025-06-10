
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";

interface TagManagerProps {
  tags: string[];
  currentTag: string;
  setCurrentTag: (tag: string) => void;
  onAddTag: () => void;
  onRemoveTag: (tag: string) => void;
}

const TagManager = ({ 
  tags, 
  currentTag, 
  setCurrentTag, 
  onAddTag, 
  onRemoveTag 
}: TagManagerProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAddTag();
    }
  };

  return (
    <div>
      <Label htmlFor="tags">Tags (Optional)</Label>
      <div className="flex gap-2 mb-2">
        <Input
          value={currentTag}
          onChange={(e) => setCurrentTag(e.target.value)}
          placeholder="Add a tag"
          onKeyPress={handleKeyPress}
        />
        <Button type="button" onClick={onAddTag} variant="outline">
          <Plus size={16} />
        </Button>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-brand-red/10 text-brand-red px-2 py-1 rounded-md text-sm flex items-center gap-1"
            >
              {tag}
              <button
                type="button"
                onClick={() => onRemoveTag(tag)}
                className="hover:bg-brand-red/20 rounded"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagManager;
