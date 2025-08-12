// --- Internal Helper Functions for the AI ---

// Define the players for clarity
const AI_PLAYER = 'X';
const HUMAN_PLAYER = 'O';

// Checks if there are any empty squares left on the board.
function isMovesLeft(board) {
    return board.includes("");
}

// Evaluates the board state and returns a score.
// +10 for AI win, -10 for Human win, 0 for a draw or ongoing game.
function evaluate(board) {
    // Winning patterns
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            if (board[a] === AI_PLAYER) return 10;
            if (board[a] === HUMAN_PLAYER) return -10;
        }
    }

    return 0; // No winner
}

// The core recursive minimax function.
function minimax(board, depth, isMaximizingPlayer) {
    const score = evaluate(board);

    // Base cases: if a player has won or it's a draw
    if (score === 10) return score - depth;
    if (score === -10) return score + depth;
    if (!isMovesLeft(board)) return 0;

    if (isMaximizingPlayer) { // AI's turn (wants to maximize score)
        let best = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = AI_PLAYER;
                best = Math.max(best, minimax(board, depth + 1, !isMaximizingPlayer));
                board[i] = ""; // Undo move
            }
        }
        return best;
    } else { // Human's turn (wants to minimize score)
        let best = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = HUMAN_PLAYER;
                best = Math.min(best, minimax(board, depth + 1, !isMaximizingPlayer));
                board[i] = ""; // Undo move
            }
        }
        return best;
    }
}

// Finds the best move for the AI.
function findBestMove(board) {
    let bestVal = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = AI_PLAYER;
            let moveVal = minimax(board, 0, false); // Start minimax
            board[i] = ""; // Undo the move

            if (moveVal > bestVal) {
                bestMove = i;
                bestVal = moveVal;
            }
        }
    }
    return bestMove;
}


// --- The Main Exportable Function ---

/**
 * Takes the current board state and returns the new board state
 * after the AI has made its best move.
 * @param {string[]} currentBoard - The array representing the game board.
 * @returns {string[]} The new board array with the AI's move added.
 */
function makeAiMove(currentBoard) {
    // Create a copy to avoid modifying the original board state directly
    const newBoard = [...currentBoard];

    // Find the best possible move for the AI
    const bestMoveIndex = findBestMove(newBoard);

    // If a valid move is found, update the new board with the AI's move
    if (bestMoveIndex !== -1) {
        newBoard[bestMoveIndex] = AI_PLAYER;
    }

    // Return the updated board
    return newBoard;
}

export default makeAiMove;