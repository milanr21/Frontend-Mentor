import type { SquareProps } from '../types/types';

const Square = ({ value, onClick, isGameRunning }: SquareProps) => {
  console.log('IS GAME RUNNING', isGameRunning);

  return (
    <button
      className={`w-24 h-24 border-green-300 text-2xl font-bold border text-white rounded-4xl 
          ${isGameRunning ? ' cursor-not-allowed' : 'cursor-pointer'}
        
        `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
