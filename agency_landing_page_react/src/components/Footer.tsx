import React from 'react';

import instagramImg from '../assets/images/icon-instagram.svg';
import facebookImg from '../assets/images/icon-facebook.svg';
import twitterImg from '../assets/images/icon-twitter.svg';
import pinterestImg from '../assets/images/icon-pinterest.svg';

export const socialItems = [
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
const footerItems = [
  {
    id: 1,
    name: 'about',
    link: '/',
  },
  {
    id: 2,
    name: 'services',
    link: '/',
  },
  {
    id: 3,
    name: 'projects',
    link: '/',
  },
];

const Footer = () => {
  return (
    <footer className='flex flex-col items-center space-y-10 justify-center p-12 bg-primary-green-500/60'>
      <p className='text-3xl text-primary-green-800'>sunnyside</p>

      <ul className='flex flex-row gap-12 capitalize text-primary-green-800'>
        {footerItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      <ul className='flex flex-row gap-12'>
        {socialItems.map((item) => (
          <li key={item.id}>
            <a href={item.url}>
              <img src={item.icon} alt={`${item.name}-${item.id}`} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
