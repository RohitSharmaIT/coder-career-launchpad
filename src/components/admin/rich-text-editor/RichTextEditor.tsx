
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
    
    // Save the current selection before executing command
    const selection = window.getSelection();
    const range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    
    try {
      document.execCommand(command, false, value);
    } catch (error) {
      console.log('Command execution failed:', error);
    }
    
    // Update the content after command execution
    setTimeout(() => {
      if (editorRef.current) {
        const newContent = editorRef.current.innerHTML;
        onChange(newContent);
      }
    }, 50);
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
    img.style.display = 'block';
    img.style.margin = '10px 0';
    img.alt = 'Inserted image';
    img.draggable = false;
    
    // Insert the image at cursor position or at the end
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      
      // Create a new paragraph after the image
      const br = document.createElement('br');
      const div = document.createElement('div');
      div.appendChild(img);
      div.appendChild(br);
      
      range.insertNode(div);
      
      // Move cursor after the image
      range.setStartAfter(div);
      range.setEndAfter(div);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      // If no selection, append to the end
      const div = document.createElement('div');
      div.appendChild(img);
      div.appendChild(document.createElement('br'));
      editorRef.current.appendChild(div);
    }
    
    // Update content
    setTimeout(() => {
      if (editorRef.current) {
        const newContent = editorRef.current.innerHTML;
        onChange(newContent);
      }
    }, 50);
  }, [onChange]);

  const handleLinkInsert = useCallback((url: string) => {
    if (!editorRef.current) return;
    
    editorRef.current.focus();
    
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      // If text is selected, make it a link
      try {
        document.execCommand('createLink', false, url);
        // Set target="_blank" for the created link
        setTimeout(() => {
          const links = editorRef.current?.querySelectorAll('a[href="' + url + '"]');
          links?.forEach(link => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
          });
        }, 10);
      } catch (error) {
        console.log('Link creation failed:', error);
      }
    } else {
      // If no text is selected, insert the URL as both text and link
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = url;
      link.style.color = '#0066cc';
      link.style.textDecoration = 'underline';
      
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.insertNode(link);
        range.setStartAfter(link);
        range.setEndAfter(link);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        editorRef.current.appendChild(link);
      }
    }
    
    // Update content
    setTimeout(() => {
      if (editorRef.current) {
        const newContent = editorRef.current.innerHTML;
        onChange(newContent);
      }
    }, 50);
  }, [onChange]);

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
    
    // Handle Enter key to maintain proper line breaks
    if (e.key === 'Enter') {
      // Let the browser handle Enter normally for better list behavior
      setTimeout(() => {
        if (editorRef.current) {
          const newContent = editorRef.current.innerHTML;
          onChange(newContent);
        }
      }, 10);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    // Allow paste but clean up after
    setTimeout(() => {
      if (editorRef.current) {
        const newContent = editorRef.current.innerHTML;
        onChange(newContent);
      }
    }, 50);
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
              onPaste={handlePaste}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent prose prose-sm max-w-none"
              style={{ 
                minHeight,
                direction: 'ltr',
                textAlign: 'left',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
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
