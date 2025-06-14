
import React from 'react';
import { Button } from "@/components/ui/button";
import { Eye, Edit } from 'lucide-react';

interface EditorHeaderProps {
  isPreviewMode: boolean;
  onTogglePreview: () => void;
}

const EditorHeader = ({ isPreviewMode, onTogglePreview }: EditorHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Content Editor</h3>
      <Button
        onClick={onTogglePreview}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        {isPreviewMode ? (
          <>
            <Edit size={16} />
            Edit Mode
          </>
        ) : (
          <>
            <Eye size={16} />
            Preview Mode
          </>
        )}
      </Button>
    </div>
  );
};

export default EditorHeader;
