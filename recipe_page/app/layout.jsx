import localFont from 'next/font/local';
import './globals.css';

const youngSerif = localFont({
  src: '../assets/fonts/young-serif/YoungSerif-Regular.ttf',
  variable: '--font-young-serif',
});

const outfit = localFont({
  src: '../assets/fonts/outfit/Outfit-VariableFont_wght.ttf',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Frontend Mentor | Recipe page',
  description: 'A simple recipe page challenge from Frontend Mentor',
  icons: {
    icon: '/favicon-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${youngSerif.variable} ${outfit.variable} font-outfit text-stone-600 bg-stone-100`}
      >
        {children}
        <footer className='mt-8  text-sm md:text-md text-center text-stone-600'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'
            className='text-hsl-228-45-44 hover:underline text-[#3e52a3]'
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href='https://www.frontendmentor.io/profile/milanr21'
            target='_blank'
            className='text-hsl-228-45-44 hover:underline text-[#3e52a3]'
          >
            Milan Rawal
          </a>
          .
        </footer>
      </body>
    </html>
  );
}
