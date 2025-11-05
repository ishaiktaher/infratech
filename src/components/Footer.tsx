// import { Building2 } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-theme text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center">
              {/* <Building2 className="text-teal-800" size={28} /> */}
              <img 
                src={logo} 
                alt="InfraTech Logo" 
                className="h-20 w-auto" 
              />
            </div>
            {/* <div className="text-left">
              <h3 className="text-2xl font-bold">InfraTech</h3>
              <p className="text-sm text-gray-300">Construction Materials</p>
            </div> */}
          </div>

          <p className="mb-6 max-w-md">
            Building stronger futures with advanced construction materials. Trusted quality, smart innovation, sustainable strength.
          </p>

          <div className="w-full border-t border-theme pt-6">
            <p className="text-sm">
              &copy; 2025 InfraTech Construction Materials. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
