import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css";
import isWinner from "../../helpers/checkWinner";

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
            toast.success(`Congratulations ${win}! You have won the game!`);            
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
                {board.map((elem, idx) => <Card key={idx} gameEnd={winner ? true : false} player={elem} index={idx} onPlay={play} />)}
            </div>
            <ToastContainer position="top-center"/>
        </div>
    )
}

export default Grid;