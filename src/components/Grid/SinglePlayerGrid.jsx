import Card from "../Card/Card";
import "./Grid.css";
import { useTicTacToe } from "../../hooks/useTicTacToe";

function SinglePlayerGrid({ firstMove }) {
    // console.log('grid re-rendered');
    const {board, turn, winner, play, resetGame} = useTicTacToe(firstMove);
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