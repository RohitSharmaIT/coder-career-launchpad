
import React from 'react';
import { Button } from "@/components/ui/button";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';

interface ToolbarAlignmentButtonsProps {
  onCommand: (command: string, value?: string) => void;
}

const ToolbarAlignmentButtons = ({ onCommand }: ToolbarAlignmentButtonsProps) => {
  return (
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
  );
};

export default ToolbarAlignmentButtons;
