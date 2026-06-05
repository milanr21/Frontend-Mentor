import type { BoardState } from '../types/types';
import Square from './Square';

type BoardProps = {
  board: BoardState;
  onSquareClick: (index: number) => void;
  isGameRunning: boolean;
};

const Board = ({ board, onSquareClick, isGameRunning }: BoardProps) => {
  return (
    <div className='grid grid-cols-3 w-fit mx-auto gap-4'>
      {board.map((cell, index) => (
        <Square
          key={index}
          onClick={() => onSquareClick(index)}
          isGameRunning={isGameRunning}
          value={cell}
        />
      ))}
    </div>
  );
};

export default Board;
