import { useContext } from 'react';

import Modal from '../common/Modal';
import { AppContext } from '../context/AppContext';
import { removeCartFromStorage } from '../helpers/storage';

import emptyCartImg from '/assets/images/illustration-empty-cart.svg';
import orderConfirmedIcon from '/assets/images/icon-order-confirmed.svg';

const CartItemModal = () => {
  const { cart, dispatch, isOpen } = useContext(AppContext);

  const totalAmount = cart
    .map((item) => item.quantity * item.price)
    .reduce((acc, init) => acc + init, 0);

  const handleToggle = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  const handleNewOrder = () => {
    removeCartFromStorage();
    dispatch({
      type: 'CLOSE_MODAL',
    });
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  return (
    <Modal onClose={handleToggle} isOpen={isOpen}>
      <div className='flex flex-col gap-4 bg-rose-50 p-6 rounded-xl'>
        <div className='space-y-2'>
          <img src={orderConfirmedIcon} alt='order_confirmed' />
          <p className='text-3xl font-semibold'>Order Confirmed</p>
          <p>We hope you enjoy your food!</p>
        </div>

        {cart.length > 0 ? (
          <div className='bg-red/10 p-6 rounded-lg max-h-[40vh] overflow-y-auto'>
            {cart.map((item) => {
              return (
                <div key={item.id}>
                  <div className='flex flex-row justify-between gap-20 '>
                    <div className='flex flex-row  gap-4 '>
                      <img
                        src={item.image.thumbnail}
                        alt=''
                        className='h-12 w-12 object-cover'
                      />
                      <div>
                        <p className='font-semibold text-sm'>
                          <span> {item.name}</span>
                        </p>
                        <p className='space-x-4'>
                          <span className='text-red font-semibold text-sm'>
                            {item.quantity}x
                          </span>
                          <span>$ {item.price}</span>
                        </p>
                      </div>
                    </div>
                    <p>$ {item.price * item.quantity}</p>
                  </div>
                  <hr className='my-4 border-t border-gray-300' />
                </div>
              );
            })}

            <p className='flex flex-row justify-between'>
              <span>Order Total</span>

              <span className='font-bold text-xl'>$ {totalAmount}</span>
            </p>
          </div>
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
            <button
              onClick={handleNewOrder}
              className='bg-red py-3 rounded-3xl cursor-pointer text-rose-50 font-semibold hover:bg-red-800 transition-colors duration-300 ease-in-out'
            >
              Start New Order
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
};

export default CartItemModal;
