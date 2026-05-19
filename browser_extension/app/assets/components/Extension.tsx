'use client';

import ConsoleIcon from '../icons/ConsoleIcon';
import ToggleButton from '@/app/Buttons/ToggleButton';

import React, { ReactNode, useState } from 'react';

interface ExtensionProps {
  icon: ReactNode;
  title: string;
  description: string;
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
  actionLabel?: string;
  onAction?: () => void;
}

const Extension: React.FC<ExtensionProps> = ({
  icon,
  title,
  description,
  isEnabled,
  onToggle,
  actionLabel,
  onAction,
}) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className='flex flex-col p-4 border border-neutral-300 rounded-3xl gap-6'>
      <div className='flex flex-row items-center justify-center space-between gap-4'>
        <div>{icon}</div>

        <div className='gap-4 max-w-sm'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between space-between'>
        <button className='p-2 text-center items-center justify-center border rounded-2xl'>
          {actionLabel}
        </button>
        <ToggleButton value={isEnabled} onChange={onToggle} />
      </div>
    </div>
  );
};

export default Extension;
