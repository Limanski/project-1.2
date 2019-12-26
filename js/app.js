var Board;
const Player1 = 'X';
const Puter = 'O';
const isWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell');


startGame = () => {
    document.querySelector(".endGame").style.display = 'none';
    board = Array.from(Array(9).keys());
    for (i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turn, false);
    }
}

turn = (square) => {
    if(typeof board[square.tartget.id] == 'number') {
         
    }
    play(square.target.id, Player1)
    if ( checkTie()) play(bestMove(), Puter);
} 

play = (squareId, player) => {
    board[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWinner(board, player)
    if (gameWon) gameOver(gameWon)
}

checkWinner = (board, player) => {
    let plays = board.reduce((a, e, i) => 
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of isWin.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {index: index, player: player};
            break;
        }
    }
return gameWon;
}

gameOver = (gameWon) => {
    for (let index of isWin [gameWon.index]) {
        document.getElementById(index).style.backgroundColor = gameWon.player == Player1 ? "green" : "orange";
    }
    for (i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click',turn, false)
    }
}

startGame();