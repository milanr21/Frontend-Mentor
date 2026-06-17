'use client';

import React, { useEffect } from 'react';
import { ToastProps } from '@/app/types';
import CheckBox from '@/app/assets/icons/CheckBox';

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
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
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      role='status'
      aria-live='polite'
      className='fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 p-6 rounded-xl text-white shadow-lg min-w-[320px] max-w-[90%]'
    >
      <div className='flex items-center gap-3 mb-2'>
        <CheckBox />
        <h2 className='text-lg font-bold leading-none'>{title}</h2>
      </div>
      <p className='text-primary-200 text-sm opacity-90'>{description}</p>
    </div>
  );
};

export default Toast;
