
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  category: string;
  date: string;
}

interface BlogsContextType {
  blogs: Blog[];
  addBlog: (blog: Omit<Blog, 'id' | 'date'>) => void;
  deleteBlog: (id: number) => void;
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

export const useBlogs = () => {
  const context = useContext(BlogsContext);
  if (context === undefined) {
    throw new Error('useBlogs must be used within a BlogsProvider');
  }
  return context;
};

interface BlogsProviderProps {
  children: ReactNode;
}

export const BlogsProvider = ({ children }: BlogsProviderProps) => {
  // Sample blog data - this will be replaced with dynamic blogs
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Top 10 Interview Questions for Frontend Developers",
      excerpt: "Prepare for your next frontend interview with these commonly asked questions and expert answers.",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      content: "Sample content for the interview questions blog post...",
      category: "interviews",
      date: "May 10, 2024"
    },
    {
      id: 2,
      title: "How to Optimize Your Resume for ATS Systems",
      excerpt: "Learn how to structure your resume to pass through Applicant Tracking Systems and reach human recruiters.",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      content: "Sample content for the resume optimization blog post...",
      category: "resume",
      date: "May 5, 2024"
    },
    {
      id: 3,
      title: "Learning Data Structures: A Complete Guide",
      excerpt: "Master the fundamentals of data structures to ace your coding interviews and become a better programmer.",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      content: "Sample content for the data structures blog post...",
      category: "coding",
      date: "April 28, 2024"
    },
    {
      id: 4,
      title: "5 Tips for Remote Job Success",
      excerpt: "Navigate the challenges of remote work with these practical tips for productivity and work-life balance.",
      thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      content: "Sample content for the remote work blog post...",
      category: "career",
      date: "April 20, 2024"
    }
  ]);

  const addBlog = (newBlog: Omit<Blog, 'id' | 'date'>) => {
    const blog: Blog = {
      ...newBlog,
      id: Date.now(), // Simple ID generation for demo
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
    setBlogs(prevBlogs => [blog, ...prevBlogs]);
  };

  const deleteBlog = (id: number) => {
    setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
  };

  return (
    <BlogsContext.Provider value={{ blogs, addBlog, deleteBlog }}>
      {children}
    </BlogsContext.Provider>
  );
};
