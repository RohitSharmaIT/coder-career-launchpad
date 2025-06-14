
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Share } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || "1");

  // Sample blog data - in a real app, this would come from an API or database
  const blog = {
    id: blogId,
    title: "Top 10 Interview Questions for Frontend Developers",
    author: "Rahul Kumar",
    date: "May 10, 2024",
    readTime: "8 min read",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    category: "Interview",
    content: `
      <p>Preparing for a frontend developer interview can be overwhelming. With so many technologies, frameworks, and concepts to master, it's hard to know where to focus your energy. This guide covers the top 10 questions you're likely to encounter in your next frontend interview, along with expert insights on how to answer them effectively.</p>
      
      <h2>1. What is the difference between == and === in JavaScript?</h2>
      <p>The == operator performs type coercion, meaning it will convert the operands to the same type before making the comparison. The === operator, on the other hand, is a strict equality operator that checks both value and type without performing type coercion.</p>
      <pre><code>
      // Examples
      1 == '1'  // true (coercion happens)
      1 === '1' // false (different types)
      </code></pre>
      <p>When answering this question, demonstrate your understanding of JavaScript's type system and why strict equality is generally preferred for more predictable code.</p>
      
      <h2>2. Explain the concept of closures in JavaScript.</h2>
      <p>A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It remembers the environment in which it was created, even after the outer function has finished executing.</p>
      <pre><code>
      function createCounter() {
        let count = 0;
        return function() {
          return ++count;
        };
      }
      
      const counter = createCounter();
      console.log(counter()); // 1
      console.log(counter()); // 2
      </code></pre>
      <p>This demonstrates how the inner function maintains access to the count variable even after createCounter has executed. When discussing closures, emphasize their practical applications like data encapsulation and creating private variables.</p>
      
      <h2>3. How does the 'this' keyword work in JavaScript?</h2>
      <p>The value of 'this' depends on how a function is called:</p>
      <ul>
        <li>In a method, 'this' refers to the owner object</li>
        <li>In a function, 'this' refers to the global object (or undefined in strict mode)</li>
        <li>In an event, 'this' refers to the element that received the event</li>
        <li>With call(), apply(), or bind(), 'this' can be explicitly set</li>
      </ul>
      <p>Discussing arrow functions and how they handle 'this' differently can also demonstrate deeper knowledge.</p>
      
      <h2>4. What is the Virtual DOM and how does it work?</h2>
      <p>The Virtual DOM is a lightweight copy of the actual DOM. Libraries like React use it to improve performance by minimizing direct manipulation of the DOM. When state changes occur:</p>
      <ol>
        <li>A new Virtual DOM representation is created</li>
        <li>This new representation is compared with the previous one (diffing)</li>
        <li>Only the differences are updated in the actual DOM (reconciliation)</li>
      </ol>
      <p>This approach is more efficient than manipulating the DOM directly for each state change. When answering, emphasize that you understand both the concept and the performance benefits.</p>
      
      <h2>5. Explain CSS Box Model</h2>
      <p>The CSS Box Model describes how elements are rendered as boxes. Each box consists of:</p>
      <ul>
        <li>Content: The actual content of the element</li>
        <li>Padding: The space between the content and the border</li>
        <li>Border: The line surrounding the padding</li>
        <li>Margin: The space outside the border</li>
      </ul>
      <p>By default, the width and height properties set the content box dimensions. However, with box-sizing: border-box, these properties include padding and border as well. Mention this distinction to show a deeper understanding.</p>
      
      <h2>6. What are Promises in JavaScript?</h2>
      <p>Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow you to handle asynchronous operations more elegantly than callbacks. A Promise can be in one of three states:</p>
      <ul>
        <li>Pending: Initial state, neither fulfilled nor rejected</li>
        <li>Fulfilled: The operation completed successfully</li>
        <li>Rejected: The operation failed</li>
      </ul>
      <pre><code>
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      </code></pre>
      <p>When discussing Promises, also mention async/await as a more modern syntax for working with asynchronous code.</p>
      
      <h2>7. How do you optimize website performance?</h2>
      <p>Website optimization is a broad topic. Some key strategies include:</p>
      <ul>
        <li>Minimizing HTTP requests</li>
        <li>Compressing and minifying resources (CSS, JavaScript, images)</li>
        <li>Using lazy loading for images and other heavy content</li>
        <li>Implementing code splitting and tree shaking</li>
        <li>Leveraging browser caching</li>
        <li>Using Content Delivery Networks (CDNs)</li>
        <li>Optimizing CSS delivery</li>
        <li>Implementing responsive images</li>
      </ul>
      <p>Demonstrate that you not only know these techniques but also understand when and why to apply them.</p>
      
      <h2>8. What is Cross-Origin Resource Sharing (CORS)?</h2>
      <p>CORS is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the original page. It helps prevent potentially malicious cross-origin requests.</p>
      <p>To enable CORS, the server needs to include specific headers in its responses, such as Access-Control-Allow-Origin. When discussing CORS, explain both the security benefits and the implementation challenges it can present.</p>
      
      <h2>9. Explain the difference between localStorage, sessionStorage, and cookies</h2>
      <p>These are all methods for storing data on the client-side, but they have important differences:</p>
      <ul>
        <li><strong>localStorage</strong>: Persists indefinitely until explicitly deleted, has a larger storage capacity (typically 5MB), and is not sent with HTTP requests</li>
        <li><strong>sessionStorage</strong>: Similar to localStorage but data is cleared when the session ends (browser tab is closed)</li>
        <li><strong>Cookies</strong>: Have a smaller capacity (4KB), can set expiration dates, and are sent with every HTTP request to the same domain</li>
      </ul>
      <p>Discuss the security implications and appropriate use cases for each storage method.</p>
      
      <h2>10. How do you approach responsive web design?</h2>
      <p>Responsive web design ensures that websites look and function well on various devices and screen sizes. Key approaches include:</p>
      <ul>
        <li>Using flexible grid layouts</li>
        <li>Implementing media queries</li>
        <li>Using relative units (%, em, rem) instead of fixed units (px)</li>
        <li>Designing for mobile-first</li>
        <li>Using responsive images</li>
        <li>Testing on various devices and viewports</li>
      </ul>
      <p>When discussing responsive design, emphasize the importance of user experience across different devices and how you approach testing and validating your responsive implementations.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering these common frontend interview questions will help you approach your next interview with confidence. Remember that interviewers are not just looking for correct answers but also for your thought process, problem-solving approach, and how you communicate technical concepts.</p>
      <p>Practice articulating your answers clearly and be prepared to dive deeper into any of these topics. Good luck with your interview!</p>
    `
  };

  // Sample related blogs
  const relatedBlogs = [
    {
      id: 2,
      title: "How to Optimize Your Resume for ATS Systems",
      excerpt: "Learn how to structure your resume to pass through Applicant Tracking Systems and reach human recruiters.",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      category: "Resume",
      date: "May 5, 2024"
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
      id: 9,
      title: "How to Prepare for Technical Coding Challenges",
      excerpt: "Strategies and resources to help you excel in take-home coding assignments and challenges.",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      category: "Job Search",
      date: "March 25, 2024"
    }
  ];

  // Categories for sidebar
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

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Blog Banner */}
      <section 
        className="relative py-20 bg-gray-900 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${blog.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-brand-red hover:bg-red-600">{blog.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">{blog.title}</h1>
          
          <div className="flex flex-wrap items-center text-sm md:text-base text-gray-200 gap-4 md:gap-6">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </article>
              
              {/* Share Section */}
              <div className="flex items-center space-x-4 mt-12 pt-6 border-t border-gray-200">
                <span className="font-bold text-gray-700 flex items-center">
                  <Share size={18} className="mr-2" /> Share:
                </span>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Twitter
                </a>
                <a href="#" className="text-blue-800 hover:text-blue-900">
                  Facebook
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  LinkedIn
                </a>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Link key={category} to={`/blogs?category=${category}`}>
                      <Badge 
                        variant="outline" 
                        className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white cursor-pointer"
                      >
                        {category}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Related Posts</h3>
                <div className="space-y-6">
                  {relatedBlogs.map((relatedBlog) => (
                    <div key={relatedBlog.id} className="flex gap-3">
                      <div className="w-24 h-24 shrink-0 rounded overflow-hidden">
                        <img 
                          src={relatedBlog.thumbnail} 
                          alt={relatedBlog.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Link to={`/blogs/${relatedBlog.id}`} className="font-medium hover:text-brand-red transition-colors">
                          {relatedBlog.title}
                        </Link>
                        <p className="text-gray-500 text-sm mt-1">{relatedBlog.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default BlogPost;
