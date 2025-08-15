// Define the players for clarity
const AI_PLAYER = 'X';
const HUMAN_PLAYER = 'O';

/**
 * Checks if a player can win or needs to block on the next move.
 * @param {string[]} board - The current board state.
 * @param {string} player - The player to check for ('X' or 'O').
 * @returns {number | null} The index of the winning/blocking move, or null.
 */
function findWinningOrBlockingMove(board, player) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        // Check for two-in-a-row with an empty third spot
        if (board[a] === player && board[b] === player && board[c] === '') return c;
        if (board[a] === player && board[c] === player && board[b] === '') return b;
        if (board[b] === player && board[c] === player && board[a] === '') return a;
    }

    return null; // No winning or blocking move found
}

/**
 * Finds a move for the medium-difficulty bot based on a set of priorities.
 * @param {string[]} board - The array representing the game board.
 * @returns {number} The index of the chosen move.
 */
function findMediumMove(board) {
    // Priority 1: Check if the AI can win on this turn
    const winningMove = findWinningOrBlockingMove(board, AI_PLAYER);
    if (winningMove !== null) {
        return winningMove;
    }

    // Priority 2: Check if the AI needs to block the human player
    const blockingMove = findWinningOrBlockingMove(board, HUMAN_PLAYER);
    if (blockingMove !== null) {
        return blockingMove;
    }

    // Priority 3: If no winning or blocking move, make a random move
    const availableMoves = [];
    board.forEach((square, index) => {
        if (square === "") {
            availableMoves.push(index);
        }
    });

    if (availableMoves.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableMoves.length);
        return availableMoves[randomIndex];
    }

    return -1; // Should not be reached in a normal game
}

export default findMediumMove;