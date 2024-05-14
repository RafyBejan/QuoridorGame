let boardSize = 9;
let cellSize;
let board ;


function createBoard(){
    let newBoard = [];
    for(let i = 0; i< boardSize; i++){
        let row = [];
        for(let j=0; j< boardSize; j++) {
            row.push(0);
        }
        newBoard.push(row);
    }
    return newBoard;
}
function drawBoard(){
    for(let i = 0; i< boardSize; i++){
        for(let j = 0; j<boardSize; j++){
            let x = i* cellSize;
            let y = j * cellSize;
            stroke('black');
            
            noFill();
            rect (x,y,cellSize,cellSize);
        }
    }
}