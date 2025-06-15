
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useBlogs } from '@/contexts/BlogsContext';

const BlogsSection = () => {
  const { blogs } = useBlogs();
  
  // Get the 3 most recent blogs
  const recentBlogs = blogs.slice(0, 3);

  return (
    <section className="py-12 md:py-20 bg-white animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in the tech industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-2 md:mt-8">
          {recentBlogs.map((blog) => (
            <div key={blog.id} className="blog-card group animate-fade-in">
              <div className="relative h-44 md:h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={blog.thumbnail} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-brand-red text-white text-xs font-medium px-2 py-1 rounded">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-brand-red transition-colors text-center">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-2 md:mb-4 line-clamp-2 text-center">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Link to="/blogs">
            <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
