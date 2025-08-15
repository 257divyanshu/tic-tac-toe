import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import "react-toastify/ReactToastify.css";
import isWinner from "../../helpers/checkWinner";
import makeBotMove from "../../helpers/botLogic";

function SinglePlayerGrid({ firstMove, numberOfCards = 9 }) {
    // console.log('grid re-rendered');
    let [turn, setTurn] = useState(firstMove === 'O'); // false -> X true -> O
    let [board, setBoard] = useState(Array(numberOfCards).fill(""));
    let [winner, setWinner] = useState(null);
    useEffect(() => {
        // console.log("useEffect callback called")
        if (!turn && !winner) {
            setTimeout(() => {
                const newBoard = makeBotMove(board);
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
    }, [turn, board, winner]);
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
        setTurn(firstMove === 'O');
    }
    return (
        <div className="grid-wrapper">
            {!winner && <h1
                className="buttons themed-text"

            >
                Current Turn : {turn ? "You" : "Bot"}
            </h1>}
            {winner === "draw" && <h1
                className="buttons themed-text"
            >
                It's a draw
            </h1>}
            {winner && winner !== "draw" && <h1
                className="buttons themed-text"
                style={{
                    backgroundColor: winner === 'O' ? "#f08080" : "#6ca9f0"
                }}
            >
                {winner === 'O' ? "You" : "Bot"} won!
            </h1>}
            <div className="grid">
                {board.map((elem, idx) => <Card key={idx} gameEnd={winner ? true : false} player={elem} index={idx} onPlay={play} />)}
            </div>
            {(winner) && (
                <>
                    <button
                        className="buttons themed-text"
                        onClick={resetGame}
                    >
                        Reset Game
                    </button>
                    <button
                        className="buttons themed-text"
                        onClick={() => window.location.reload()}
                    >
                        Take me home
                    </button>
                </>
            )}
        </div>
    )
}

export default SinglePlayerGrid;