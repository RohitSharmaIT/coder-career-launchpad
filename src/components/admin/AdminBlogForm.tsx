
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useBlogs } from '@/contexts/BlogsContext';
import { useCategories } from '@/contexts/CategoriesContext';
import CategorySelect from './CategorySelect';
import RichTextEditor from './rich-text-editor/RichTextEditor';

const AdminBlogForm = () => {
  const navigate = useNavigate();
  const { addBlog } = useBlogs();
  const { blogCategories, addBlogCategory } = useCategories();
  
  // Blog form state
  const [blogTitle, setBlogTitle] = useState('');
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const [blogImagePreview, setBlogImagePreview] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBlogImage(file);
      setBlogImagePreview(URL.createObjectURL(file));
    }
  };
  
  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!blogTitle || !blogContent || !blogCategory) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    
    if (!blogImage) {
      toast.error("Please upload a blog image");
      setIsSubmitting(false);
      return;
    }
    
    // Generate excerpt from content (first 150 characters, strip HTML)
    const textContent = blogContent.replace(/<[^>]*>/g, '');
    const excerpt = textContent.length > 150 
      ? textContent.substring(0, 150) + "..."
      : textContent;
    
    // Add blog to the context
    addBlog({
      title: blogTitle,
      content: blogContent,
      category: blogCategory,
      excerpt: excerpt,
      thumbnail: blogImagePreview // In real app, this would be uploaded to server
    });
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Blog post published successfully");
      // Reset form
      setBlogTitle('');
      setBlogImage(null);
      setBlogImagePreview('');
      setBlogContent('');
      setBlogCategory('');
      setIsSubmitting(false);
      
      // Navigate to blogs page
      navigate('/blogs');
    }, 1500);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Write a New Blog Post</h2>
      
      <form onSubmit={handleBlogSubmit}>
        <div className="space-y-6">
          <div>
            <Label htmlFor="blogTitle" className="required">Blog Title</Label>
            <Input
              id="blogTitle"
              placeholder="Enter an attention-grabbing title"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              required
            />
          </div>
          
          <CategorySelect
            label="Category"
            value={blogCategory}
            onValueChange={setBlogCategory}
            categories={blogCategories}
            onAddCategory={addBlogCategory}
            placeholder="Select a category"
            required
          />
          
          <div>
            <Label htmlFor="blogImage" className="required">Featured Image</Label>
            <div className="mt-1 flex items-center">
              <label className="block w-full">
                <span className="sr-only">Choose file</span>
                <input
                  id="blogImage"
                  type="file"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-600"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </label>
            </div>
            
            {blogImagePreview && (
              <div className="mt-2">
                <img 
                  src={blogImagePreview} 
                  alt="Blog preview" 
                  className="h-40 object-cover rounded-md"
                />
              </div>
            )}
          </div>
          
          <div>
            <Label className="required">Blog Content</Label>
            <div className="mt-2">
              <RichTextEditor
                value={blogContent}
                onChange={setBlogContent}
                placeholder="Write your blog post content here... Use the toolbar to format your text, add images, links, and more."
                minHeight="500px"
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-brand-red hover:bg-red-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                Publishing Blog...
              </span>
            ) : (
              "Publish Blog Post"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogForm;
