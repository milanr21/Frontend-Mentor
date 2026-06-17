import React from 'react';

import arrowIcon from '../../assets/images/icon-arrow-down.svg';
import headerMobile from '../../assets/images/mobile/image-header.jpg';
import headerDesktop from '../../assets/images/desktop/image-header.jpg';

const Hero: React.FC = () => {
  return (
    <section className='relative h-[80vh] md:h-screen overflow-hidden'>
      <picture>
        <source media='(min-width: 768px)' srcSet={headerDesktop} />
        <img
          src={headerMobile}
          alt='Sunnyside Agency Hero'
          className='w-full h-full object-cover object-bottom'
        />
      </picture>

      <div className='absolute inset-0 flex flex-col items-center pt-40 md:pt-36 space-y-12  px-4 text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-display font-black text-neutral-white uppercase tracking-[0.2em] leading-tight'>
          We are creatives
        </h1>
        <a href='#transform' aria-label='Scroll down to content'>
          <img src={arrowIcon} alt='' className='h-24 md:h-32' />
        </a>
      </div>
    </section>
  );
};

export default Hero;
