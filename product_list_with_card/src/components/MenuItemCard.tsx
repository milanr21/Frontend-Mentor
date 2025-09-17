import ImgWaffleDesktop from '../assets/images/image-waffle-desktop.jpg';
import ImgIconAddToCart from '../assets/images/icon-add-to-cart.svg';

const MenuItemCard = () => {
  return (
    <div>
      <div
        className='
    gap-24'
      >
        <div className='relative w-54 mb-8'>
          <img
            src={ImgWaffleDesktop}
            alt='image_waffle_desktop'
            height={300}
            width={300}
            className='rounded-xl'
          />
          <button
            className='
           absolute
          left-1/2 bottom-0  -translate-x-1/2 translate-y-1/2
          flex flex-row  border-amber-900 border-2
         rounded-3xl
         w-36 py-2
         items-center 
         justify-center
         bg-white
         
        '
          >
            <img src={ImgIconAddToCart} alt='icon_add_to_cart' />
            <span>Add to Cart</span>
          </button>
        </div>

        <div>
          <h3>Waffle</h3>
          <h2>Waffle with Berries</h2>
          <p>$6.50</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
