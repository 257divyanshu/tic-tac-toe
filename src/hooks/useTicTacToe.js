import { useEffect, useState } from "react";
import makeBotMove from "../helpers/botLogic";
import isWinner from "../helpers/checkWinner";

export function useTicTacToe(firstMove, numberOfCards = 9) {
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

    const play = (index) => {
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
    };

    const resetGame = () => {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(firstMove === 'O');
    };

    return { board, turn, winner, play, resetGame };
}