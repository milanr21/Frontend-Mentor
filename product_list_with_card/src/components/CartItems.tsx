import emptyCartImg from '../assets/images/illustration-empty-cart.svg';

const CartItems = () => {
  return (
    <div className='flex flex-col gap-4 bg-rose-50 p-4 rounded-xl'>
      <p className='text-red  text-xl font-bold'>Your Card (0)</p>

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
    </div>
  );
};

export default CartItems;
