function mousePressed() {
    let clickedColumn = floor(mouseX / cellSize);
    let clickedRow = floor(mouseY / cellSize);

    if (clickedColumn === player1.x && clickedRow === player1.y - 1) {
        movePlayer(player1, "up");
    } else if (clickedColumn === player1.x && clickedRow === player1.y + 1) {
        movePlayer(player1, "down");
    } else if (clickedColumn === player2.x && clickedRow === player2.y - 1) {
        movePlayer(player2, "up");
    } else if (clickedColumn === player2.x && clickedRow === player2.y + 1) {
        movePlayer(player2, "down");
    }
}
function movePlayer(player, direction) {
    if (direction === "up" && player.y - 1 >= 0) {
        player.y--;
    } else if (direction === "down" && player.y + 1 < boardSize) {
        player.y++;
    }
}

