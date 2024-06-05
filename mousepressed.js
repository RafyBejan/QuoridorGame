function mousePressed() {
    // Calculăm coloana și rândul pe care s-a făcut clic
    let clickedColumn = floor(mouseX / cellSize);
    let clickedRow = floor(mouseY / cellSize);
    // Verificăm dacă s-a făcut clic deasupra sau dedesubtul pionului 1 și mutăm în consecință
    if (clickedColumn === player1.x && clickedRow === player1.y - 1) {
        movePlayer(player1, "up");
    } else if (clickedColumn === player1.x && clickedRow === player1.y + 1) {
        movePlayer(player1, "down");
        // Verificăm dacă s-a făcut clic deasupra sau dedesubtul pionului 2 și mutăm în consecință
    } else if (clickedColumn === player2.x && clickedRow === player2.y - 1) {
        movePlayer(player2, "up");
    } else if (clickedColumn === player2.x && clickedRow === player2.y + 1) {
        movePlayer(player2, "down");
    }
    // Verificăm dacă s-a făcut clic la stânga sau la dreapta pionului 1 și mutăm în consecință

    if (clickedColumn === player1.x - 1 && clickedRow === player1.y) {
        movePlayer(player1, "left");
    } else if (clickedColumn === player1.x + 1 && clickedRow === player1.y) {
        movePlayer(player1, "right");
        // Verificăm dacă s-a făcut clic la stânga sau la dreapta pionului 2 și mutăm în consecință
    } else if (clickedColumn === player2.x - 1 && clickedRow === player2.y) {
        movePlayer(player2, "left");
    } else if (clickedColumn === player2.x + 1 && clickedRow === player2.y) {
        movePlayer(player2, "right");
    }
}


function movePlayer(player, direction) {
    // Verificăm direcția și dacă mutarea este validă
    if (direction === "up" && player.y - 1 >= 0) {
        player.y--;
    } else if (direction === "down" && player.y + 1 < boardSize) {
        player.y++;
    } else if (direction === "left" && player.x - 1 >= 0) { 
        player.x--;
    } else if (direction === "right" && player.x + 1 < boardSize) { 
        player.x++;
    }
}




