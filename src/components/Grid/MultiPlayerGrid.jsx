import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner";

function Grid({ numberOfCards = 9 }) {
    console.log('grid re-rendered');
    let [turn, setTurn] = useState(true); // false -> X true -> O
    let [board, setBoard] = useState(Array(numberOfCards).fill(""));
    let [checked, setChecked] = useState(0);
    let [winner, setWinner] = useState(null);
    function play(index) {
        setChecked(checked + 1);
        if (turn) {
            board[index] = "O";
        }
        else {
            board[index] = "X";
        };
        const win = isWinner(board, turn ? "O" : "X");
        if (win) {
            setWinner(win);
        };
        setTurn(!turn);
        setBoard([...board]);
    }
    function resetGame() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
        setChecked(0);
    }
    return (
        <div className="grid-wrapper">
            {!winner && checked!=9 && <h1
                className="displayer"
            >
                Current Turn : {turn ? "O" : "X"}
            </h1>}
            {!winner && checked==9 && <h1
                className="displayer"
            >
                It's a draw
            </h1>}
            {winner && <h1
                className="displayer"
                style={{
                    backgroundColor: winner==='O' ? "#f08080" : "#6ca9f0"
                }}
            >
                {winner} is the winner!
            </h1>}
            <div className="grid">
                {board.map((elem, idx) => <Card key={idx} gameEnd={winner ? true : false} player={elem} index={idx} onPlay={play} />)}
            </div>
            {(winner || checked == 9) && (
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