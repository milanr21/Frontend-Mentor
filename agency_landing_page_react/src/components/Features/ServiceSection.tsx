import React from 'react';

import type { ServiceProps } from '../../types';

const ServiceSection: React.FC<ServiceProps> = ({
  title,
  description,
  imageMobile,
  imageDesktop,
  textColor,
}) => {
  return (
    <section className='relative h-150 flex flex-col justify-end items-center text-center pb-12 px-6'>
      <div className='absolute inset-0 -z-10'>
        <picture>
          <source media='(min-width: 768px)' srcSet={imageDesktop} />
          <img
            src={imageMobile}
            alt=''
            className='w-full h-full object-cover'
          />
        </picture>
      </div>

      <div className={`max-w-sm space-y-6 ${textColor}`}>
        <h3 className='text-3xl font-display font-black capitalize'>{title}</h3>
        <p className='font-sans font-semibold leading-relaxed text-sm md:text-base'>
          {description}
        </p>
      </div>
    </section>
  );
};

export default ServiceSection;
