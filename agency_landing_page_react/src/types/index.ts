export interface NavItem {
  id: number;
  name: string;
  link: string;
}

export interface ClientTestimonial {
  id: number;
  title: string;
  img: string;
  description: string;
  name: string;
  designation: string;
}

export interface SocialItem {
  id: number;
  name: string;
  icon: string;
  url: string;
}

export interface FeatureProps {
  id?: string;
  title: string;
  description: string;
  imageMobile: string;
  imageDesktop: string;
  buttonColor: string;
  reverse?: boolean;
}

export interface ServiceProps {
  title: string;
  description: string;
  imageMobile: string;
  imageDesktop: string;
  textColor: string;
}

export const navItems: NavItem[] = [
  { id: 1, name: 'about', link: '#about' },
  { id: 2, name: 'services', link: '#services' },
  { id: 3, name: 'projects', link: '#projects' },
  { id: 4, name: 'contact', link: '#contact' },
];

export interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
