import Image from 'next/image';
import ImageWeb from '@/app/assets/images/image-web-3-desktop.jpg';
import { bottomNewsItems } from '@/app/data/data';
import NewItemsAside from './news/NewItemsAside';
import BottomNewsItem from './news/BottomNewsItem';

const News = () => {
  return (
    <article className='flex flex-col p-4 md:p-0'>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-8 space-y-8 md:h-110 2xl:h-full '>
        <div className='md:col-span-2'>
          <Image
            src={ImageWeb}
            alt='The bright future of web 3.0'
            className='w-full h-2/5 2xl:h-3/5 object-cover'
          />
          <div className='flex flex-col md:flex-row justify-between py-4'>
            <h1 className='text-5xl md:text-5xl font-extrabold max-w-sm leading-tight'>
              The Bright Future of Web 3.0 ?
            </h1>
            <div className='flex flex-col items-start justify-between '>
              <p className='text-dark-grayish-blue max-w-sm'>
                we dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promises ?
              </p>
              <button
                className='transition-all duration-300 ease-in-out hover:bg-very-dark-blue bg-soft-red hover:text-off-white text-very-dark-blue
             px-8  mt-4 py-3 cursor-pointer uppercase font-bold tracking-widest
            '
              >
                read more
              </button>
            </div>
          </div>
        </div>

        <NewItemsAside />
      </section>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {bottomNewsItems.map((item) => (
          <BottomNewsItem key={item.id} {...item} />
        ))}
      </section>
    </article>
  );
};

export default News;
