import React from 'react';

import type { FeatureProps } from '../../types';

const FeatureSection: React.FC<FeatureProps> = ({
  id,
  title,
  description,
  imageMobile,
  imageDesktop,
  buttonColor,
  reverse = false,
}) => {
  return (
    <section id={id} className='flex flex-col md:flex-row min-h-150'>
      <div className={`w-full md:w-1/2 ${reverse ? 'md:order-2' : ''}`}>
        <picture>
          <source media='(min-width: 768px)' srcSet={imageDesktop} />
          <img
            src={imageMobile}
            alt={title}
            className='w-full h-full object-cover'
          />
        </picture>
      </div>

      <div
        className={`w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-10 md:p-24 text-center md:text-left space-y-8 ${
          reverse ? 'md:order-1' : ''
        }`}
      >
        <h2 className='text-3xl md:text-5xl font-display font-black text-neutral-gray-950 leading-tight'>
          {title}
        </h2>
        <p className='text-neutral-gray-600 font-sans font-semibold leading-relaxed max-w-md'>
          {description}
        </p>
        <button className='relative group uppercase font-display font-black tracking-widest text-sm cursor-pointer px-2'>
          <span className='relative z-10'>Learn more</span>
          <span
            className={`absolute bottom-0 left-0 w-full h-2 rounded-full opacity-25 group-hover:opacity-100 transition-opacity duration-300 z-0 ${buttonColor}`}
          ></span>
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
