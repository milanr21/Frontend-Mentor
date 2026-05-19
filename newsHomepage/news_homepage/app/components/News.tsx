import Image from 'next/image';
import ImageWeb from '@/app/assets/images/image-web-3-desktop.jpg';

import ImageRetroPC from '@/app/assets/images/image-retro-pcs.jpg';
import ImageLaptopPC from '@/app/assets/images/image-top-laptops.jpg';

import ImageGaming from '@/app/assets/images/image-gaming-growth.jpg';

const bottomNewsItems = [
  {
    id: 1,
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades ?',
    image: ImageRetroPC,
  },
  {
    id: 2,
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets',
    image: ImageLaptopPC,
  },
  {
    id: 3,
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities',
    image: ImageGaming,
  },
];

const News = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 min-h-[90vh]'>
      <div className='flex flex-col md:flex-row justify-between  space-x-8'>
        <div className=''>
          <Image src={ImageWeb} alt='image-web' />
          <div className='flex flex-col md:flex-row justify-between  gap-2 py-4'>
            <div className='  max-w-76 md:max-w-52'>
              <h1 className='text-4xl font-extrabold'>
                The Bright Future of Web 3.0 ?
              </h1>
            </div>
            <div className='flex flex-col justify-between items-start max-w-96 space-y-4'>
              <p>
                we dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promises ?
              </p>
              <button
                className='bg-very-dark-blue hover:bg-soft-red  text-off-white hover:text-very-dark-blue
             px-6 py-2 cursor-pointer uppercase font-normal
            '
              >
                read more
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col  space-y-6 bg-very-dark-blue px-4 py-8'>
          <div>
            <h1 className='text-soft-orange text-3xl font-semibold'>New</h1>
          </div>
          <div>
            <h1 className='  text-grayish-blue  hover:text-soft-orange mb-2 text-lg font-semibold cursor-pointer'>
              Hydrogen VS Electric Cars
            </h1>
            <p className='text-grayish-blue text-sm'>
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className='w-full h-px bg-grayish-blue mx-auto'></div>
          <div>
            <h1 className='  text-grayish-blue  hover:text-soft-orange mb-2 text-lg font-semibold cursor-pointer'>
              The Downsides of AI Artistry
            </h1>
            <p className='text-grayish-blue text-sm'>
              What are the possible adverse effects of on demand AI image
              generation?
            </p>
          </div>
          <div className='w-full h-px bg-grayish-blue mx-auto'></div>
          <div>
            <h1 className='text-off-white mb-2 font-semibold hover:text-soft-orange cursor-pointer'>
              Is VC Funding Drying Up?
            </h1>
            <p className='text-grayish-blue text-sm font-light'>
              Private funding by VC firms is down 50% YOY. We take a look at
              what
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center'>
        {bottomNewsItems.map((item) => {
          return (
            <div
              className='flex flex-row w-full items-center md:items-start mb-6 space-x-4'
              key={item.id}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                className='h-24 w-24 sm:h-24 sm:w-24 md:h-24 md:w-24 object-cover'
              />

              {/* Text */}
              <div className='px-0 sm:px-4 mt-2 sm:mt-0 flex flex-col'>
                <h1 className='text-3xl text-soft-red font-bold'>0{item.id}</h1>
                <h2 className='text-xl font-bold'>{item.title}</h2>
                <p className='text-sm text-grayish-blue'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
