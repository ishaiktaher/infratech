import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              scrollToSection('home');
            }
          }}
        >
          <img src={logo} alt="InfraTech Logo" className="h-20 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => link.path ? navigate(link.path) : scrollToSection(link.id!)}
              className="text-gray-700 font-medium hover:text-theme transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-900 hover:text-theme transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-theme py-4 px-6 animate-fadeIn">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (link.path) {
                    navigate(link.path);
                    setIsMenuOpen(false);
                  } else {
                    scrollToSection(link.id!);
                  }
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-theme-light rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
