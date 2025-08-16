import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner";
import Button from "../Button/Button";

function MultiPlayerGrid({ numberOfCards = 9 }) {
    // console.log('grid re-rendered');
    let [turn, setTurn] = useState(true); // false -> X true -> O
    let [board, setBoard] = useState(Array(numberOfCards).fill(""));
    let [winner, setWinner] = useState(null);
    function play(index) {
        const newBoard = [...board];
        if (turn) {
            newBoard[index] = "O";
        }
        else {
            newBoard[index] = "X";
        };
        setBoard(newBoard);
        const win = isWinner(newBoard, turn ? "O" : "X");
        if (win) {
            setWinner(win);
        }
        else if (newBoard.every(cell => cell !== "")) {
            setWinner("draw");
        }
        else {
            setTurn(!turn);
        }
    }
    function resetGame() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return (
        <div className="grid-wrapper">
            {!winner && <h1
                className="buttons themed-text"
            >
                Current Turn : {turn ? "O" : "X"}
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
                {winner} is the winner!
            </h1>}
            <div className="grid">
                {board.map((elem, idx) => <Card key={idx} gameEnd={winner ? true : false} player={elem} index={idx} onPlay={play} />)}
            </div>
            {(winner) && (
                <>
                    <Button
                        className="buttons themed-text"
                        onClick={resetGame}
                    >
                        Reset Game
                    </Button>
                    <Button
                        className="buttons themed-text"
                        onClick={() => window.location.reload()}
                    >
                        Take me home
                    </Button>
                </>
            )}
        </div>
    )
}

export default MultiPlayerGrid;