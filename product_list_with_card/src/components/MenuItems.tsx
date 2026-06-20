import type { Product } from './types/types';

import ImgIconAddToCart from '/assets/images/icon-add-to-cart.svg';
import ImgIconIncreaseQuantity from '/assets/images/icon-increment-quantity.svg';
import ImgIconDecreaseQuantity from '/assets/images/icon-decrement-quantity.svg';

export type MenuItemsProps = Product & {
  isItemMore: boolean;
  quantity: number;
  handleAddItems?: () => void;
  handleRemoveItems?: () => void;
};

const MenuItems = ({
  id,
  image,
  name,
  description,
  price,
  isItemMore,
  quantity,
  handleAddItems,
  handleRemoveItems,
}: MenuItemsProps) => {
  return (
    <article key={id} className='w-full h-full'>
      <div className='relative'>
        <picture>
          <source media='(min-width: 1024px)' srcSet={image.desktop} />
          <source media='(min-width: 768px)' srcSet={image.tablet} />
          <img
            src={image.mobile}
            alt={description || name}
            className='h-56 w-full object-cover rounded-lg'
          />
        </picture>

        {isItemMore ? (
          <div
            role='group'
            aria-label={`Quantity controls for ${name}`}
            className='flex items-center justify-between w-2/5 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-red py-2 px-3 rounded-3xl text-rose-50 font-semibold'
          >
            <button
              type='button'
              onClick={handleAddItems}
              aria-label={`Increase quantity of ${name}`}
              className='p-1 rounded-full border h-4 w-4 border-rose-50 flex items-center justify-center cursor-pointer'
            >
              <img src={ImgIconIncreaseQuantity} alt='' aria-hidden='true' />
            </button>

            <span aria-live='polite'>{quantity}</span>

            <button
              type='button'
              onClick={handleRemoveItems}
              aria-label={`Decrease quantity of ${name}`}
              className='p-1 rounded-full border border-rose-50 flex items-center justify-center  h-4 w-4 cursor-pointer'
            >
              <img src={ImgIconDecreaseQuantity} alt='' aria-hidden='true' />
            </button>
          </div>
        ) : (
          <button
            type='button'
            onClick={handleAddItems}
            aria-label={`Add ${name} to cart`}
            className='flex items-center justify-center gap-2 border border-rose-500  w-2/5 md:w-3/5 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-rose-50 py-2 rounded-3xl cursor-pointer'
          >
            <img src={ImgIconAddToCart} alt='' aria-hidden='true' />
            <span className='font-semibold'>Add to Cart</span>
          </button>
        )}
      </div>

      <header className='mt-6'>
        <p className='text-rose-500 text-xs'>{name}</p>
        <h3 className='font-semibold text-md'>{description}</h3>
        <p className='text-red text-md font-semibold'>{price}</p>
      </header>
    </article>
  );
};

export default MenuItems;
