import type React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className='relative flex items-center justify-center flex-1 overflow-hidden py-20 lg:py-0'>
      <div className=' -z-10' aria-hidden='true'>
        <div
          className="absolute top-0 left-0 w-full h-90.5    bg-[url('/src/assets/images/bg-pattern-top-mobile.svg')] 
          lg:bg-[url('/src/assets/images/bg-pattern-top-desktop.svg')] bg-no-repeat bg-top-left"
        ></div>
        <div
          className="
     absolute bottom-0 right-0 w-full h-168.25 bg-no-repeat bg-bottom-right
    bg-[url('/src/assets/images/bg-pattern-bottom-mobile.svg')] 
          lg:bg-[url('/src/assets/images/bg-pattern-bottom-desktop.svg')] "
        ></div>
        <div className='container mx-auto px-6 max-w-6xl space-y-16 lg:space-y-16'>
          {children}
        </div>
      </div>
    </main>
  );
};
