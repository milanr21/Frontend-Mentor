import React, { useEffect } from 'react';
import CheckBox from '../assets/icons/CheckBox';

interface TitleProps {
  title: string;
  description: string;
  show: boolean;
  duration: number;
  onClose: () => void;
}

export const Toast: React.FC<TitleProps> = ({
  title = 'Submitted',
  description = 'Thanks for submitting',
  duration = 3000,
  show,
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  });

  if (!show) return null;
  return (
    <div className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-neutral-900 p-4 rounded-lg text-white space-y-2'>
      <div className='flex flex-row gap-2 items-center '>
        <CheckBox />
        <h1>{title}</h1>
      </div>
      <p className='text-sm font-light'>{description}</p>
    </div>
  );
};
