import Image from 'next/image';
import omeletteImg from '@/assets/images/image-omelette.jpeg';
import {
  ingredientsData,
  nutritionalInformation,
  omeletteRecipe,
  preparationTimeData,
} from './data/recipe';

export default function Recipe() {
  return (
    <main className='min-h-screen flex flex-col items-center'>
      <div className='flex-grow w-full flex flex-col items-center justify-center py-0 md:py-24 px-0 md:px-6'>
        <div className='max-w-[736px] w-full bg-white md:rounded-[24px] overflow-hidden'>
          <div className='p-0 md:p-10'>
            <div className='relative aspect-[656/300] md:rounded-[12px] overflow-hidden'>
              <Image
                src={omeletteImg}
                alt='Simple Omelette'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>

          <div className='p-8 md:px-10 md:pb-10 md:pt-0'>
            <h1 className='text-3xl md:text-[40px] leading-tight font-serif text-stone-900 mb-6'>
              Simple Omelette Recipe
            </h1>
            <p className='text-stone-600 mb-8'>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>

            <section className='bg-rose-50 p-6 md:p-7 rounded-xl mb-8'>
              <h2 className='text-xl font-outfit font-bold text-rose-800 mb-4'>
                Preparation time
              </h2>
              <ul className='space-y-3'>
                {preparationTimeData.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='inline-block w-1 h-1 rounded-full bg-rose-800 mt-[10px] mr-4 shrink-0' />
                    <p className='text-stone-600'>
                      <strong className='font-bold text-stone-600'>
                        {item.label}:
                      </strong>{' '}
                      {item.time}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className='mb-8 pb-8 border-b border-stone-150'>
              <h2 className='text-[28px] font-serif text-brown-800 mb-6'>
                Ingredients
              </h2>
              <ul className='space-y-2 px-2'>
                {ingredientsData.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='inline-block w-1.5 h-1.5 rounded-full bg-brown-800 mt-[10px] mr-6 shrink-0' />
                    <p className='text-stone-600'>{item.name}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className='mb-8 pb-8 border-b border-stone-150'>
              <h2 className='text-[28px] font-serif text-brown-800 mb-6'>
                Instructions
              </h2>
              <ol className='space-y-2 list-none counter-reset-instructions'>
                {omeletteRecipe.map((item, index) => (
                  <li key={index} className='flex items-start group'>
                    <span className='text-brown-800 font-bold mr-4 w-4 shrink-0'>
                      {index + 1}.
                    </span>
                    <p className='text-stone-600'>
                      <strong className='font-bold text-stone-600'>
                        {item.title}:
                      </strong>{' '}
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className='text-[28px] font-serif text-brown-800 mb-6'>
                Nutrition
              </h2>
              <p className='text-stone-600 mb-6'>
                The table below shows nutritional values per serving without the
                additional fillings.
              </p>
              <div className='space-y-3'>
                {nutritionalInformation.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-8 pb-3 ${
                      index !== nutritionalInformation.length - 1
                        ? 'border-b border-stone-150'
                        : ''
                    }`}
                  >
                    <span className='w-1/2 text-stone-600'>{item.type}</span>
                    <span className='w-1/2 text-brown-800 font-bold'>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
