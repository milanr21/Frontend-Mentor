import type { SquareProps } from '../types/types';

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button
      onClick={onClick}
      className='w-24 h-24 border cursor-pointer text-black'
    >
      {value}
    </button>
  );
};

export default Square;
