import { FC, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';

const ProductPage: FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);
  const themeColor = 'rgb(27, 171, 179)';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.title} - InfraTech Construction Materials`;
      // Update meta description for SEO
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', product.metaDescription);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/#products" className="text-theme hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <button
            onClick={() => {
              navigate('/', { state: { scrollToProducts: true } });
            }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-theme transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-square object-contain p-8"
              />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {product.title}
            </h1>

            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 mb-8">{product.description}</p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2
                      style={{ color: themeColor }}
                      className="flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={() => {
                  navigate('/', { state: { scrollToContact: true } });
                }}
                className="inline-block bg-theme text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact for Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;