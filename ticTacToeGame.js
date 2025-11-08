//Tic-Tac-ToeGame

import React, {useState} from 'react';
import'.App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

const handleClick = (index) => {
  if(board[index] || winner) return;
  const newBoard = [...board];
  newBoard[index] = isXNext ? 'X' : 'O';
  setBoard(newBoard);
  setIsXNext(!isXNext);
  checkWinner(newBoard);
};
  const checkWinner = (board) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
      ];
    for (let line of lines) {
      const [a,b,c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c] {
        setWinner(board[a];
        return;
      }
    }
    if(board.every(cell => cell))
      setWinner('Draw');
  };
  const restGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };
  return(
    <div className = "app">
    <h1> Tic Tac Toe </h1>
  <div className= "board">
  {board.map((cell, index) => (
    <button key= {index} className = "square" onClick = {() => handleClick(index)}>
{cell}
</button>
))}
  </div>
<div className="status">
{winner?(winner==='Draw'?'It\'s a draw!':`Winner:${winner}`):`Next player:${isXNext?'X':'O'}`}
</div>
<button onClick={resetGame}>Reset Game</button>
  </div>
);
}

export default App;
  
