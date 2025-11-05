import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:9052555510"
      className="fixed bottom-6 right-6 z-50 bg-theme hover:bg-amber-400 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 md:hidden"
      aria-label="Call Now"
    >
      <Phone size={24} />
    </a>
  );
}