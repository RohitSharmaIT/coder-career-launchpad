
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ToolbarFormattingButtons from './ToolbarFormattingButtons';
import ToolbarAlignmentButtons from './ToolbarAlignmentButtons';
import ToolbarListButtons from './ToolbarListButtons';
import ToolbarColorControls from './ToolbarColorControls';
import ToolbarLinkDialog from './ToolbarLinkDialog';
import ToolbarImageDialog from './ToolbarImageDialog';

interface EditorToolbarProps {
  onCommand: (command: string, value?: string) => void;
  onImageInsert: (imageUrl: string) => void;
  onLinkInsert: (url: string, text?: string) => void;
}

const EditorToolbar = ({ onCommand, onImageInsert, onLinkInsert }: EditorToolbarProps) => {
  const [fontSize, setFontSize] = useState('3');

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-50 rounded-lg">
      {/* Text Formatting */}
      <ToolbarFormattingButtons onCommand={onCommand} />

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
      <ToolbarColorControls onCommand={onCommand} />

      <Separator orientation="vertical" className="h-6" />

      {/* Alignment */}
      <ToolbarAlignmentButtons onCommand={onCommand} />

      <Separator orientation="vertical" className="h-6" />

      {/* Lists */}
      <ToolbarListButtons onCommand={onCommand} />

      <Separator orientation="vertical" className="h-6" />

      {/* Link Dialog */}
      <ToolbarLinkDialog onLinkInsert={onLinkInsert} />

      {/* Image Dialog */}
      <ToolbarImageDialog onImageInsert={onImageInsert} />
    </div>
  );
};

export default EditorToolbar;
