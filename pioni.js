let player1;
let player2;


function createPlayer(x,y,color){
    return{
        x:x,       //coordonarea jucatorului x
        y:y,      // coordonara jucatorului y
        color:color

    };
}
// Funcția care desenează jucătorii pe canvas
function drawPlayers(){
    // Desenarea jucatorului 1
    fill(player1.color);
    ellipse(player1.x * cellSize + cellSize / 2, player1.y*cellSize+cellSize/2,cellSize/2);
    //Desenarea jucatorului 2
    fill(player2.color); // Stabilim culoarea de umplere pentru jucătorul 2
    ellipse(player2.x * cellSize + cellSize / 2,player2.y*cellSize+cellSize / 2,cellSize / 2);
     // Desenăm un cerc  (jucătorul 2) la poziția (x, y) corespunzătoare, cu diametrul egal cu cellSize
     
}

// Funcția care resetează pozițiile jucătorilor la pozițiile inițiale 

function reset(){  // reset la locul initial
    player1 = createPlayer(4, 0, [255, 0, 0]);
    player2 = createPlayer(4, 8, [0, 0, 255]);

}
    