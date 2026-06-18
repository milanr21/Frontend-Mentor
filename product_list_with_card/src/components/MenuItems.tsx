import waffleThumbnail from '../assets/images/image-waffle-thumbnail.jpg';

import waffleMobile from '../assets/images/image-waffle-mobile.jpg';
import waffleTablet from '../assets/images/image-waffle-tablet.jpg';
import waffleDesktop from '../assets/images/image-waffle-desktop.jpg';
import ImgIconAddToCart from '../assets/images/icon-add-to-cart.svg';

const MenuItems = () => {
  return (
    <div>
      <div className='relative w-54 mb-8'>
        <img
          src={waffleDesktop}
          alt='image_waffle_desktop'
          className='h-56 w-full object-cover rounded-lg border-2 border-red'
        />
        <button
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
        <p className='text-rose-400'>Waffle</p>
        <h3 className='font-semibold'>Waffle with berries</h3>
        <p className='text-red text-lg font-semibold'>$6.30</p>
      </div>
    </div>
  );
};

export default MenuItems;
