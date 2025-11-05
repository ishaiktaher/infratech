import { ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export default function ProductCard({ title, description, icon: Icon, features }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
      <div className="bg-gradient-to-br from-teal-700 to-teal-600 p-8 text-center">
        <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-teal-700" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="text-teal-600 flex-shrink-0" size={20} />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-teal-700 hover:bg-amber-400 text-white hover:text-teal-700 font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
          <span>Know More</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      </div>
    </div>
  );
}
