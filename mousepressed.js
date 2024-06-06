function handleMousePressed() {
    if (placingWall) {
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
    } else {
        
        let clickedColumn = floor(mouseX / cellSize);
        let clickedRow = floor(mouseY / cellSize);

        if (currentPlayer === player1) {
            if (isValidMove(player1, player2, clickedColumn, clickedRow)) {
                movePlayer(player1, player2, clickedColumn, clickedRow);
                currentPlayer = player2; 
            }
        } else if (currentPlayer === player2) {
            if (isValidMove(player2, player1, clickedColumn, clickedRow)) {
                movePlayer(player2, player1, clickedColumn, clickedRow);
                currentPlayer = player1;
            }
        }
    }
}

function isValidMove(player, otherPlayer, clickedColumn, clickedRow) {
    
    if ((clickedColumn === player.x && clickedRow === player.y - 1) || 
        (clickedColumn === player.x && clickedRow === player.y + 1) ||
        (clickedColumn === player.x - 1 && clickedRow === player.y) ||
        (clickedColumn === player.x + 1 && clickedRow === player.y)) {
        
        if (!isWallBetween(player.x, player.y, clickedColumn, clickedRow)) {
            return true;
        }
    }
    
   
    if (otherPlayer.x === player.x) {
        if (otherPlayer.y === player.y - 1 && clickedColumn === player.x && clickedRow === player.y - 2) {
            if (!isWallBetween(player.x, player.y - 1, player.x, player.y - 2)) {
                return true;
            }
        } else if (otherPlayer.y === player.y + 1 && clickedColumn === player.x && clickedRow === player.y + 2) {
            if (!isWallBetween(player.x, player.y + 1, player.x, player.y + 2)) {
                return true;
            }
        }
    } else if (otherPlayer.y === player.y) {
        if (otherPlayer.x === player.x - 1 && clickedColumn === player.x - 2 && clickedRow === player.y) {
            if (!isWallBetween(player.x - 1, player.y, player.x - 2, player.y)) {
                return true;
            }
        } else if (otherPlayer.x === player.x + 1 && clickedColumn === player.x + 2 && clickedRow === player.y) {
            if (!isWallBetween(player.x + 1, player.y, player.x + 2, player.y)) {
                return true;
            }
        }
    }

    return false;
}

    function isWallBetween(x1, y1, x2, y2) {
    
    for (let wall of walls) {
        if (wall.horizontal) {
            if (wall.y === y1 && wall.x <= max(x1, x2) && wall.x + 1 >= min(x1, x2)) {
                return true; 
            }
        } else {
            if (wall.x === x1 && wall.y <= max(y1, y2) && wall.y + 1 >= min(y1, y2)) {
                return true; 
            }
        }
    }
    return false;
}

function movePlayer(player, otherPlayer, clickedColumn, clickedRow) {
   
    player.x = clickedColumn;
    player.y = clickedRow;
}


function activateMoveMode() {
    moveMode = true;
    placingWall = false;
}

function activateWallPlacement(orientation) {
    moveMode = false;
    placingWall = true;
    wallOrientation = orientation;
}