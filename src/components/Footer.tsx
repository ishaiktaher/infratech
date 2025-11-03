import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Building2 className="text-blue-900" size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold">InfraTech</h3>
              <p className="text-sm text-gray-300">Construction Materials</p>
            </div>
          </div>

          <p className="text-gray-300 mb-6 max-w-md">
            Building stronger futures with advanced construction materials. Trusted quality, smart innovation, sustainable strength.
          </p>

          <div className="w-full border-t border-blue-800 pt-6">
            <p className="text-gray-400 text-sm">
              &copy; 2025 InfraTech Construction Materials. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
