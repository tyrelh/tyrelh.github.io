
p5.disableFriendlyErrors = true;
// colors
var ORANGE_LIGHT = "#F38630";
var ORANGE_DARK = "#F96800";
var BLUE_LIGHT = "#00A4CC";
var BLUE_DARK = "#007CBE";
var PINK_DARK = "#F000D5";

var DOT_SIZE = 8;

var brain, inputs;

var points = []
var training_index = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(20, 22, 25);

    brain = new Perceptron(3);

    for (let i = 0; i < 200; i++) {
        points.push(new Point());
    }

    // inputs = [-1, 0.5];
    // let result = brain.guess(inputs);
    // console.log(result);
}

function draw() {
    background(20, 22, 25);
    stroke(100);
    // line(0,height,width,0);
    let p1 = new Point(-1, f(-1));
    let p2 = new Point(1, f(1));
    line(p1.getXPixel(), p1.getYPixel(), p2.getXPixel(), p2.getYPixel());

    stroke(255);
    let p3 = new Point(-1, brain.guessY(-1));
    let p4 = new Point(1, brain.guessY(1));
    line(p3.getXPixel(), p3.getYPixel(), p4.getXPixel(), p4.getYPixel());

    for (point of points) {
        point.draw();
        let guess = brain.guess([point.getX(), point.getY(), point.getBias()]);
        if (guess != point.getLabel()) {
            fill(ORANGE_DARK);
            noStroke();
            ellipse(point.getXPixel(), point.getYPixel(), DOT_SIZE);
        }
    }

    let training = points[training_index];
    brain.train([training.getX(), training.getY(), training.getBias()], training.getLabel());
    training_index++;
    if (training_index >= points.length) {
        training_index = 0;
    }
}

// function mousePressed() {
//     for (point of points) {
//         brain.train([point.x, point.y], point.label);
//     }
// }