import emptyCartImg from '/assets/images/illustration-empty-cart.svg';
import carbonNeutralImg from '/assets/images/icon-carbon-neutral.svg';
import removedItemIcon from '/assets/images/icon-remove-item.svg';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartItems = () => {
  const { cart, dispatch } = useContext(AppContext);

  const totalAmount = cart
    .map((item) => item.quantity * item.price)
    .reduce((acc, init) => acc + init, 0);

  const handleRemoveItem = (id: number) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  return (
    <div className='flex flex-col gap-4 bg-rose-50 p-4 rounded-xl'>
      <p className='text-red  text-xl font-bold'>Your Card ({cart.length})</p>

      {cart.length > 0 ? (
        <>
          {cart.map((item) => {
            return (
              <div key={item.id}>
                <div className='flex flex-row  justify-between items-center'>
                  <p className='font-semibold text-sm'>{item.name}</p>

                  {item.quantity && (
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className='p-2 cursor-pointer'
                    >
                      <img
                        src={removedItemIcon}
                        alt='removed item'
                        className='border-2 rounded-full h-4 w-4'
                      />
                    </button>
                  )}
                </div>
                <p className='space-x-8'>
                  <span className='text-red font-semibold text-sm'>
                    {item.quantity}x
                  </span>
                  <span>$ {item.price}</span>
                  <span>$ {item.price * item.quantity}</span>
                </p>
              </div>
            );
          })}
          <p className='flex flex-row justify-between'>
            <span>Order Total</span>
            <span className='font-bold text-xl'>$ {totalAmount}</span>
          </p>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center space-y-4'>
          <img
            src={emptyCartImg}
            alt='empty_card'
            className='h-32 w-32 object-cover'
          />
          <p className='text-xs text-rose-500 font-semibold'>
            Your added items will appear hear
          </p>
        </div>
      )}

      {cart.length > 0 ? (
        <>
          <div className='flex flex-row items-center justify-center gap-4 p-4 bg-rose-100 rounded-lg'>
            <img src={carbonNeutralImg} alt='carbon-neutral-img' />

            <p>
              This is <strong>carbon-neutral</strong> delivery
            </p>
          </div>

          <button className='bg-red py-3 rounded-3xl cursor-pointer text-rose-50 font-semibold'>
            Confirm Order
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartItems;
