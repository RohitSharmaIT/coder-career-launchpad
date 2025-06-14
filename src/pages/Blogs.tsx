
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useBlogs } from '@/contexts/BlogsContext';
import { useCategories } from '@/contexts/CategoriesContext';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { blogs } = useBlogs();
  const { blogCategories } = useCategories();

  // Convert categories from context to display format
  const categories = ['All', ...blogCategories.map(cat => cat.label)];

  // Convert blogs to the format expected by the page
  const allBlogs = blogs.map(blog => {
    // Find the category label from the context
    const categoryObj = blogCategories.find(cat => cat.value === blog.category);
    return {
      id: blog.id,
      title: blog.title,
      excerpt: blog.excerpt,
      thumbnail: blog.thumbnail,
      category: categoryObj ? categoryObj.label : blog.category,
      date: blog.date
    };
  });

  // Filter blogs based on search term and active category
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearchTerm = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tech insights, career advice, and industry trends.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search Box */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search blogs..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Categories */}
              <div>
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "default" : "outline"}
                      className={`mr-2 mb-2 ${
                        activeCategory === category 
                          ? "bg-brand-red hover:bg-red-600" 
                          : "border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {allBlogs.slice(0, 3).map((blog) => (
                    <div key={blog.id} className="flex gap-3">
                      <div className="w-20 h-20 shrink-0 rounded overflow-hidden">
                        <img 
                          src={blog.thumbnail} 
                          alt={blog.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{blog.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">{blog.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Blog Listings */}
            <div className="lg:w-3/4">
              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      id={blog.id}
                      title={blog.title}
                      excerpt={blog.excerpt}
                      thumbnail={blog.thumbnail}
                      category={blog.category}
                      date={blog.date}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-xl font-bold mb-2">No blogs found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or category filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blogs;
