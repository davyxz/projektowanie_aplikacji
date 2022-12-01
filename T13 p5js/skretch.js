function setup() {
    createCanvas(1550, 700);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(51, 0, 0);
    }
    ellipse(mouseX, mouseY, 100, 100);
    if (mouseIsPressed) {
        fill(0, 0, 204);
    } else {
        fill(204, 0, 0);
    }
    ellipse(mouseX, mouseY, 80, 80);

    if (mouseIsPressed) {
        fill(51, 51, 255);
    } else {
        fill(255, 51, 51);
    }
    ellipse(mouseX, mouseY, 60, 60);

    if (mouseIsPressed) {
        fill(102, 102, 255);
    } else {
        fill(255, 102, 102);
    }
    ellipse(mouseX, mouseY, 40, 40);
    if (mouseIsPressed) {
        fill(204, 204, 255);
    } else {
        fill(255, 204, 204);
    }
    ellipse(mouseX, mouseY, 20, 20);

}