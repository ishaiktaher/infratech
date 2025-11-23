import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 35, 68, 0.85), rgba(26, 62, 115, 0.75)), url(https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Stronger Futures with<br />
            <span className="text-amber-400">Advanced Construction Materials</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto">
            Trusted Quality. Smart Innovation. Sustainable Strength.
          </p>

          <button
            onClick={scrollToProducts}
            className="group bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 mx-auto"
          >
            Explore Our Products
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
