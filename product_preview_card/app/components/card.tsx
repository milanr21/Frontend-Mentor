import React from 'react';
import Image from 'next/image';
import desktopImg from '@/images/image-product-desktop.jpg';
import mobileImg from '@/images/image-product-mobile.jpg';
import addCartIcon from '@/images/icon-cart.svg';

const Card = () => {
  return (
    <article className='max-w-[340px] md:max-w-2xl w-full bg-neutral-white rounded-lg flex flex-col md:flex-row overflow-hidden shadow-lg'>
      <div className='relative w-full md:w-1/2 h-60 md:h-auto bg-neutral-white'>
        <Image
          src={desktopImg}
          alt='Product image for desktop'
          className='hidden md:block object-cover'
          fill
          priority
        />

        <Image
          src={mobileImg}
          alt='Product image for mobile'
          className='md:hidden object-contain'
          fill
          priority
        />
      </div>{' '}
      {/* Image container */}
      {/* Content container */}
      <div className='flex flex-col gap-4 p-6 md:p-8 md:w-1/2'>
        <p className='uppercase tracking-[0.2em] text-xs text-neutral-grey font-medium'>
          Perfume
        </p>

        <h1 className='text-3xl md:text-4xl font-bold text-neutral-black leading-tight'>
          Gabrielle Essence Eau De Parfum
        </h1>

        <p className='text-neutral-grey text-sm md:text-base leading-relaxed'>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className='flex items-center gap-4'>
          <span className='text-3xl font-bold text-green-500'>$149.99</span>
          <span className='text-sm text-neutral-grey line-through'>
            $169.99
          </span>
        </div>

        <button className='flex items-center justify-center gap-2 w-full bg-green-500 text-neutral-white rounded-lg py-3 font-bold hover:bg-green-700 transition-colors'>
          <Image src={addCartIcon} alt='' aria-hidden='true' />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
};

export default Card;
