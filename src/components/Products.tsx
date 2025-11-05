import ProductCard from './ProductCard';
import { products } from '../data/products';
export default function Products() {
  return (
    <section id="products" className="py-20 bg-theme-light relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our range of advanced construction materials engineered for excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              features={product.features}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
