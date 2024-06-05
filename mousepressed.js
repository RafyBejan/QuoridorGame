function handleMousePressed() {
    let clickedColumn = floor(mouseX / cellSize);
    let clickedRow = floor(mouseY / cellSize);

    if (currentPlayer === player1) {
        if (isValidMove(player1, player2, clickedColumn, clickedRow)) {
            movePlayer(player1, player2, clickedColumn, clickedRow);
            currentPlayer = player2; // Switch turn to player 2
        }
    } else if (currentPlayer === player2) {
        if (isValidMove(player2, player1, clickedColumn, clickedRow)) {
            movePlayer(player2, player1, clickedColumn, clickedRow);
            currentPlayer = player1; // Switch turn to player 1
        }
    }
}

function isValidMove(player, otherPlayer, clickedColumn, clickedRow) {
    // Check if the clicked cell is adjacent to the player's current position
    if ((clickedColumn === player.x && clickedRow === player.y - 1) || 
        (clickedColumn === player.x && clickedRow === player.y + 1) ||
        (clickedColumn === player.x - 1 && clickedRow === player.y) ||
        (clickedColumn === player.x + 1 && clickedRow === player.y)) {
        return true;
    }
    
    // Check if jumping over the other player
    if (otherPlayer.x === player.x) {
        if (otherPlayer.y === player.y - 1 && clickedColumn === player.x && clickedRow === player.y - 2) {
            return true;
        } else if (otherPlayer.y === player.y + 1 && clickedColumn === player.x && clickedRow === player.y + 2) {
            return true;
        }
    } else if (otherPlayer.y === player.y) {
        if (otherPlayer.x === player.x - 1 && clickedColumn === player.x - 2 && clickedRow === player.y) {
            return true;
        } else if (otherPlayer.x === player.x + 1 && clickedColumn === player.x + 2 && clickedRow === player.y) {
            return true;
        }
    }

    return false;
}

function movePlayer(player, otherPlayer, clickedColumn, clickedRow) {
    // Check if the move is to the same cell occupied by the other player
    if (clickedColumn === otherPlayer.x && clickedRow === otherPlayer.y) {
        // Jump logic
        if (clickedColumn === player.x) {
            // Vertical jump
            if (clickedRow === player.y - 1) {
                if (player.y - 2 >= 0 && !(otherPlayer.x === player.x && otherPlayer.y === player.y - 2)) {
                    player.y -= 2;
                }
            } else if (clickedRow === player.y + 1) {
                if (player.y + 2 < boardSize && !(otherPlayer.x === player.x && otherPlayer.y === player.y + 2)) {
                    player.y += 2;
                }
            }
        } else if (clickedRow === player.y) {
            // Horizontal jump
            if (clickedColumn === player.x - 1) {
                if (player.x - 2 >= 0 && !(otherPlayer.x === player.x - 2 && otherPlayer.y === player.y)) {
                    player.x -= 2;
                }
            } else if (clickedColumn === player.x + 1) {
                if (player.x + 2 < boardSize && !(otherPlayer.x === player.x + 2 && otherPlayer.y === player.y)) {
                    player.x += 2;
                }
            }
        }
    } else {
        // Normal move
        player.x = clickedColumn;
        player.y = clickedRow;
    }
}