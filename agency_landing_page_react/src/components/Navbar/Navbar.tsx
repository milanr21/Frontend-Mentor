import React from 'react';
import hamburgerIcon from '../../assets/images/icon-hamburger.svg';
import Logo from '../../assets/images/logo.svg';
import type { NavbarProps, NavItem } from '../../types';

export const navItems: NavItem[] = [
  { id: 1, name: 'about', link: '#about' },
  { id: 2, name: 'services', link: '#services' },
  { id: 3, name: 'projects', link: '#projects' },
  { id: 4, name: 'contact', link: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='absolute top-0 left-0 w-full z-50 flex justify-between items-center p-8 md:px-12 md:py-10'>
      <a href='/' aria-label='Sunnyside Home'>
        <img src={Logo} alt='Sunnyside Agency' className='h-6 md:h-8' />
      </a>

      <nav aria-label='Main navigation' className='hidden md:block'>
        <ul className='flex items-center gap-12 text-neutral-white font-sans font-semibold capitalize'>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={`transition-colors duration-300 ${
                  item.name === 'contact'
                    ? 'bg-neutral-white text-neutral-gray-950 px-8 py-4 rounded-full font-display uppercase text-sm hover:bg-inherit hover:text-neutral-white transition-all'
                    : 'hover:text-primary-blue-800'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleMenu}
        aria-label='Toggle mobile menu'
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
        className='md:hidden cursor-pointer'
      >
        <img src={hamburgerIcon} alt='' />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className='fixed inset-0 bg-transparent z-40 md:hidden'
            onClick={() => setIsOpen(false)}
          />
          <div
            id='mobile-menu'
            className='fixed top-28 left-6 right-6 bg-neutral-white p-10 z-50 flex flex-col items-center md:hidden shadow-2xl'
          >
            {/* Triangle for the mobile menu bubble */}
            <div className='absolute -top-6 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-b-[24px] border-b-neutral-white'></div>

            <ul className='flex flex-col gap-8 text-center w-full'>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-sans font-semibold text-neutral-gray-600 text-xl capitalize transition-colors duration-300 ${
                      item.name === 'contact'
                        ? 'bg-primary-yellow-500 text-neutral-gray-950 px-8 py-4 rounded-full font-display uppercase text-base hover:bg-opacity-80 transition-all w-fit mx-auto'
                        : 'hover:text-primary-yellow-500'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
