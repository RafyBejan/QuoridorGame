let ziduri = [];
let numarMaximZiduri = 10;

function adaugaZid() {
    if (ziduri.length < numarMaximZiduri) {
        let zidNou = { x: mouseX, y: mouseY };
        ziduri.push(zidNou);
    } else {
        console.log("Ai atins numărul maxim de ziduri.");
    }
}

function drawWalls() {
    for (let i = 0; i < ziduri.length; i++) {
        rect(ziduri[i].x, ziduri[i].y, 50, 10);
    }
}
