import React from 'react';

import emilyImg from '../../assets/images/image-emily.jpg';
import thomasImg from '../../assets/images/image-thomas.jpg';
import jennieImg from '../../assets/images/image-jennie.jpg';

import type { ClientTestimonial } from '../../types';

const testimonials: ClientTestimonial[] = [
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
    img: thomasImg,
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

const Testimonials: React.FC = () => {
  return (
    <section className='py-16 md:py-32 px-6 text-center space-y-16 md:space-y-24'>
      <h2 className='uppercase font-display font-black tracking-[0.3em] text-neutral-gray-400 text-lg md:text-xl'>
        Client testimonials
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-6xl mx-auto'>
        {testimonials.map((client) => (
          <div
            key={client.id}
            className='flex flex-col items-center space-y-8 md:space-y-12'
          >
            <img
              src={client.img}
              alt={client.name}
              className='h-16 w-16 rounded-full object-cover'
            />

            <p className='text-neutral-gray-600 font-sans font-semibold leading-relaxed max-w-sm'>
              {client.description}
            </p>

            <div className='space-y-2'>
              <h4 className='font-display font-black text-neutral-gray-950 text-lg'>
                {client.name}
              </h4>
              <p className='text-neutral-gray-400 font-sans font-semibold text-sm'>
                {client.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
