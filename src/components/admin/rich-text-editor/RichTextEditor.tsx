
import React, { useState, useRef, useCallback, useEffect } from 'react';
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

  // Set initial content when component mounts or value changes externally
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value]);

  const handleCommand = useCallback((command: string, value?: string) => {
    if (!editorRef.current) return;
    
    editorRef.current.focus();
    document.execCommand(command, false, value);
    
    // Update the content after command execution
    setTimeout(() => {
      if (editorRef.current) {
        const newContent = editorRef.current.innerHTML;
        onChange(newContent);
      }
    }, 0);
  }, [onChange]);

  const handleInput = useCallback((e: React.FormEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const newContent = target.innerHTML;
    onChange(newContent);
  }, [onChange]);

  const handleImageInsert = useCallback((imageUrl: string) => {
    if (!editorRef.current) return;
    
    editorRef.current.focus();
    
    // Create a proper image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.alt = 'Inserted image';
    
    // Insert the image at cursor position
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(img);
      
      // Move cursor after the image
      range.setStartAfter(img);
      range.setEndAfter(img);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      // If no selection, append to the end
      editorRef.current.appendChild(img);
    }
    
    // Update content
    setTimeout(() => {
      if (editorRef.current) {
        const newContent = editorRef.current.innerHTML;
        onChange(newContent);
      }
    }, 0);
  }, [onChange]);

  const handleLinkInsert = useCallback((url: string) => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      handleCommand('createLink', url);
    } else {
      // If no text is selected, insert the URL as both text and link
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.textContent = url;
      
      if (editorRef.current) {
        editorRef.current.focus();
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
          const range = sel.getRangeAt(0);
          range.insertNode(link);
          range.setStartAfter(link);
          range.setEndAfter(link);
          sel.removeAllRanges();
          sel.addRange(range);
        } else {
          editorRef.current.appendChild(link);
        }
        
        setTimeout(() => {
          const newContent = editorRef.current!.innerHTML;
          onChange(newContent);
        }, 0);
      }
    }
  }, [handleCommand, onChange]);

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Handle common keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          handleCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          handleCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          handleCommand('underline');
          break;
      }
    }
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
              onKeyDown={handleKeyDown}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent prose prose-sm max-w-none"
              style={{ 
                minHeight,
                direction: 'ltr',
                textAlign: 'left'
              }}
              suppressContentEditableWarning={true}
              data-placeholder={placeholder}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RichTextEditor;
