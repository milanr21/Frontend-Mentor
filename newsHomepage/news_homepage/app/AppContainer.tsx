'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import useMediaQuery from './hooks/useMediaQuery';

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 700px)');

  const shouldAllowOpen = isMobile && isOpen;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <div
      className={`max-w-7xl mx-auto flex flex-col min-h-screen ${
        shouldAllowOpen ? ' bg-gray-300 ' : ''
      }`}
    >
      <Navbar isOpen={shouldAllowOpen} setIsOpen={setIsOpen} />
      <main className=''>
        <div>{children}</div>
      </main>
      <footer className='attribution py-4 text-center text-dark-grayish-blue mt-auto'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          className='text-soft-red'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href='https://www.frontendmentor.io/profile/milanr21'
          target='_blank'
          className='text-soft-red'
        >
          Milan Rawal
        </a>
        .
      </footer>
    </div>
  );
};

export default AppContainer;
