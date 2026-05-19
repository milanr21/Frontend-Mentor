'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/app/assets/images/logo.svg';
import HamburgerIcon from '@/app/assets/images/icon-menu.svg';
import CloseMenuIcon from '@/app/assets/images/icon-menu-close.svg';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'New',
    link: '/',
  },
  {
    id: 3,
    name: 'Popular',
    link: '/',
  },
  {
    id: 4,
    name: 'Trending',
    link: '/',
  },
  {
    id: 5,
    name: 'Categories',
    link: '/',
  },
];

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=''>
      <nav className='flex flex-row justify-between items-center mb-6 md:mb-0'>
        <div>
          <a href=''>
            <Image src={Logo} alt='logo' />
          </a>
        </div>

        <ul className='hidden  md:flex flex-row justify-between items-center gap-8'>
          {navItems.map((item) => (
            <li key={item.id} className='cursor-pointer hover:text-soft-red'>
              <a href={item.link}> {item.name}</a>
            </li>
          ))}
        </ul>

        <Image
          src={HamburgerIcon}
          onClick={toggleMenu}
          alt='hamburger-icon'
          className='md:hidden flex flex-row justify-between items-center cursor-pointer'
        />
      </nav>

      {isOpen && (
        <div className='fixed top-0 right-0 w-[70%] h-full bg-off-white text-center z-50 flex flex-col'>
          <div className='flex justify-end p-4 cursor-pointer'>
            <Image src={CloseMenuIcon} alt='logo' onClick={toggleMenu} />
          </div>

          <ul className='flex flex-col gap-6 text-lg text-left mx-6 mt-40'>
            {navItems.map((item) => (
              <li key={item.id} className='cursor-pointer hover:text-soft-red'>
                <a href={item.link}> {item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
