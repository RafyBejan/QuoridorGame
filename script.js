function setup(){
createCanvas (600, 600);

cellSize = width / boardSize;
board = createBoard();
}
function draw(){
    background(220);
    drawBoard();
}