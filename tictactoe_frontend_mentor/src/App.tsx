import { useState } from 'react';
import type { BoardState, Player } from './types/types';
import { calculateWinner, isDraw } from './utils/gameLogic';
import Board from './components/Board';

const App = () => {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

  const winner = calculateWinner(board);

  function handleSquareClick(index: number) {
    if (board[index]) return;

    if (winner) return;

    const newBoard = [...board];

    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  let status;

  if (winner) {
    status = `Winner ${winner}`;
  } else if (isDraw(board)) {
    status = `Draw!`;
  } else {
    status = `Current Player ${currentPlayer}`;
  }

  function restartGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
  }

  return (
    <div>
      <h1>{status}</h1>
      <Board board={board} onSquareClick={handleSquareClick} />
      <button onClick={restartGame}>Reset Game</button>
    </div>
  );
};

export default App;
