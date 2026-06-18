import waffleThumbnail from '../assets/images/image-waffle-thumbnail.jpg';

import waffleMobile from '../assets/images/image-waffle-mobile.jpg';
import waffleTablet from '../assets/images/image-waffle-tablet.jpg';
import waffleDesktop from '../assets/images/image-waffle-desktop.jpg';
import ImgIconAddToCart from '../assets/images/icon-add-to-cart.svg';

export type MenuItemsProps = {
  name: string;
  description: string;
  price: number;
  mobileImg: string;
  tableImg: string;
  desktopImg: string;
  handleCardItems?: () => void;
};

const MenuItems = ({
  mobileImg,
  tableImg,
  desktopImg,
  name,
  description,
  price,
  handleCardItems,
}: MenuItemsProps) => {
  return (
    <div>
      <div className='relative w-54 mb-8'>
        <picture>
          <source media='(min-width: 1024px)' srcSet={desktopImg} />
          <source media='(min-width: 768px)' srcSet={tableImg} />

          <img
            src={mobileImg}
            alt='Waffle with berries'
            className='h-56 w-full object-cover rounded-lg'
          />
        </picture>
        <button
          onClick={handleCardItems}
          className='flex flex-row items-center justify-center
          border-rose-500 border-1 w-2/3 absolute left-1/2 bottom-0
          -translate-x-1/2 translate-y-1/2 bg-rose-50 py-2 rounded-3xl gap-2 cursor-pointer
        '
        >
          <img src={ImgIconAddToCart} alt='add_to_cart' />
          <span className='font-semibold'>Add to Card</span>
        </button>
      </div>
      <div className='space-y-1'>
        <p className='text-rose-400'>{name}</p>
        <h3 className='font-semibold'>{description}</h3>
        <p className='text-red text-lg font-semibold'>{price}</p>
      </div>
    </div>
  );
};

export default MenuItems;
