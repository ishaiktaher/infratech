import plasterMaster from '../assets/images/products/plaster-master.png';
import brickAdhesive from '../assets/images/products/brick-adhesive.png';
// import brushCoat from '../assets/images/products/brush-coat.png';
import tileAdhesive from '../assets/images/products/tile-adhesive.png';

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
    id: 'tile-adhesive',
    title: 'Tile Adhesive',
    description: 'A high-performance, polymer-modified tile adhesive designed for strong, reliable bonding of ceramic, porcelain, and natural stone tiles. Perfect for both interior and exterior tiling applications.',
    features: [
      'Strong Bonding',
      'Polymer Modified',
      'Water Resistant',
      'Non-Slip Formula',
      'Extended Open Time',
      'Suitable for All Tiles'
    ],
    image: tileAdhesive,
    metaDescription: 'Professional-grade tile adhesive for ceramic, porcelain, and natural stone tiles. Features strong bonding and water resistance for interior and exterior applications.'
  }
];