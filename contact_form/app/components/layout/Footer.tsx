import React from 'react';

const Footer = () => {
  return (
    <footer className='attribution text-center text-xs text-neutral-900'>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noopener noreferrer'
        className='text-primary-600 hover:underline focus:outline-primary-600 focus:ring-1 focus:ring-primary-600 rounded'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://www.frontendmentor.io/profile/milanr21'
        target='_blank'
        className='text-primary-600 hover:underline focus:outline-primary-600 focus:ring-1 focus:ring-primary-600 rounded'
      >
        Milan Rawal
      </a>
      .
    </footer>
  );
};

export default Footer;
