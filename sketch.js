const list = []

function setup() {
    createCanvas(720, 480);
    for (let i = 0; i < width / 8; i++) {
        list.push(random(height));
    }
    frameRate(24);
}

function draw() {
    background(127)
    bubbleSort()
    simulateSorting()
}

function bubbleSort() {
    for (j = 0; j < list.length - 1; j++) {
        if (list[j] > list[j + 1]) {
            [list[j], list[j + 1]] = [list[j + 1], list[j]];
        }
    }
}

function simulateSorting() {
    for (let i = 0; i < list.length; i++) {
        stroke(100, 143, 143);
        fill(50);
        rect(i * 8, height, 8, -list[i], 20);
    }
}