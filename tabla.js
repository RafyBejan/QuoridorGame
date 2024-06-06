let boardSize = 9;
let cellSize;
let board;


function Cell(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.value = 0;
}

function createBoard() {
    let newBoard = [];
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
           
            let x = i * cellSize;
            let y = j * cellSize;
            
            let cell = new Cell(x, y, cellSize);
            newBoard.push(cell);
        }
    }
    return newBoard;
}
function drawBoard() {
    for (let i = 0; i < board.length; i++) {
        let cell = board[i];
        
        stroke('black');
        noFill();
        rect(cell.x, cell.y, cell.size, cell.size);
    }
}
