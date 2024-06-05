
let boardSize = 9;
let cellSize;
let board;

// Constructor pentru obiectul celulă
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
            // Calculează coordonatele colțului stâng-sus al fiecărei celule
            let x = i * cellSize;
            let y = j * cellSize;
            // Creează un nou obiect celulă și adaugă-l în tablă
            let cell = new Cell(x, y, cellSize);
            newBoard.push(cell);
        }
    }
    return newBoard;
}
function drawBoard() {
    for (let i = 0; i < board.length; i++) {
        let cell = board[i];
        // Desenează o linie neumplută pentru a delimita fiecare celulă
        stroke('black');
        noFill();
        rect(cell.x, cell.y, cell.size, cell.size);
    }
}
