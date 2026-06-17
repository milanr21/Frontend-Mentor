import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/layout/Footer';

const karla = localFont({
  src: [
    {
      path: './assets/fonts/static/Karla-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/static/Karla-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-karla',
});

export const metadata: Metadata = {
  title: 'Accessible Contact Form | Frontend Mentor',
  description:
    'A clean and accessible contact form challenge from Frontend Mentor.',
  icons: {
    icon: '/favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${karla.variable} font-sans antialiased bg-primary-200 min-h-screen flex flex-col`}
      >
        <main className='grow flex items-center justify-center p-4 md:p-0'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
