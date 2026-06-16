import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Mentor | Product preview card component',
  description: 'Product preview card component',
  icons: {
    icon: '/image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${inter.className} h-full flex flex-col bg-neutral-cream`}
      >
        <div className='flex-grow flex items-center justify-center'>
          {children}
        </div>

        <footer className='attribution py-8 text-center text-sm text-neutral-grey'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-700 underline'
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href='https://www.frontendmentor.io/profile/milanr21'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-700 underline'
          >
            Milan Rawal
          </a>
          .
        </footer>
      </body>
    </html>
  );
}
