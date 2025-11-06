import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="InfraTech Logo" 
                className="h-16 w-auto" 
              />
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Building stronger futures with advanced construction materials. 
              Trusted quality, smart innovation, sustainable strength.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/infratechmaterials" target="_blank" rel="noopener noreferrer" 
                className="text-white/90 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/infratechmaterials/" target="_blank" rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@Infratechmaterials" target="_blank" rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://x.com/infratechbuilds" target="_blank" rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              {/* <a href="https://x.com/infratechbuilds" target="_blank" rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/90 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/90 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#products" className="text-white/90 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-white/90 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-white/90 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/product/readymix-plaster" className="text-white/90 hover:text-white transition-colors text-sm">
                  Readymix Plaster
                </Link>
              </li>
              <li>
                <Link to="/product/brick-adhesive" className="text-white/90 hover:text-white transition-colors text-sm">
                  Brick Adhesive
                </Link>
              </li>
              <li>
                <Link to="/product/brush-coat-2k" className="text-white/90 hover:text-white transition-colors text-sm">
                  Brush Coat 2K
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-white/90 flex-shrink-0 mt-1" size={18} />
                <span className="text-white/90 text-sm leading-relaxed">
                  Main Road Kaithalapur, Near Madhapur, Hyderabad, Telangana - 500081
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-white/90" size={18} />
                <a href="tel:+919052555510" className="text-white/90 hover:text-white transition-colors text-sm">
                  +91 9052555510
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-white/90" size={18} />
                <a href="tel:+918686837937" className="text-white/90 hover:text-white transition-colors text-sm">
                  +91 8686837937
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-white/90" size={18} />
                <a href="mailto:info@infratechmaterials.com" className="text-white/90 hover:text-white transition-colors text-sm">
                  infratechmaterials@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-sm text-white/90">
              &copy; {currentYear} InfraTech Construction Materials. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-white/90">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
