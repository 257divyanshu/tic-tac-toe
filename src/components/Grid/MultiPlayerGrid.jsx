import Card from "../Card/Card";
import "./Grid.css";
import Button from "../Button/Button";
import { useMultiPlayerTicTacToe } from "../../hooks/useMutliPlayerTicTacToe";

function MultiPlayerGrid() {
    // console.log('grid re-rendered');
    const {board, turn, winner, play, resetGame} = useMultiPlayerTicTacToe();
    return (
        <div className="grid-wrapper">
            {!winner && <h1
                className="themed-styling themed-text"
            >
                Current Turn : {turn ? "O" : "X"}
            </h1>}
            {winner === "draw" && <h1
                className="themed-styling themed-text"

            >
                It's a draw
            </h1>}
            {winner && winner !== "draw" && <h1
                className="themed-styling themed-text"
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