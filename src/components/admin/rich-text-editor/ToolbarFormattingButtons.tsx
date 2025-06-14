
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bold, Italic, Underline, Strikethrough } from 'lucide-react';

interface ToolbarFormattingButtonsProps {
  onCommand: (command: string, value?: string) => void;
}

const ToolbarFormattingButtons = ({ onCommand }: ToolbarFormattingButtonsProps) => {
  return (
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
  );
};

export default ToolbarFormattingButtons;
