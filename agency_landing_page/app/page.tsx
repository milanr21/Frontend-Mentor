import Image from 'next/image';
import ImageHeader from '@/app/images/desktop/image-header.jpg';
import ImageEggDesktop from '@/app/images/desktop/image-transform.jpg';

export default function Home() {
  return (
    <div>
      <h1 className=' absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2   text-4xl uppercase font-bold text-center text-white'>
        We Are Creatives
      </h1>
      {/* <p className='absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-600 p-1 w-1/3'></p> */}
      <main>
        <Image
          src={ImageHeader}
          alt='img-header'
          className='w-full h-[60vh] object-cover'
        />
      </main>
      <section className='grid grid-cols-2 w-full gap-4 min-w-0'>
        <div className='min-w-0'>
          <h2 className='text-3xl font-bold'>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button>Learn More</button>
        </div>
        <div className='min-w-0'>
          <Image src={ImageEggDesktop} alt='img-egg' className='' />
        </div>
      </section>
    </div>
  );
}
