
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample blog categories
  const categories = [
    'All',
    'Interview',
    'Resume',
    'Career',
    'Learning',
    'Technology',
    'Programming',
    'Job Search'
  ];

  // Sample blog data
  const allBlogs = [
    {
      id: 1,
      title: "Top 10 Interview Questions for Frontend Developers",
      excerpt: "Prepare for your next frontend interview with these commonly asked questions and expert answers.",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      category: "Interview",
      date: "May 10, 2024"
    },
    {
      id: 2,
      title: "How to Optimize Your Resume for ATS Systems",
      excerpt: "Learn how to structure your resume to pass through Applicant Tracking Systems and reach human recruiters.",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      category: "Resume",
      date: "May 5, 2024"
    },
    {
      id: 3,
      title: "Learning Data Structures: A Complete Guide",
      excerpt: "Master the fundamentals of data structures to ace your coding interviews and become a better programmer.",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      category: "Learning",
      date: "April 28, 2024"
    },
    {
      id: 4,
      title: "5 Tips for Remote Job Success",
      excerpt: "Navigate the challenges of remote work with these practical tips for productivity and work-life balance.",
      thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      category: "Career",
      date: "April 20, 2024"
    },
    {
      id: 5,
      title: "Introduction to React Hooks",
      excerpt: "Learn how React Hooks work and how they can simplify your functional components.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Programming",
      date: "April 15, 2024"
    },
    {
      id: 6,
      title: "Mastering System Design Interviews",
      excerpt: "Strategies and frameworks to approach system design questions with confidence.",
      thumbnail: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
      category: "Interview",
      date: "April 10, 2024"
    },
    {
      id: 7,
      title: "The Future of AI in Tech Jobs",
      excerpt: "How artificial intelligence is changing the tech landscape and what skills you need to stay relevant.",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      date: "April 5, 2024"
    },
    {
      id: 8,
      title: "Networking Tips for Introverted Developers",
      excerpt: "Building professional relationships doesn't have to be painful. Learn how to network effectively as an introvert.",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      category: "Career",
      date: "March 30, 2024"
    },
    {
      id: 9,
      title: "How to Prepare for Technical Coding Challenges",
      excerpt: "Strategies and resources to help you excel in take-home coding assignments and challenges.",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      category: "Job Search",
      date: "March 25, 2024"
    }
  ];

  // Filter blogs based on search term and active category
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearchTerm = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <>
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
    </>
  );
};

export default Blogs;
