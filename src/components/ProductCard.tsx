import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductImage from './ProductImage';

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
};

const ProductCard: FC<ProductCardProps> = ({ id, title, description, image }) => {
  const themeColor = 'rgb(27, 171, 179)';
  
  return (
    <Link to={`/product/${id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer h-full flex flex-col">
        <div className="w-full aspect-[4/3] overflow-hidden">
          {image ? (
            <ProductImage src={image} alt={title} className="w-full h-full object-contain p-4" />
          ) : (
            <div className="w-full h-full" style={{ background: `linear-gradient(to bottom right, ${themeColor}, ${themeColor}cc)` }} />
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{description}</p>
          
          <div className="mt-auto">
            <button 
              className="w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:opacity-90 bg-theme"
            >
              <span>View Details</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;