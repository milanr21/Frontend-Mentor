import ColtonImg from '../assets/images/image-colton.jpg';
import AnneImg from '../assets/images/image-anne.jpg';
import IreneImg from '../assets/images/image-irene.jpg';
import starIcon from '../assets/images/icon-star.svg';

export type ClientRating = {
  id: string;
  label: string;
  stars: number;
  icon: string;
};

export type Review = {
  name: string;
  verifiedBuyer: boolean;
  description: string;
  image: string;
};

export const ClientRatings: ClientRating[] = [
  {
    id: 'reviews',
    label: 'Rated 5 Stars in Reviews',
    stars: 5,
    icon: starIcon,
  },
  {
    id: 'report-guru',
    label: 'Rated 5 Stars in Report Guru',
    stars: 5,
    icon: starIcon,
  },
  {
    id: 'best-tech',
    label: 'Rated 5 Stars in BestTech',
    stars: 5,
    icon: starIcon,
  },
];

export const reviews: Review[] = [
  {
    name: 'Colton Smith',
    verifiedBuyer: true,
    description:
      'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
    image: ColtonImg,
  },
  {
    name: 'Irene Roberts',
    verifiedBuyer: true,
    description:
      'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
    image: IreneImg,
  },
  {
    name: 'Anne Wallace',
    verifiedBuyer: true,
    description:
      'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
    image: AnneImg,
  },
];
