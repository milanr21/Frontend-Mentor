import headerImg from '../assets/images/desktop/image-header.jpg';
import IconArrowDown from '../assets/images/icon-arrow-down.svg';
import eggImage from '../assets/images/desktop/image-transform.jpg';
import lampImage from '../assets/images/desktop/image-stand-out.jpg';
import cherryImage from '../assets/images/desktop/image-graphic-design.jpg';
import orangeImage from '../assets/images/desktop/image-photography.jpg';

import milkImage from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import orangeSecondImage from '../assets/images/desktop/image-gallery-orange.jpg';
import coneImage from '../assets/images/desktop/image-gallery-cone.jpg';
import sugarcaneImage from '../assets/images/desktop/image-gallery-sugarcubes.jpg';

import emilyImg from '../assets/images/image-emily.jpg';
import thomassImg from '../assets/images/image-thomas.jpg';
import jennieImg from '../assets/images/image-jennie.jpg';

const clientTestimonials = [
  {
    id: 1,
    title: 'emily',
    img: emilyImg,
    description:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    designation: 'Marketing Director',
  },
  {
    id: 2,
    title: 'thomas',
    img: thomassImg,
    description:
      'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    designation: 'Chief Operating Officer',
  },
  {
    id: 3,
    title: 'jennie',
    img: jennieImg,
    description:
      'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    designation: 'Business Owner',
  },
];

const Product = () => {
  return (
    <div className='grid grid-cols-4'>
      {/* HERO SECTION */}
      <div className='col-span-4 relative'>
        {/* Image */}
        <img
          src={headerImg}
          className='w-full h-full object-cover'
          alt='header'
        />

        {/* Overlay Title */}
        <h1 className='absolute  top-5 md:top-40  left-1/2 -translate-x-1/2 text-white text-center   text-3xl md:text-7xl  font-bold'>
          We Are Creatives
        </h1>

        <div className='absolute  top-25 md:top-80 left-1/2 -translate-x-1/2'>
          <img src={IconArrowDown} className='h-10 md:h-20  w-5 md:w-10' />
        </div>
      </div>

      <div
        className='col-span-4 md:col-span-2  p-10 md:p-20 
      
        mx-auto justify-center
      flex flex-col'
      >
        <div className='space-y-6'>
          <h3 className='text-3xl font-bold max-w-[250px]'>
            Transform your brand
          </h3>

          <p className='text-sm text-gray-600 leading-relaxed max-w-[350px]'>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <button className='relative z-0 uppercase font-extrabold px-2 cursor-pointer group'>
            <span className='relative z-10'>Learn more</span>
            <span className='absolute bottom-0 left-0 w-full h-3 bg-primary-yellow-500/30 group-hover:bg-primary-yellow-500 transition-colors rounded-full -z-10'></span>
          </button>
        </div>
      </div>
      <div className='col-span-4 md:col-span-2'>
        <img src={eggImage} className='w-full h-auto object-cover' />
      </div>
      <div className='col-span-4 md:col-span-2 '>
        <img src={lampImage} className='w-full h-auto object-cover' />
      </div>
      <div
        className='col-span-4 md:col-span-2  p-10 md:p-20 
      
        mx-auto justify-center
      flex flex-col'
      >
        <div className='space-y-6'>
          <h3 className='text-3xl font-bold max-w-[350px]'>
            Stand out to the right audience
          </h3>

          <p className='text-sm text-gray-600 leading-relaxed max-w-[400px]'>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>

          <button className='relative z-0 uppercase font-extrabold px-2 cursor-pointer group'>
            <span className='relative z-10'>Learn more</span>
            <span className='absolute bottom-0 left-0 w-full h-3 bg-primary-red-400/30 group-hover:bg-primary-red-400 transition-colors rounded-full -z-10'></span>
          </button>
        </div>
      </div>
      <div className='col-span-4 md:col-span-2 '>
        <div className='relative'>
          <img src={cherryImage} className='w-full h-auto object-cover' />

          <div className='absolute bottom-10 md:bottom-20 max-w-sm md:right-1/4 right-12   items-center text-center space-y-4'>
            <h3>Graphic Design</h3>
            <p className='text-md font-serif'>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
      </div>
      <div className='col-span-4 md:col-span-2 bg-yellow-300'>
        <div className='relative'>
          <img src={orangeImage} className='w-full h-auto object-cover' />

          <div className='absolute  bottom-10 md:bottom-20 max-w-sm md:right-1/4 right-12 items-center text-center space-y-4'>
            <h3>Photography</h3>
            <p className='text-md font-serif'>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>

      <div className='col-span-4   py-12'>
        {/* Row 1 */}
        <div className='uppercase text-center tracking-widest'>
          Client testimonials
        </div>

        {/* Row 2 */}
        <div className='grid grid-cols-1 md:grid-cols-3  gap-0 md:gap-6'>
          {clientTestimonials.map((client) => (
            <div
              key={client.id}
              className='p-12 flex flex-col items-center space-y-4 text-center'
            >
              <img
                src={client.img}
                alt={client.title}
                className='h-12 w-12 rounded-full object-cover'
              />

              <p className='text-sm font-serif text-gray-600 leading-relaxed'>
                {client.description}
              </p>

              <div className='flex flex-col'>
                <span className='font-bold'>{client.name}</span>
                <span className='text-xs text-gray-500'>
                  {client.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='col-span-2 md:col-span-1 bg-gray-500'>
        <img src={milkImage} className='w-full h-auto object-cover' />
      </div>
      <div className='col-span-2 md:col-span-1 bg-gray-500'>
        <img src={orangeSecondImage} className='w-full h-auto object-cover' />
      </div>
      <div className='col-span-2 md:col-span-1 bg-gray-500'>
        <img src={coneImage} className='w-full h-auto object-cover' />
      </div>
      <div className='col-span-2 md:col-span-1 bg-gray-500'>
        <img src={sugarcaneImage} className='w-full h-auto object-cover' />
      </div>
    </div>
  );
};

export default Product;
