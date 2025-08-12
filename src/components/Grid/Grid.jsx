import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import "react-toastify/ReactToastify.css";
import isWinner from "../../helpers/checkWinner";
import makeAiMove from "../../helpers/botLogic";

function Grid({ numberOfCards = 9 }) {
    console.log('grid re-rendered');
    let [turn, setTurn] = useState(true); // false -> X true -> O
    let [board, setBoard] = useState(Array(numberOfCards).fill(""));
    let [winner, setWinner] = useState(null);
    useEffect(() => {
        console.log("useEffect callback called")
        if (!turn && !winner) {
            setTimeout(() => {
                const newBoard = makeAiMove(board);
                setBoard(newBoard);
                const win = isWinner(newBoard, 'X');
                if (win) {
                    setWinner(win);
                } else if (newBoard.every(cell => cell !== "")) {
                    setWinner("draw");
                }
                else {
                    setTurn(true);
                };
            }, 1000);
        }
    },[turn,board,winner]);
    function play(index) {
        if (!turn) {
            return;
        };
        const newBoard = [...board];
        newBoard[index] = "O";
        setBoard(newBoard);
        const win = isWinner(newBoard, 'O');
        if (win) {
            setWinner(win);
        } else if (newBoard.every(cell => cell !== "")) {
            setWinner("draw");
        }
        else {
            setTurn(false);
        };
    }
    function resetGame() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return (
        <div className="grid-wrapper">
            {!winner && <h1
                className="displayer"
            >
                Current Turn : {turn ? "O" : "X"}
            </h1>}
            {winner==="draw" && <h1
                className="displayer"
            >
                It's a draw
            </h1>}
            {winner && winner!=="draw" && <h1
                className="displayer"
                style={{
                    backgroundColor: winner === 'O' ? "#f08080" : "#6ca9f0"
                }}
            >
                {winner} is the winner!
            </h1>}
            <div className="grid">
                {board.map((elem, idx) => <Card key={idx} gameEnd={winner ? true : false} player={elem} index={idx} onPlay={play} />)}
            </div>
            {(winner) && (
                <div className="reset-btn-holder">
                    <button
                        className="displayer reset-btn"
                        onClick={resetGame}
                    >
                        Reset Game
                    </button>
                </div>
            )}
        </div>
    )
}

export default Grid;