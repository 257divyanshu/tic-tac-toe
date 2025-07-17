function isWinner(board, symbol) {
    if (
        (board[0] === board[1] && board[1] === board[2] && board[2] === symbol)
        ||
        (board[3] === board[4] && board[4] === board[5] && board[5] === symbol)
        ||
        (board[6] === board[7] && board[7] === board[8] && board[8] === symbol)
        ||
        (board[0] === board[4] && board[4] === board[8] && board[8] === symbol)
        ||
        (board[2] === board[4] && board[4] === board[6] && board[6] === symbol)
        ||
        (board[0] === board[3] && board[3] === board[6] && board[6] === symbol)
        ||
        (board[1] === board[4] && board[4] === board[7] && board[7] === symbol)
        ||
        (board[2] === board[5] && board[5] === board[8] && board[8] === symbol)
    ) {
        return symbol;
    }
    else {
        return null;
    }
}

export default isWinner;