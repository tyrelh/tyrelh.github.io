
function Game() {

    this.board = new Board();

    // movement control
    this.slide = function(dir) {
        // console.log(dir);
        this.board.slide(dir);
    }

    this.addTile = function() {
        this.board.addTile();
    }

    this.draw = function() {
        this.board.draw();
    }
    this.update = function() {
        this.board.update();
    }
}

function keyPressed() {
    // console.log(keyCode);
    if (keyCode === UP_ARROW) game.slide(UP);
    else if (keyCode === DOWN_ARROW) game.slide(DOWN);
    else if (keyCode === LEFT_ARROW) game.slide(LEFT);
    else if (keyCode === RIGHT_ARROW) game.slide(RIGHT);
    
    else if (keyCode === 78) { // n key
        game.addTile();
    }
    else if (keyCode === 67) { // c key
        game.board.cheat();
    }
    // if (keyCode === UP_ARROW) game.slide(UP);
    // else if (keyCode === RIGHT_ARROW) game.slide(RIGHT);
    // else if (keyCode === DOWN_ARROW) game.slide(DOWN);
    // else if (keyCode === LEFT_ARROW) game.slide(LEFT);
}