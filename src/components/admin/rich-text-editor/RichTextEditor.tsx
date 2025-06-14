
import React, { useState, useRef, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import EditorToolbar from './EditorToolbar';
import EditorPreview from './EditorPreview';
import { Eye, Edit } from 'lucide-react';

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
  const editorRef = useRef<HTMLDivElement>(null);

  const handleCommand = useCallback((command: string, value?: string) => {
    if (!editorRef.current) return;
    
    editorRef.current.focus();
    document.execCommand(command, false, value);
    
    // Update the content after command execution
    const newContent = editorRef.current.innerHTML;
    onChange(newContent);
  }, [onChange]);

  const handleInput = useCallback(() => {
    if (!editorRef.current) return;
    const newContent = editorRef.current.innerHTML;
    onChange(newContent);
  }, [onChange]);

  const handleImageInsert = useCallback((imageUrl: string) => {
    handleCommand('insertImage', imageUrl);
  }, [handleCommand]);

  const handleLinkInsert = useCallback((url: string) => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      handleCommand('createLink', url);
    } else {
      // If no text is selected, insert the URL as both text and link
      handleCommand('insertHTML', `<a href="${url}" target="_blank">${url}</a>`);
    }
  }, [handleCommand]);

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="border-b p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Content Editor</h3>
            <Button
              onClick={togglePreview}
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
            <div
              ref={editorRef}
              contentEditable
              onInput={handleInput}
              dangerouslySetInnerHTML={{ __html: value }}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent prose prose-sm max-w-none"
              style={{ minHeight }}
              data-placeholder={placeholder}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RichTextEditor;
