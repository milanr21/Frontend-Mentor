'use client';

import Image from 'next/image';
import React from 'react';
import Logo from '@/app/assets/images/logo.svg';
import HamburgerIcon from '@/app/assets/images/icon-menu.svg';
import CloseMenuIcon from '@/app/assets/images/icon-menu-close.svg';
import { navItems } from '@/app/data/data';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='pt-8 pb-0 md:pb-8 px-4 md:px-0'>
      <nav className='flex flex-row justify-between items-center mb-6 md:mb-0 '>
        <a href='/'>
          <Image src={Logo} alt='News Homepage Logo' />
        </a>

        <ul className='hidden md:flex flex-row justify-between items-center gap-8'>
          {navItems.map((item) => (
            <li key={item.id} className='cursor-pointer hover:text-soft-red'>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          aria-label='Toggle menu'
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
          className='md:hidden flex flex-row justify-between items-center cursor-pointer'
        >
          <Image src={HamburgerIcon} alt='Open menu' />
        </button>
      </nav>

      {isOpen && (
        <>
          <div className='fixed inset-0 z-40' onClick={() => setIsOpen(false)}>
            <div
              id='mobile-menu'
              className='fixed top-0 right-0 w-[70%] h-full bg-off-white text-center z-50 flex flex-col'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex justify-end p-4'>
                <button
                  onClick={toggleMenu}
                  aria-label='Close menu'
                  className='cursor-pointer'
                >
                  <Image src={CloseMenuIcon} alt='Close menu' />
                </button>
              </div>

              <ul className='flex flex-col gap-6 text-lg text-left mx-6 mt-40'>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className='cursor-pointer hover:text-soft-red'
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
