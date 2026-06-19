import ImgIconAddToCart from '../assets/images/icon-add-to-cart.svg';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

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
    <div key={id}>
      <div className='relative w-54 mb-8'>
        <picture>
          <source media='(min-width: 1024px)' srcSet={image.desktop} />
          <source media='(min-width: 768px)' srcSet={image.tablet} />

          <img
            src={image.mobile}
            alt='Waffle with berries'
            className='h-56 w-full object-cover rounded-lg'
          />
        </picture>

        {isItemMore ? (
          <button
            className='flex flex-row items-center justify-evenly
        border-1 w-2/3 absolute left-1/2 bottom-0 text-rose-50 
       -translate-x-1/2 translate-y-1/2 bg-red py-2 font-semibold rounded-3xl gap-2 cursor-pointer
     '
          >
            <span
              onClick={handleAddItems}
              className='border-1 border-rose-50 rounded-full h-4 w-4 flex text-center items-center justify-center'
            >
              +
            </span>
            <span className=''>{quantity}</span>
            <span
              onClick={handleRemoveItems}
              className='border-1 border-rose-50 rounded-full h-4 w-4 flex text-center items-center justify-center'
            >
              -
            </span>
          </button>
        ) : (
          <button
            onClick={handleAddItems}
            className='flex flex-row items-center justify-center
          border-rose-500 border-1 w-2/3 absolute left-1/2 bottom-0
          -translate-x-1/2 translate-y-1/2 bg-rose-50 py-2 rounded-3xl gap-2 cursor-pointer
        '
          >
            <img src={ImgIconAddToCart} alt='add_to_cart' />
            <span className='font-semibold'>Add to Card</span>
          </button>
        )}
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
