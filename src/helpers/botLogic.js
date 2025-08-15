import findMediumMove from "./mediumModeBot"; // 1. Import the new medium mode logic

// Define the players for clarity
const AI_PLAYER = 'X';

// --- The Main Exportable Function ---

/**
 * Takes the current board state and returns the new board state
 * after the AI has made its move based on the selected game level.
 * @param {string[]} currentBoard - The array representing the game board.
 * @param {string} gameLevel - The difficulty level ('easy', 'medium', or 'hard').
 * @returns {string[]} The new board array with the AI's move added.
 */
function makeBotMove(currentBoard) {

    // Create a copy to avoid modifying the original board state directly
    const newBoard = [...currentBoard];
    let moveIndex = -1;

    moveIndex = findMediumMove(newBoard);

    // 3. If a valid move was found, update the board
    if (moveIndex !== -1) {
        newBoard[moveIndex] = AI_PLAYER;
    }
    
    // Return the updated board
    return newBoard;
}

export default makeBotMove;