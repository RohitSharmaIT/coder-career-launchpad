
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import EditorToolbar from './EditorToolbar';
import EditorPreview from './EditorPreview';
import EditorContent from './EditorContent';
import EditorHeader from './EditorHeader';
import { useEditorCommands } from './useEditorCommands';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const RichTextEditor = ({ 
  value, 
  onChange, 
  placeholder = "Start writing your content here...",
  minHeight = "400px"
}: RichTextEditorProps) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  
  const {
    editorRef,
    handleCommand,
    handleImageInsert,
    handleLinkInsert
  } = useEditorCommands(onChange);

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="border-b p-4">
          <EditorHeader 
            isPreviewMode={isPreviewMode}
            onTogglePreview={togglePreview}
          />
          
          {!isPreviewMode && (
            <EditorToolbar
              onCommand={handleCommand}
              onImageInsert={handleImageInsert}
              onLinkInsert={handleLinkInsert}
            />
          )}
        </div>

        <div className="p-4">
          {isPreviewMode ? (
            <EditorPreview content={value} />
          ) : (
            <EditorContent
              editorRef={editorRef}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              minHeight={minHeight}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RichTextEditor;
