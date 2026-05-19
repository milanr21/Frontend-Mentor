import React from 'react';
import { IconProps } from './Icon.types';

const VercelIcon: React.FC<IconProps> = ({
  width = 1155,
  height = 1000,
  color = '#fff',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 1155 1000'
    >
      <path d='m577.3 0 577.4 1000H0z' fill={color} />
    </svg>
  );
};

export default VercelIcon;
