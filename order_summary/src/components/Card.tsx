import HeroImg from '../assets/images/illustration-hero.svg';
import MusicIcon from '../assets/images/icon-music.svg';

const Card = () => {
  return (
    <article className='w-full max-w-sm md:max-w-md overflow-hidden  bg-white space-y-2 mt-auto '>
      <img
        src={HeroImg}
        alt='Illustration showing music streaming on multiple devices'
        className='w-full object-cover'
      />
      <div className='flex flex-col space-y-4 items-center justify-center text-center   px-14  md:px-16 py-5  '>
        <h2 className='font-semibold text-2xl'>Order Summary</h2>
        <p className='text-neutral-gray-600'>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className='flex w-full flex-row items-center justify-between gap-4 bg-neutral-gray-600/5 py-6 px-4 rounded-2xl'>
          <img
            src={MusicIcon}
            alt='icon-music'
            className='h-10 w-10 object-cover'
          />
          <div className='flex flex-col'>
            <p className='font-semibold'>Annual Plan</p>
            <p>$55.99/year</p>
          </div>
          <button
            aria-label='Change subscription plan'
            className='text-primary-blue-700 font-semibold underline cursor-pointer hover:text-primary-blue-700/70 hover:no-underline  transition delay-20 duration-300 ease-in-out'
          >
            Change
          </button>
        </div>

        <div className='flex flex-col w-full gap-4 py-4 space-y-1'>
          <button
            aria-label='Proceed to payment'
            className='bg-primary-blue-700 text-neutral-blue-50 rounded-2xl py-3 font-semibold  cursor-pointer hover:bg-primary-blue-700/80 shadow-2xl transition delay-100 duration-300 ease-in-out '
          >
            Proceed to Payment
          </button>
          <button
            aria-label='Cancel order'
            className='rounded-2xl  text-neutral-gray-600 font-semibold
            cursor-pointer hover:text-neutral-blue-950 transition delay-100 duration-300 ease-in-out
          '
          >
            Cancel Order
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
