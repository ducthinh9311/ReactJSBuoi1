import { useState } from "react";
import "./App1.css";
import Box from "./Box";
import BoxGame from "./BoxGame";
function App1() {
  const [show, setShow] = useState(true);
  const handle_click = () => {
    alert("Em đã gặp anh trong buổi chiều tan ca");
  };
  const [check,setCheck]=useState(true)
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const handle_play = (index) => {
    let newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
  };
  return (
    <div>
      {show ? <Box old={8} name={"Lê Mèo"} handle_click={handle_click} /> : ""}
      <button onClick={() => setShow(!show)}>Toggle mount</button>
      <div className="game">
        {board.map((value, key) => {
          return (
            <BoxGame value={board[key]} handle_play={handle_play} index={key} />
          );
        })}
      </div>
    </div>
  );
}
export default App1;
