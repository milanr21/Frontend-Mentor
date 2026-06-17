import React from 'react';

import Logo from '../../assets/images/logo.svg';
import twitterImg from '../../assets/images/icon-twitter.svg';
import facebookImg from '../../assets/images/icon-facebook.svg';
import instagramImg from '../../assets/images/icon-instagram.svg';
import pinterestImg from '../../assets/images/icon-pinterest.svg';

import type { NavItem, SocialItem } from '../../types';

const socialItems: SocialItem[] = [
  {
    id: 1,
    name: 'Facebook',
    icon: facebookImg,
    url: 'https://facebook.com',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: instagramImg,
    url: 'https://instagram.com',
  },
  {
    id: 3,
    name: 'Twitter',
    icon: twitterImg,
    url: 'https://twitter.com',
  },
  {
    id: 4,
    name: 'Pinterest',
    icon: pinterestImg,
    url: 'https://pinterest.com',
  },
];

const footerItems: NavItem[] = [
  { id: 1, name: 'About', link: '#about' },
  { id: 2, name: 'Services', link: '#services' },
  { id: 3, name: 'Projects', link: '#projects' },
];

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col items-center py-8 px-6 bg-primary-green-500/60 text-primary-green-800 space-y-10'>
      <div className='flex items-center space-x-2'>
        <a href='#home'>
          <img
            src={Logo}
            alt='Sunnyside Logo'
            className='h-8 brightness-0 opacity-60'
          />
        </a>
      </div>

      <nav aria-label='Footer navigation'>
        <ul className='flex flex-row gap-12 font-sans font-semibold text-lg'>
          {footerItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className='hover:text-neutral-white transition-colors duration-300'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label='Social media links'>
        <ul className='flex flex-row gap-7'>
          {socialItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                aria-label={item.name}
                className='hover:brightness-0 hover:invert-100 transition-all duration-300'
              >
                <img src={item.icon} alt='' />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='attribution'>
        Challenge by {''}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
          className='underline hover:text-neutral-white'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href='https://www.frontendmentor.io/profile/milanr21'
          target='_blank'
          rel='noreferrer'
          className='underline hover:text-neutral-white'
        >
          Milan Rawal
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
