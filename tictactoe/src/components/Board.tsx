import type { BoardState } from '../types/types';
import Square from './Square';

type BoardProps = {
  board: BoardState;
  onSquareClick: (index: number) => void;
};

const Board = ({ board, onSquareClick }: BoardProps) => {
  return (
    <div className='grid grid-cols-3 w-fit mx-auto gap-4'>
      {board.map((cell, index) => (
        <Square key={index} onClick={() => onSquareClick(index)} value={cell} />
      ))}
    </div>
  );
};

export default Board;
