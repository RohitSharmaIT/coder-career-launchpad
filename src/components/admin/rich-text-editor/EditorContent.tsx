
import React, { useCallback, useEffect } from 'react';

interface EditorContentProps {
  editorRef: React.RefObject<HTMLDivElement>;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  minHeight: string;
}

const EditorContent = ({ 
  editorRef, 
  value, 
  onChange, 
  placeholder, 
  minHeight 
}: EditorContentProps) => {
  // Set initial content when component mounts or value changes externally
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value, editorRef]);

  const handleInput = useCallback((e: React.FormEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const newContent = target.innerHTML;
    onChange(newContent);
  }, [onChange]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Handle common keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          document.execCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          document.execCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          document.execCommand('underline');
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
  );
};

export default EditorContent;
