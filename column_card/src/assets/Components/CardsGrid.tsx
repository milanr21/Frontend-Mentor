import SedansIcon from '../images/SedansIcon';
import LuxuryIcon from '../images/LuxuryIcon';
import SuvsIcon from '../images/SuvsIcon';
import type { ComponentType, SVGProps } from 'react';

export interface cardCategoriesProps {
  id: 'sedans' | 'suvs' | 'luxury';
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGAElement>>;
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
    bgClass: 'bg-[hsl(31,77%,52%)]', // Gold 500
    color: 'text-[hsl(31,77%,52%)]', // Gold 500
  },
  {
    id: 'suvs',
    title: 'SUVS',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    icon: SuvsIcon,
    bgClass: 'bg-[hsl(184,100%,22%)]', // Cyan 800
    color: 'text-[hsl(184,100%,22%)]', // Cyan 800
  },
  {
    id: 'luxury',
    title: 'Luxury',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    icon: LuxuryIcon,
    bgClass: 'bg-[hsl(179,100%,13%)]', // Green 950
    color: 'text-[hsl(179,100%,13%)]', // Green 950
  },
];
const CardsGrid = () => {
  return (
    <div className='md:min-h-screen flex mx-14 my-4  items-center justify-center px-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl w-full rounded-2xl overflow-hidden'>
        {cardCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className={`
              ${category.bgClass}
              text-white
               px-8 py-5 md:px-8 md:py-10
              flex flex-col
              justify-between
              h-full
              w-fit
            `}
            >
              {/* Top Content */}
              <div className='space-y-4  md:space-y-4'>
                <Icon />
                <h3 className='text-2xl font-bold'>{category.title}</h3>
                <p className='text-sm font-light leading-relaxed'>
                  {category.description}
                </p>
              </div>

              {/* Button */}
              <div className='mt-10'>
                <button
                  className={`
                  border-2 border-white
                  py-2 px-5
                  rounded-full
                  cursor-pointer
                  bg-white text-sm
                  ${category.color}
                  hover:bg-transparent hover:text-white
                  transition-all duration-300
                `}
                >
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsGrid;
