function mousePressed() {   //functia e predefinita in p5
    let clickedColumn = floor(mouseX / cellSize);
    let clickedRow = floor(mouseY / cellSize); //floor() - returneaza numere intregi

    if (clickedColumn === player1.x && clickedRow === player1.y - 1) {
        movePlayer(player1, "up");
    } else if (clickedColumn === player1.x && clickedRow === player1.y + 1) {
        movePlayer(player1, "down");
    } else if (clickedColumn === player2.x && clickedRow === player2.y - 1) {
        movePlayer(player2, "up");
    } else if (clickedColumn === player2.x && clickedRow === player2.y + 1) {
        movePlayer(player2, "down");
    }
    
    if (clickedColumn === player1.x - 1 && clickedRow === player1.y) {
        movePlayer(player1, "left");
    } else if (clickedColumn === player1.x + 1 && clickedRow === player1.y) {
        movePlayer(player1, "right");
    } else if (clickedColumn === player2.x - 1 && clickedRow === player2.y) {
        movePlayer(player2, "left");
    } else if (clickedColumn === player2.x + 1 && clickedRow === player2.y) {
        movePlayer(player2, "right");
    }
}


function movePlayer(player, direction) {
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




