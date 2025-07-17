import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

function isWinner(board, symbol) {
    if (
        (board[0] === board[1] && board[1] === board[2] && board[2] === symbol)
        ||
        (board[3] === board[4] && board[4] === board[5] && board[5] === symbol)
        ||
        (board[6] === board[7] && board[7] === board[8] && board[8] === symbol)
        ||
        (board[0] === board[4] && board[4] === board[8] && board[8] === symbol)
        ||
        (board[2] === board[4] && board[4] === board[6] && board[6] === symbol)
        ||
        (board[0] === board[3] && board[3] === board[6] && board[6] === symbol)
        ||
        (board[1] === board[4] && board[4] === board[7] && board[7] === symbol)
        ||
        (board[2] === board[5] && board[5] === board[8] && board[8] === symbol)
    ) {
        return symbol;
    }
    else {
        return null;
    }
}

function Grid({ numberOfCards = 9 }) {
    // console.log('grid re-rendered');
    let [turn, setTurn] = useState(true); // false -> X true -> O
    let [board, setBoard] = useState(Array(numberOfCards).fill(""));
    let [winner, setWinner] = useState(null);
    function play(index) {
        // console.log(index,'clicked');
        if (turn) {
            board[index] = "O";
        }
        else {
            board[index] = "X";
        };
        const win = isWinner(board, turn ? "O" : "X");
        if (win) {
            setWinner(win);
            console.log(win, 'has won the game!');
        };
        setTurn(!turn);
        setBoard([...board]);
    }
    function resetGame(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight">{winner} is the winner</h1>
                    <button
                        className="reset"
                        onClick={resetGame}
                    >Reset Game</button>
                </>
            )}
            <h1 className="turn-highlight">
                Current Turn : {turn ? "O" : "X"}
            </h1>
            <div className="grid">
                {board.map((elem, idx) => <Card key={idx} player={elem} index={idx} onPlay={play} />)}
            </div>
        </div>
    )
}

export default Grid;