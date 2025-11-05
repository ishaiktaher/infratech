import plasterMaster from '../assets/images/products/plaster-master.png';
import brickAdhesive from '../assets/images/products/brick-adhesive.png';
import brushCoat from '../assets/images/products/brush-coat.png';

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  metaDescription: string;
}

export const products: Product[] = [
  {
    id: 'readymix-plaster',
    title: 'ReadyMix Plaster',
    description: 'A high-quality, easy-to-apply pre-mixed plaster ensuring smooth finishes and strong adhesion for all your construction needs. Our ReadyMix Plaster is formulated for optimal workability and durability, making it perfect for both interior and exterior applications.',
    features: [
      'Smooth Finish',
      'Strong Adhesion',
      'Easy Application',
      'Pre-Mixed for Convenience',
      'Excellent Coverage',
      'Quick Setting Time'
    ],
    image: plasterMaster,
    metaDescription: 'High-quality pre-mixed plaster for interior and exterior applications. Features smooth finish, strong adhesion, and easy application. Perfect for professional construction projects.'
  },
  {
    id: 'brick-adhesive',
    title: 'Brick Adhesive',
    description: 'A polymer-modified adhesive offering superior bonding strength for all brick and block masonry applications. Our specialized formula ensures excellent adhesion and durability for long-lasting results in all weather conditions.',
    features: [
      'Superior Bonding',
      'Polymer Modified',
      'Long Lasting',
      'Weather Resistant',
      'High Strength',
      'Easy to Apply'
    ],
    image: brickAdhesive,
    metaDescription: 'Professional-grade polymer-modified brick adhesive. Provides superior bonding strength and weather resistance for all masonry applications.'
  },
  {
    id: 'brush-coat-2k',
    title: 'Brush Coat 2K',
    description: 'A two-component waterproof coating designed to protect surfaces against moisture, cracks, and weathering. Perfect for bathrooms, basements, and other areas requiring superior water protection.',
    features: [
      'Waterproof',
      'Crack Protection',
      'Weather Resistant',
      'UV Stable',
      'Chemical Resistant',
      'Easy to Apply'
    ],
    image: brushCoat,
    metaDescription: 'Two-component waterproof coating for superior moisture protection. Ideal for bathrooms, basements, and areas requiring waterproofing.'
  }
];