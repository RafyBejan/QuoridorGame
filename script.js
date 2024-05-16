function setup(){
let canvas = createCanvas (600, 600);
canvas.parent('game-board');//aici am folosit un element parinte
canvas.center(); //am centrat canvasul in elementul parinte
cellSize = width / boardSize;// asa am setat dimensiunea unei celule
canvas.parent('game-board');
cellSize = width / boardSize;
board = createBoard();
player1= createPlayer(4,0,[255,0,0]);
player2=createPlayer(4,8,[0,0,255]);
//mousePressed();(e predefinita si nu e obligatoriu sa fie definita in setup )
movePlayer();

}
function draw(){
    
    background(220);

    drawBoard();
    drawPlayers(); 
    

   // etichete();

}
