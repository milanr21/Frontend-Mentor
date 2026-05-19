import React from 'react';
import PrimaryLogo from '@/app/images/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='fixed top-0 right-0 left-0 p-4'>
      <nav className='flex justify-between items-center'>
        <div>
          <a href=''>
            <Image src={PrimaryLogo} alt='Primary Logo' />
          </a>
        </div>

        <div>
          <ul className='flex flex-row gap-6 text-white font-semibold items-center justify-center'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Services</a>
            </li>
            <li>
              <a href=''>Projects</a>
            </li>
            <li className='text-black bg-white py-1 px-3 rounded-full'>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
