import React from 'react';

type ToggleButtonProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ value, onChange }) => {
  return (
    <button
      role='switch'
      aria-checked={value}
      onClick={() => onChange(!value)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full
    ${value ? 'bg-red-500' : 'bg-neutral-300'}
  `}
    >
      <span
        className={`h-4 w-4 transform rounded-full bg-white transition
      ${value ? 'translate-x-6' : 'translate-x-1'}
    `}
      />
    </button>
  );
};

export default ToggleButton;
