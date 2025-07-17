import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

function Grid({ numberOfCards = 9 }) {
    // console.log('grid re-rendered');
    let [turn, setTurn] = useState(true); // false -> X true -> O
    let [board, setBoard] = useState(Array(numberOfCards).fill(""));
    function play(index){
        // console.log(index,'clicked');
        if(turn){
            board[index] = "O";
        }
        else{
            board[index] = "X";
        }
        setTurn(!turn);
        setBoard([...board]);
        return turn;
    }
    return (
        <>
            <h1 className="turn-highlight">
                Current Turn : {turn ? "O":"X"}
            </h1>
            <div className="grid">
                {board.map((elem, idx) => <Card key={idx} player={elem} index={idx} onPlay={play}/>)}
            </div>
        </>
    )
}

export default Grid;