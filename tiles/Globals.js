
// colors
var ORANGE_LIGHT = "#F38630";
var ORANGE_DARK = "#F96800";
var BLUE_LIGHT = "#00B4CC";
var BLUE_DARK = "#008C9E";

// directions
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

// dimentions
var GAME_BOARD_W = 4;
var GAME_BOARD_H = 4;
var TILE_W = 100;
var TILE_H = 140;
var MAX_X = TILE_W * (GAME_BOARD_W - 1);
var MAX_Y = TILE_H * (GAME_BOARD_H - 1);

// tile physics
var ACC = 10;
var MAX_V = 100;

var MAIN_FONT;

function preload() {
    // Marvin Visions font used under free license
    // https://www.readvisions.com/marvin
    MAIN_FONT = loadFont("static/MarvinVisions-Bold.otf");
}

// basic check for overlap between 2 tiles
function checkOverlap(a, b) {
    if (b.x < a.x + TILE_W && b.x > a.x - TILE_W) {
        console.log("overlap on x");
        if (b.y < a.y + TILE_H && b.y > a.y - TILE_H) {
            console.log("overlap on y");
            return true;} // overlap on y} // overlap on x
    }
    
    return false; // no overlap
}