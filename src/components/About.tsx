import { Target, Award, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About InfraTech Construction Materials
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            InfraTech Construction Materials delivers innovative, durable, and ready-to-use products
            designed to simplify and strengthen modern construction. Our goal is to empower builders
            and engineers with high-performance materials that ensure long-lasting quality and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-theme-light transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-theme rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-amber-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of innovative construction materials that set industry standards.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-theme-light transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-theme rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-amber-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Commitment</h3>
            <p className="text-gray-600">
              Every product undergoes rigorous testing to ensure superior performance and durability.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-theme-light transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-theme rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-amber-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Continuously developing advanced solutions that make construction simpler and more efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
