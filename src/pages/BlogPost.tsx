import { useParams, Link } from 'react-router-dom';
import { Clock, Tag, ChevronLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';
import { marked } from 'marked';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="text-theme hover:text-amber-500 transition-colors flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        image={post.image}
        url={`/blog/${post.slug}`}
      />
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="text-theme hover:text-amber-500 transition-colors flex items-center gap-2 mb-8"
          >
            <ChevronLeft size={20} />
            Back to Blog
          </Link>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />

          <div className="flex items-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={20} />
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-12 text-gray-600">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <div
              className="prose-headings:text-gray-900 prose-headings:font-bold 
                prose-h1:text-4xl prose-h1:mb-8
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:list-disc prose-ul:my-6 prose-ul:ml-6
                prose-ol:list-decimal prose-ol:my-6 prose-ol:ml-6
                prose-li:text-gray-600 prose-li:mb-2
                prose-a:text-theme hover:prose-a:text-amber-500
                prose-strong:text-gray-900
                prose-blockquote:border-l-4 prose-blockquote:border-theme prose-blockquote:pl-4 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ 
                __html: marked.parse(post.content, {
                  gfm: true,
                  breaks: true
                })
              }}
            />
          </div>
        </div>
      </article>
    </>
  );
}