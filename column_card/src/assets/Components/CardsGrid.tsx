import { cardCategories } from './data';

const CardsGrid = () => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 max-w-[320px] md:max-w-4xl w-full rounded-lg overflow-hidden md:h-auto'>
      {cardCategories.map((category) => {
        const Icon = category.icon;
        return (
          <li key={category.id}>
            <article
              className={`
                ${category.bgClass}
                text-neutral-gray-100
                p-6 md:p-12
                flex flex-col
                justify-between
                gap-4 md:gap-16
                min-h-0
                h-full
              `}
            >
              {/* Top Content */}
              <div className='space-y-3 md:space-y-8'>
                <div className='md:mb-8 origin-left'>
                  <Icon className='w-10 h-auto md:w-16' aria-hidden='true' />
                </div>
                <h3 className='text-2xl md:text-4xl font-bold uppercase font-display tracking-tight text-neutral-gray-100'>
                  {category.title}
                </h3>
                <p className='text-xs md:text-body font-normal leading-relaxed text-neutral-white-75 line-clamp-3 md:line-clamp-none'>
                  {category.description}
                </p>
              </div>

              {/* Button */}
              <div className='mt-0 md:mt-12'>
                <button
                  aria-label={`Learn more about ${category.title} cars`}
                  className={`
                    border-2 border-white
                    py-1 md:py-3 px-4 md:px-8
                    rounded-full
                    cursor-pointer
                    bg-neutral-gray-100 text-[12px] md:text-body font-bold
                    ${category.color}
                    hover:bg-transparent hover:text-neutral-gray-100
                    transition-all duration-300
                    focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-offset-2
                  `}
                >
                  Learn More
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default CardsGrid;
