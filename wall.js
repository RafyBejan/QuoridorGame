let walls = [];
let player1Walls = 6;
let player2Walls = 6;

class Wall {
    constructor(x, y, horizontal) {
        this.x = x;
        this.y = y;
        this.horizontal = horizontal;
    }
}

function AreMousePressed() {
    let clickedWallX = floor(mouseX / cellSize);
    let clickedWallY = floor(mouseY / cellSize);

    let horizontalWall = wallOrientation === 'horizontal';

    if (isValidWallPosition(clickedWallX, clickedWallY, horizontalWall)) {
        walls.push(new Wall(clickedWallX, clickedWallY, horizontalWall));

        if (currentPlayer === player1) {
            player1Walls--;
        } else {
            player2Walls--;
        }

        placingWall = false; 
    }
}

function isValidWallPosition(x, y, horizontal) {
    if (horizontal) {
        if (x >= 0 && x < boardSize - 1 && y >= 0 && y < boardSize - 1) {
            for (let wall of walls) {
                if (wall.x === x && wall.y === y && wall.horizontal) {
                    return false;
                }
            }
            return true;
        }
    } else {
        if (x >= 0 && x < boardSize - 1 && y >= 0 && y < boardSize - 2) {
            for (let wall of walls) {
                if (wall.x === x && wall.y === y && !wall.horizontal) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

function drawWalls() {
    for (let wall of walls) {
        let wallX = wall.x * cellSize;
        let wallY = wall.y * cellSize;
        stroke(0);
        fill(100);
        if (wall.horizontal) {
            rect(wallX, wallY, cellSize * 2, cellSize / 4);
        } else {
            rect(wallX, wallY, cellSize / 4, cellSize * 2);
        }
    }
}
