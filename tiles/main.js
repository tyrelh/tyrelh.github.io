var game;

function setup() {
    // inital canvas setup
    createCanvas(window.innerWidth, window.innerHeight);
    // desired frame rate
    frameRate(60);
    textFont(MAIN_FONT);
    background(20,20,22);
    
    game = new Game();
}


function draw() {
    staticRender();
    game.update();
    game.draw();
}

function staticRender() {
    background(20,20,22);
}