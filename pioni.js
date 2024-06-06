let player1;
let player2;

function createPlayer(x,y,color){
    return{
        x:x,       
        y:y,      
        color:color

    };
}

function drawPlayers(){
   
    fill(player1.color);
    ellipse(player1.x * cellSize + cellSize / 2, player1.y*cellSize+cellSize/2,cellSize/2);
    
    fill(player2.color); 
    ellipse(player2.x * cellSize + cellSize / 2,player2.y*cellSize+cellSize / 2,cellSize / 2);
    
     
}

le 

function reset() {
    player1 = createPlayer(4, 0, [255, 0, 0]);
    player2 = createPlayer(4, 8, [0, 0, 255]);
    currentPlayer = player1;
    walls = [];
    
}