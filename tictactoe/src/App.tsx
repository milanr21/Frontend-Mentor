import { useState } from 'react';
import type { Player, BoardState } from './types/types';
import { calculateWinner, isDraw } from './utils/gameLogic';
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

  // const [status, setStatus] = useState<string>('Next Player: X');

  function handleSquareClick(index: number) {
    if (board[index]) return;

    if (calculateWinner(board)) return;

    const newBoard = [...board];

    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  const winner = calculateWinner(board);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw(board)) {
    status = `Draw!`;
  } else {
    status = `Current Player: ${currentPlayer}`;
  }

  function restartGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
  }

  return (
    <div className='bg-black min-h-screen'>
      <div className='text-center space-y-10'>
        <p className='text-3xl  text-white '>{status}</p>
        <Board board={board} onSquareClick={handleSquareClick} />
        <button
          className='bg-red-400 px-4 text-xl  py-3 text-white rounded-2xl cursor-pointer'
          onClick={restartGame}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default App;
