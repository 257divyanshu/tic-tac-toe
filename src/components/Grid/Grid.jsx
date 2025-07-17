import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

function Grid({ numberOfCards = 9 }) {
    let [turn, setTurn] = useState(true); // false -> X true -> O
    function play(){
        setTurn(!turn);
    }
    return (
        <>
            <h1 className="turn-highlight">
                Current Turn : {turn ? "O":"X"}
            </h1>
            <div className="grid">
                {Array(numberOfCards).fill(null).map((elem, idx) => <Card key={idx} onCardClick={play}/>)}
            </div>
        </>
    )
}

export default Grid;