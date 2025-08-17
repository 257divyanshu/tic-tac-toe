import { useState } from "react";
import isWinner from "../helpers/checkWinner";

export function useMultiPlayerTicTacToe () {
    let [turn, setTurn] = useState(true); // false -> X true -> O
    let [board, setBoard] = useState(Array(9).fill(""));
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
        setBoard(Array(9).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return { board, turn, winner, play, resetGame };
};