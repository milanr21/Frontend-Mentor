import React from 'react';
import QrCodeImg from '../assets/images/image-qr-code.png';

const Card = () => {
  return (
    <article className='w-72 p-4 rounded-2xl bg-white shadow-lg'>
      <img
        src={QrCodeImg}
        alt='QR code linking to Frontend Mentor'
        loading='lazy'
        className='w-full rounded-2xl'
      />

      <div className='space-y-4 my-6  text-center'>
        <h1 className='text-lg font-bold leading-tight px-4'>
          Improve your front-end skills by building project
        </h1>
        <p className='text-sm leading-relaxed text-slate-500 px-4'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </article>
  );
};

export default Card;
