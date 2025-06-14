
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";

interface ToolbarColorControlsProps {
  onCommand: (command: string, value?: string) => void;
}

const ToolbarColorControls = ({ onCommand }: ToolbarColorControlsProps) => {
  const [textColor, setTextColor] = useState('#000000');
  const [highlightColor, setHighlightColor] = useState('#ffff00');

  return (
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
  );
};

export default ToolbarColorControls;
