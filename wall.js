let walls = []; 
let player1Walls = 10; // Numărul de ziduri pentru jucătorul 1
let player2Walls = 10; // Numărul de ziduri pentru jucătorul 2
// Lista de ziduri

class Wall {
    constructor(x, y, horizontal) {
        this.x = x;
        this.y = y;
        this.horizontal = horizontal;
    }
}

function AreMousePressed() {
    if (placingWall) {
        let clickedWallX = floor(mouseX / cellSize);
        let clickedWallY = floor(mouseY / cellSize);
        
        // Verificăm dacă plasarea zidului este orizontală sau verticală
        let horizontalWall = abs(mouseX - (clickedWallX * cellSize)) < abs(mouseY - (clickedWallY * cellSize));
        
        if (isValidWallPosition(clickedWallX, clickedWallY, horizontalWall)) {
            walls.push(new Wall(clickedWallX, clickedWallY, horizontalWall));
            
            // Scădem numărul de ziduri disponibile pentru jucătorul curent
            if (currentPlayer === player1) {
                player1Walls--;
            } else {
                player2Walls--;
            }
            
            placingWall = false; // Dezactivăm modul de plasare a zidurilor după plasarea unui zid
        }
    } else {
        // Gestionăm mișcările jucătorilor...
    }
}

function isValidWallPosition(x, y, horizontal) {
    if (horizontal) {
        if (x >= 0 && x < boardSize - 1 && y >= 0 && y < boardSize - 1) {
            for (let wall of walls) {
                if (wall.x === x && wall.y === y && wall.horizontal) {
                    return false; // Există deja un zid orizontal la acea poziție
                }
            }
            return true; // Poziția este validă pentru plasarea unui zid orizontal
        }
    } else {
        if (x >= 0 && x < boardSize - 1 && y >= 0 && y < boardSize - 2) {
            for (let wall of walls) {
                if (wall.x === x && wall.y === y && !wall.horizontal) {
                    return false; // Există deja un zid vertical la acea poziție
                }
            }
            return true; // Poziția este validă pentru plasarea unui zid vertical
        }
    }
    return false; // Poziția este în afara tablei de joc sau nu este suficient spațiu pentru zid
}


function drawWalls() {
    for (let wall of walls) {
        let wallX = wall.x * cellSize;
        let wallY = wall.y * cellSize;
        stroke(0);
        fill(100); // Culorile zidurilor
        if (wall.horizontal) {
            rect(wallX, wallY, cellSize * 2, cellSize / 4); // Desenare zid orizontal
        } else {
            rect(wallX, wallY, cellSize / 4, cellSize * 2); // Desenare zid vertical
        }
    }
}
