function setup(){
createCanvas (600, 600);

cellSize = width / boardSize;
board = createBoard();
player1= createPlayer(4,0,[255,0,0]);
player2=createPlayer(4,8,[0,0,255]);
mousePressed();
movePlayer();



}
function draw(){
    
    background(220);
    drawBoard();
    drawPlayers();
   

    
    
   
}
