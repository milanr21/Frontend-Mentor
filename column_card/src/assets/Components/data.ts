import type { ComponentType, SVGProps } from 'react';
import SedansIcon from '../images/SedansIcon';
import LuxuryIcon from '../images/LuxuryIcon';
import SuvsIcon from '../images/SuvsIcon';

export interface cardCategoriesProps {
  id: 'sedans' | 'suvs' | 'luxury';
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  bgClass: string;
  color: string;
}

export const cardCategories: cardCategoriesProps[] = [
  {
    id: 'sedans',
    title: 'Sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    icon: SedansIcon,
    bgClass: 'bg-primary-gold-500',
    color: 'text-primary-gold-500',
  },
  {
    id: 'suvs',
    title: 'SUVS',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    icon: SuvsIcon,
    bgClass: 'bg-primary-cyan-800',
    color: 'text-primary-cyan-800',
  },
  {
    id: 'luxury',
    title: 'Luxury',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    icon: LuxuryIcon,
    bgClass: 'bg-primary-green-950',
    color: 'text-primary-green-950',
  },
];
