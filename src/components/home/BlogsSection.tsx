
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";
import { Award } from "lucide-react";

const BlogsSection = () => {
  const blogs = [
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
    }
  ];

  return (
    <section className="section-gradient section-padding">
      <div className="container-full">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 rounded-full px-6 py-3 mb-6 font-medium text-lg">
            <Award className="h-5 w-5" />
            KNOWLEDGE HUB
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Latest Insights & Tips
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with expert insights, career advice, and industry trends from our knowledge base.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {blogs.map((blog, index) => (
            <div key={blog.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <BlogCard
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                thumbnail={blog.thumbnail}
                category={blog.category}
                date={blog.date}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link to="/blogs">
            <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-300 hover:shadow-lg">
              Read More Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
