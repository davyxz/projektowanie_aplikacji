function setup() {
    createCanvas(1350, 600, WEBGL);
}

function draw() {
    background(255,255,0);
    if (mouseIsPressed) {
        fill(0,0,102);
    } else {
        fill(255,225,0);
    }
    ellipsoid(30, 40, 40);
    ellipsoid(mouseX, mouseY, 80, 80);
    fill(255,0,0);
}