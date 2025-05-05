
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  thumbnail: string;
  category: string;
  date: string;
}

const BlogCard = ({ id, title, excerpt, thumbnail, category, date }: BlogCardProps) => {
  return (
    <div className="blog-card h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-brand-red text-white px-3 py-1 text-xs">
          {category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-gray-500 text-sm mb-2">{date}</span>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        <Link 
          to={`/blogs/${id}`}
          className="text-brand-red font-medium hover:underline mt-auto"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
