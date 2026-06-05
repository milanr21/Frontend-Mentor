import type { BoardState } from '../types/types';
import Square from './Square';

export type BoardProps = {
  board: BoardState;
  onSquareClick: (index: number) => void;
};

const Board = ({ board, onSquareClick }: BoardProps) => {
  return (
    <div className='grid grid-cols-3 w-fit mx-auto'>
      {board.map((cell, index) => (
        <Square key={index} value={cell} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
};

export default Board;
