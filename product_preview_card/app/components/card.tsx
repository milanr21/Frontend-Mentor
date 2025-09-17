import React from 'react';
import Image from 'next/image';
import perfomueImg from '@/images/image-product-desktop.jpg';
import addCartIcon from '@/images/icon-cart.svg';
import mobileImg from '@/images/image-product-mobile.jpg';

const Card = () => {
  return (
    <div className='flex items-center justify-end min-h-screen bg-red-200 '>
      <div className='max-w-xl px-6  md:px-1  mx-auto'>
        <div className=' bg-white rounded-l-lg rounded-r-lg flex flex-col   md:flex-row'>
          <div className='   '>
            <Image
              src={mobileImg}
              alt='perfomueImg'
              className=' h-[20rem] object-cover  md:h-full rounded-t-lg md:rounded-l-lg  '
            />
          </div>

          <div className='flex flex-col rounded-r-lg  gap-5 p-4'>
            <h4 className='upppercase md:text-lg text-base font-normal tracking-widest text-gray-600 '>
              Perfume
            </h4>

            <h2 className='text-xl md:text-3xl font-bold max-w-52   '>
              Gabrielle Essence Eau De Parfum
            </h2>

            <p className='text-sm text-gray-500 md:text-base'>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>

            <p className='flex flex-row gap-5'>
              <span className='text-2xl md:text-3xl font-bold text-green-800 '>
                $149.99
              </span>

              <span className=' text-sm text-gray-600  md:text-base line-through   '>
                $169.99
              </span>
            </p>

            <button className='flex text-white bg-green-900 rounded-lg flex-row w-48 px-8 py-2   justify-between'>
              <Image src={addCartIcon} alt='addCartIcon' />

              <span>Add to card</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
