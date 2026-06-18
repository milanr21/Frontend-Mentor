import emptyCartImg from '/assets/images/illustration-empty-cart.svg';

import removedItemIcon from '/assets/images/icon-remove-item.svg';

const CartItems = ({ cart }) => {
  console.log('The cart is', cart);

  const cartItemsLength = cart.length ?? 0;

  return (
    <div className='flex flex-col gap-4 bg-rose-50 p-4 rounded-xl'>
      <p className='text-red  text-xl font-bold'>
        Your Card ({cartItemsLength})
      </p>

      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <div className='flex flex-row  justify-between items-center'>
                <p className='font-semibold text-sm'>{item.name}</p>
                <img
                  src={removedItemIcon}
                  alt='removed item'
                  className='border-2 rounded-full h-4 w-4 cursor-pointer'
                />
              </div>
              <p className='space-x-8'>
                <span className='text-red font-semibold text-sm'>
                  {item.quantity}x
                </span>
                <span>${item.price}</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center space-y-4'>
          <img
            src={emptyCartImg}
            alt='empty_card'
            className='h-32 w-32 object-cover'
          />
        </div>
      )}

      <p className='text-xs text-rose-500 font-semibold'>
        Your added items will appear hear
      </p>
    </div>
  );
};

export default CartItems;
