import ProductCard from './ProductCard';
import { Package, Layers, ShieldCheck } from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: 'ReadyMix Plaster',
      description: 'A high-quality, easy-to-apply pre-mixed plaster ensuring smooth finishes and strong adhesion for all your construction needs.',
      icon: Package,
      features: ['Smooth Finish', 'Strong Adhesion', 'Easy Application']
    },
    {
      title: 'Brick Adhesive',
      description: 'A polymer-modified adhesive offering superior bonding strength for all brick and block masonry applications.',
      icon: Layers,
      features: ['Superior Bonding', 'Polymer Modified', 'Long Lasting']
    },
    {
      title: 'Brush Coat 2K',
      description: 'A two-component waterproof coating designed to protect surfaces against moisture, cracks, and weathering.',
      icon: ShieldCheck,
      features: ['Waterproof', 'Crack Protection', 'Weather Resistant']
    }
  ];

  return (
    <section id="products" className="py-20 bg-teal-50 relative">
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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
