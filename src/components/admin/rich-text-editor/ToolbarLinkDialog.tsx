
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Link } from 'lucide-react';

interface ToolbarLinkDialogProps {
  onLinkInsert: (url: string, text?: string) => void;
}

const ToolbarLinkDialog = ({ onLinkInsert }: ToolbarLinkDialogProps) => {
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);

  const handleLinkSubmit = () => {
    if (linkUrl.trim()) {
      const displayText = linkText.trim() || 'Click here';
      onLinkInsert(linkUrl, displayText);
      setLinkUrl('');
      setLinkText('');
      setIsLinkDialogOpen(false);
    }
  };

  return (
    <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-200" type="button">
          <Link size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insert Link</DialogTitle>
          <DialogDescription>
            Add a link with custom display text. The link will open in a new tab.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="linkUrl">URL *</Label>
            <Input
              id="linkUrl"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleLinkSubmit();
                }
              }}
            />
          </div>
          <div>
            <Label htmlFor="linkText">Display Text</Label>
            <Input
              id="linkText"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="Click here (optional - defaults to 'Click here')"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleLinkSubmit();
                }
              }}
            />
          </div>
          <Button onClick={handleLinkSubmit} className="w-full" disabled={!linkUrl.trim()}>
            Insert Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ToolbarLinkDialog;
