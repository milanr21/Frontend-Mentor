import type { SquareProps } from '../types/types';

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button
      className='w-24 h-24 border-green-300 text-2xl font-bold border cursor-pointer text-white rounded-4xl'
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
