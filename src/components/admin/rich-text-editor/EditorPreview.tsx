
import React from 'react';

interface EditorPreviewProps {
  content: string;
}

const EditorPreview = ({ content }: EditorPreviewProps) => {
  return (
    <div className="w-full">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Preview Mode</h4>
        <p className="text-sm text-blue-600">
          This is how your content will appear to users. Switch back to edit mode to make changes.
        </p>
      </div>
      
      <div className="border rounded-lg p-6 bg-white min-h-[400px]">
        <div 
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: content || '<p class="text-gray-400 italic">No content to preview</p>' }}
        />
      </div>
    </div>
  );
};

export default EditorPreview;
