import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import type { BlogPost } from '../types/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/blog/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag size={16} />
              <span>{post.tags[0]}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-theme transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm font-medium text-theme hover:text-amber-500 transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}