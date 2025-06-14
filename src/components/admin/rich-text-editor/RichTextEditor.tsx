
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
    
    console.log('Executing command:', command, 'with value:', value);
    
    // Ensure editor is focused
    editorRef.current.focus();
    
    try {
      // Enhanced list handling for selected text
      if (command === 'insertUnorderedList' || command === 'insertOrderedList') {
        const selection = window.getSelection();
        const selectedText = selection?.toString().trim();
        
        if (selectedText && selection && selection.rangeCount > 0) {
          // Handle selected text - convert to list items
          const range = selection.getRangeAt(0);
          const listTag = command === 'insertUnorderedList' ? 'ul' : 'ol';
          const listElement = document.createElement(listTag);
          listElement.style.marginLeft = '20px';
          listElement.style.paddingLeft = '20px';
          listElement.style.listStyleType = command === 'insertUnorderedList' ? 'disc' : 'decimal';
          
          // Split selected text by lines and create list items
          const lines = selectedText.split('\n').filter(line => line.trim());
          
          if (lines.length > 0) {
            lines.forEach(line => {
              const listItem = document.createElement('li');
              listItem.style.marginBottom = '4px';
              listItem.textContent = line.trim();
              listElement.appendChild(listItem);
            });
            
            // Replace selected text with list
            range.deleteContents();
            range.insertNode(listElement);
            
            // Position cursor after the list
            const newRange = document.createRange();
            newRange.setStartAfter(listElement);
            newRange.setEndAfter(listElement);
            selection.removeAllRanges();
            selection.addRange(newRange);
          }
        } else {
          // No text selected - try standard command first
          const success = document.execCommand(command, false, value);
          console.log('List command success:', success);
          
          // Fallback approach if standard command fails
          if (!success) {
            const listTag = command === 'insertUnorderedList' ? 'ul' : 'ol';
            const listElement = document.createElement(listTag);
            listElement.style.marginLeft = '20px';
            listElement.style.paddingLeft = '20px';
            listElement.style.listStyleType = command === 'insertUnorderedList' ? 'disc' : 'decimal';
            
            const listItem = document.createElement('li');
            listItem.style.marginBottom = '4px';
            listItem.innerHTML = '&nbsp;';
            listElement.appendChild(listItem);
            
            if (selection && selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              range.insertNode(listElement);
              
              // Position cursor in the list item
              const newRange = document.createRange();
              newRange.setStart(listItem, 0);
              newRange.setEnd(listItem, 0);
              selection.removeAllRanges();
              selection.addRange(newRange);
            } else {
              // Insert at the end if no selection
              editorRef.current.appendChild(listElement);
            }
          }
        }
      } else {
        // Regular command execution
        document.execCommand(command, false, value);
      }
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

  // Enhanced link insertion with custom text
  const handleLinkInsert = useCallback((url: string, displayText?: string) => {
    if (!editorRef.current) return;
    
    editorRef.current.focus();
    
    const selection = window.getSelection();
    const text = displayText || 'Click here';
    
    // Create the link element
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = text;
    link.style.color = '#0066cc';
    link.style.textDecoration = 'underline';
    
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      
      // If there's selected text, replace it with the link
      if (selection.toString().trim()) {
        link.textContent = selection.toString();
        range.deleteContents();
        range.insertNode(link);
      } else {
        // If no selected text, insert the link with custom text
        range.insertNode(link);
      }
      
      // Position cursor after the link
      range.setStartAfter(link);
      range.setEndAfter(link);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      // If no selection, append to the end
      editorRef.current.appendChild(link);
      editorRef.current.appendChild(document.createTextNode(' '));
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
    
    // Handle Enter key for better list behavior
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
