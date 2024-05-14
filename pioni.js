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
function reset(){
    countDown=10;
    computerNumber=Math.floor((Math.random()*501)+1);
}
const resetButton=document.getElementyById('reset-button');
resetButton.addEventListener('click',reset);