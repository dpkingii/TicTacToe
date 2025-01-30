function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let r = 0; r < rows; r++){
        board[r] = [];
        for (let c = 0; c < columns; c++){
            board[r].push(Cell());
        }
    }

    const getBoard = () => board;

    const makeMove = (player,row,column) => {
        board[row][column].addToken(player);
    }

    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    }

    return {getBoard,makeMove,printBoard};
}

function gameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
){
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];
    
    let activePlayer = players[0]

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player[0] ? player [1] : players[0];
    };
    
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    
}

function player(){

}

function Cell() {
    let value = 0;
  
    // Accept a player's token to change the value of the cell
    const addToken = (player) => {
      value = player;
    };
  
    // How we will retrieve the current value of this cell through closure
    const getValue = () => value;
  
    return {
      addToken,
      getValue
    };
  }