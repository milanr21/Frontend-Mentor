import { StaticImageData } from 'next/image';
import ImageRetroPC from '@/app/assets/images/image-retro-pcs.jpg';
import ImageLaptopPC from '@/app/assets/images/image-top-laptops.jpg';
import ImageGaming from '@/app/assets/images/image-gaming-growth.jpg';

export interface BottomNewsItem {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
}

export interface NavItem {
  id: number;
  name: string;
  link: string;
}

export const bottomNewsItems: BottomNewsItem[] = [
  {
    id: 1,
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades ?',
    image: ImageRetroPC,
  },
  {
    id: 2,
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets',
    image: ImageLaptopPC,
  },
  {
    id: 3,
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities',
    image: ImageGaming,
  },
];

export const newItemsAside: NewsItem[] = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    id: 2,
    title: 'The Downsides of AI Artistry',
    description:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    id: 3,
    title: 'Is VC Funding Drying Up?',
    description:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

export const navItems: NavItem[] = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'New', link: '/' },
  { id: 3, name: 'Popular', link: '/' },
  { id: 4, name: 'Trending', link: '/' },
  { id: 5, name: 'Categories', link: '/' },
];
