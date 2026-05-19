'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <div className={`p-4 max-w-7xl mx-auto`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${isOpen ? 'blur-[1px] bg-white/20' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
