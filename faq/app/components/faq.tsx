'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import addIcon from '@/assets/images/icon-plus.svg';
import starIcon from '@/assets/images/icon-star.svg';
import minusIcon from '@/assets/images/icon-minus.svg';
import bgMobileImg from '@/assets/images/background-pattern-mobile.svg';
import bgDesktopImg from '@/assets/images/background-pattern-desktop.svg';

import { faqs } from '../data/faqs';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Background Pattern */}
      <div className='absolute top-0 left-0 w-full h-[40vh]'>
        <Image
          src={bgDesktopImg}
          alt=''
          fill
          priority
          className='hidden md:block object-cover'
        />

        <Image
          src={bgMobileImg}
          alt=''
          fill
          priority
          className='block md:hidden object-cover'
        />
      </div>
      {/* Content */}
      <section className='relative z-10 h-full items-center justify-center px-6 flex flex-1 '>
        <div className='w-full max-w-xl rounded-xl bg-white p-6 shadow-xl md:p-8'>
          {/* Header */}
          <div className='mb-8 flex items-center gap-6'>
            <Image src={starIcon} alt='FAQ icon' width={32} height={32} />

            <h1 className='text-3xl font-bold text-purple-950 md:text-5xl'>
              FAQs
            </h1>
          </div>

          {/* FAQ List */}
          <ul className='space-y-4'>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <li
                  key={faq.question}
                  className='border-b border-purple-100 pb-4 last:border-b-0'
                >
                  <button
                    type='button'
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className='
                      flex
                      w-full
                      items-start
                      justify-between
                      gap-4
                      text-left
                      font-semibold
                      text-purple-950
                      transition-colors
                      duration-200
                      hover:text-purple-900
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-purple-900
                      focus-visible:ring-offset-2
                      rounded-md
                    '
                  >
                    <span>{faq.question}</span>

                    <Image
                      src={isOpen ? minusIcon : addIcon}
                      alt=''
                      aria-hidden='true'
                      width={30}
                      height={30}
                      className=''
                    />
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`
    overflow-hidden
    transition-all
    duration-300
    ease-in-out
    ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}
  `}
                  >
                    <p className=' text-base leading-6 text-purple-600'>
                      {faq.answer}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Faq;
