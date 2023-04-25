import { useState } from "react";
import "./App1.css";
import Box from "./Box";
import BoxGame from "./BoxGame";
function App1() {
  const [show, setShow] = useState(true);
  const handle_click = () => {
    alert("Em đã gặp anh trong buổi chiều tan ca");
  };
  const [check, setCheck] = useState(true);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const checkWinner = () => {
    const WIN_CONDITIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(`winner is ${board[x]}`);
        return board[x];
      }
    }
    return "";
  };

  const handle_play = (index) => {
    if (checkWinner() || board[index] !== "") {
      return;
    }
    let newBoard = [...board];
    newBoard[index] = check ? "X" : "O";
    setBoard(newBoard);
    setCheck(!check);
  };
  const handleResetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    // setCheck(true)
  };
  return (
    <div className="game-board">
      {show ? <Box old={8} name={"Lê Mèo"} handle_click={handle_click} /> : ""}
      <button onClick={() => setShow(!show)}>Toggle mount</button>
      <div className="game">
        {board.map((value, key) => {
          return (
            <BoxGame
              value={board[key]}
              handle_play={handle_play}
              index={key}
              key={key}
              // className={`game-cell ${className}`
              // }
              // className={newBoard== "X" ? "is-x" : newBoard == "O" ? "is-o" : ""}
            />
          );
        })}
      </div>
      {checkWinner() ? <h1>Total: {checkWinner()} Chien thang</h1> : ""}
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
}
export default App1;
