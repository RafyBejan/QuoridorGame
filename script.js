function setup(){
    let canvas = createCanvas (600, 600);
canvas.parent('game-board');
           //canvas.center();
// Calcularea dimensiunii unei celule pe baza lățimii canvas-ului și numărului de celule pe tabla de joc
cellSize = width / boardSize;
board = createBoard();
// Inițializarea jucătorului 1 în poziția (4, 0) cu culoarea roșie
player1= createPlayer(4,0,[255,0,0]);
// Inițializarea jucătorului 2 în poziția (4, 8) cu culoarea albastră
player2=createPlayer(4,8,[0,0,255]);
//mousePressed();(e predefinita si nu e obligatoriu sa fie definita in setup )
currentPlayer = player1;
mousePressed = AreMousePressed();




}
function draw() {
    background(220);
    drawBoard();
    drawPlayers();
    drawWalls(); // Apelează funcția pentru a desena zidurile
    // Alte operații de desenare sau actualizare a ecranului...
}
function mousePressed() {
    handleMousePressed();
}


function activateWallPlacement() {
    placingWall = true; // Setăm variabila placingWall la true pentru a activa modul de plasare a zidurilor
}
