
import React from 'react';
import { Button } from "@/components/ui/button";
import { List, ListOrdered } from 'lucide-react';

interface ToolbarListButtonsProps {
  onCommand: (command: string, value?: string) => void;
}

const ToolbarListButtons = ({ onCommand }: ToolbarListButtonsProps) => {
  const handleListCommand = (listType: 'insertUnorderedList' | 'insertOrderedList') => {
    console.log('List command triggered:', listType);
    onCommand(listType);
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleListCommand('insertUnorderedList')}
        className="p-2 hover:bg-gray-200"
        type="button"
        title="Bullet List"
      >
        <List size={16} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleListCommand('insertOrderedList')}
        className="p-2 hover:bg-gray-200"
        type="button"
        title="Numbered List"
      >
        <ListOrdered size={16} />
      </Button>
    </div>
  );
};

export default ToolbarListButtons;
