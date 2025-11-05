import { FC } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ProductDetailProps {
  title: string;
  description: string;
  features: string[];
  image?: string;
  onBack: () => void;
}

const ProductDetail: FC<ProductDetailProps> = ({ title, description, features, image, onBack }) => {
  const themeColor = 'rgb(27, 171, 179)';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-theme transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {image && (
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-50">
                  <img src={image} alt={title} className="w-full h-full object-contain p-8" />
                </div>
              )}
            </div>
            
            <div>
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 mb-8">{description}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 style={{ color: themeColor }} className="flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button
                  className="bg-theme text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                  onClick={() => window.location.href = '#contact'}
                >
                  Contact for Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;