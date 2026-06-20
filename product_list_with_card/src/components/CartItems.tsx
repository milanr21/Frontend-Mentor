import { useContext } from 'react';

import removedItemIcon from '/assets/images/icon-remove-item.svg';
import emptyCartImg from '/assets/images/illustration-empty-cart.svg';
import carbonNeutralImg from '/assets/images/icon-carbon-neutral.svg';

import { AppContext } from '../context/AppContext';

const CartItems = () => {
  const { cart, dispatch } = useContext(AppContext);

  const context = useContext(AppContext);

  console.log(context);

  const totalAmount = cart
    .map((item) => item.quantity * item.price)
    .reduce((acc, init) => acc + init, 0);

  const handleRemoveItem = (id: number) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  const handleConfirm = () => {
    dispatch({
      type: 'OPEN_MODAL',
    });
  };

  return (
    <div className='flex flex-col gap-4 bg-rose-50 p-4 rounded-xl'>
      <h2 className='text-red text-xl font-bold'>Your Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <section
          className='flex flex-col items-center justify-center space-y-4 '
          aria-live='polite'
          aria-label='Empty cart state '
        >
          <img
            src={emptyCartImg}
            alt='Empty cart illustration'
            className='h-32 w-32 object-cover'
          />
          <p className='text-xs text-rose-500 font-semibold'>
            Your added items will appear here
          </p>
        </section>
      ) : (
        <>
          <ul className='flex flex-col gap-3 max-h-[40vh] overflow-y-auto'>
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <li key={item.id} className='flex flex-col gap-1'>
                  <div className='flex justify-between items-center'>
                    <p className='font-semibold text-sm'>{item.name}</p>

                    {item.quantity > 0 && (
                      <button
                        type='button'
                        onClick={() => handleRemoveItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className='group flex items-center justify-center w-6 h-6 rounded-full border border-red/30 cursor-pointer transition-colors duration-200 ease-in-out hover:border-black'
                      >
                        <img
                          src={removedItemIcon}
                          alt=''
                          aria-hidden='true'
                          className='w-3 h-3 transition-all duration-200 ease-in-out group-hover:brightness-0 group-hover:saturate-100'
                        />
                      </button>
                    )}
                  </div>

                  <div
                    className='flex gap-2 text-sm'
                    aria-label={`Pricing details for ${item.name}`}
                  >
                    <span className='text-red font-semibold'>
                      {item.quantity}×
                    </span>
                    <span>${item.price}</span>
                    <span className='font-medium'>${itemTotal}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className='flex justify-between' aria-label='Order total'>
            <span>Order Total</span>
            <span className='font-bold text-xl'>${totalAmount}</span>
          </div>

          <div
            className='flex items-center justify-center gap-2 p-4 bg-rose-100 rounded-lg'
            role='note'
            aria-label='Carbon neutral delivery information'
          >
            <img src={carbonNeutralImg} alt='' aria-hidden='true' />
            <p className='text-sm'>
              This is <strong>carbon-neutral</strong> delivery
            </p>
          </div>

          <button
            type='button'
            onClick={handleConfirm}
            className='bg-red py-3 rounded-3xl text-rose-50 font-semibold hover:bg-red-800 cursor-pointer transition-colors duration-300 ease-in-out'
            aria-label='Confirm order'
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartItems;
