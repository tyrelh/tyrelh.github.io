
function Board() {
    this.grid = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    this.changed = false;

    // add a new tile
    this.addTile = function() {
        let options = [];
        let i, j;
        for (i = 0; i < GAME_BOARD_H; i++) {
            for (j = 0; j < GAME_BOARD_W; j++) {
                if (this.grid[i][j] === 0) {
                    options.push({
                        x: i,
                        y: j
                    });
                }
            }
        }
        if (options.length > 0) {
            let spot = random(options);
            this.grid[spot.x][spot.y] = Math.random() > 0.2 ? 1 : 2;
        }
    }
    this.addTile();

    // slide all rows to default direction
    // default direction is UP
    this.slide = function(dir) {
        
        this.changed = false;

        if (dir === DOWN) this.flipGrid();
        else if (dir === RIGHT) this.grid = this.rotateGrid();
        else if (dir === LEFT) {
            // console.log("LEFT");
            this.grid = this.rotateGrid();
            this.grid = this.rotateGrid();
            this.grid = this.rotateGrid();
        }
        let i; 
        for (i = 0; i < GAME_BOARD_W; i++) {
            this.grid[i] = this.slideRow(this.grid[i]);
            this.combineRow(this.grid[i]);
            this.grid[i] = this.slideRow(this.grid[i]);
        }
        // console.log(this.changed)
        if (this.changed) this.addTile();
        if (dir === DOWN) this.flipGrid();
        else if (dir === RIGHT) {
            // console.log("RIGHT");
            this.grid = this.rotateGrid();
            this.grid = this.rotateGrid();
            this.grid = this.rotateGrid();
        }
        else if (dir === LEFT) this.grid = this.rotateGrid();
    }

    // slide individual row to front
    this.slideRow = function(row) {
        let arr = row.filter(val => val);
        let num_empty = GAME_BOARD_W - arr.length;
        let zeros = Array(num_empty).fill(0);
        let new_arr = arr.concat(zeros);
        let i;
        for (i = 0; i < GAME_BOARD_W; i++) {
            if (row[i] != new_arr[i]) {
                this.changed = true;
            }
        }
        // row = new_arr;
        return new_arr;
    }

    // cobine any numbers in row that should merge after initial slide
    this.combineRow = function(row) {
        let i;
        for (i = 0; i < GAME_BOARD_H; i++) {
            let a = row[i];
            let b = row [i + 1];
            if (a == b) {
                row[i] = a + b;
                row[i + 1] = 0;
                this.changed = true;
            }
        }
    }

    // flip entire grid
    this.flipGrid = function() {
        let i;
        for (i = 0; i < GAME_BOARD_W; i++) {
            this.grid[i].reverse();
        }
    }

    // rotate grid clockwise
    this.rotateGrid = function() {
        let new_grid = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];
        let i, j, k;
        for (i = 0, k = GAME_BOARD_W - 1; i < GAME_BOARD_W; i++, k--) {
            for (j = 0; j < GAME_BOARD_W; j++) {
                new_grid[j][i] = this.grid[k][j];
            }
        } 
        return new_grid;
    }

    // cheat move, for debugging
    this.cheat = function() {
        let i, j;
        for (i = 0; i < GAME_BOARD_W; i++) {
            for (j = 0; j < GAME_BOARD_W; j++) {
                this.grid[i][j] *= 2;
            }
        }
    }

    this.update = function() {

    }
    
    this.draw = function() {
        let i, j;
        for (i = 0; i < GAME_BOARD_H; i++) {
            for (j = 0; j < GAME_BOARD_W; j ++) {
                push();
                    noFill();
                    strokeWeight(2);
                    stroke(10);
                    rect(i * TILE_W, j * TILE_H, TILE_W, TILE_H);
                pop();
            }
        }
        for (i = 0; i < GAME_BOARD_H; i++) {
            for (j = 0; j < GAME_BOARD_W; j ++) {
                let val = this.grid[i][j];
                if (val > 0) {
                    push();
                        noStroke();

                        if (val == 1) {fill(BLUE_DARK)}
                        else if (val == 2) {fill(ORANGE_DARK)}
                        else {fill(180 - val);}
                        rect(i * TILE_W, j * TILE_H, TILE_W, TILE_H, 9);

                        if (val == 1) {fill(BLUE_LIGHT)}
                        else if (val == 2) {fill(ORANGE_LIGHT)}
                        else {fill(220 - val);}
                        rect(i * TILE_W + 1, j * TILE_H, TILE_W - 2, TILE_H - 9, 9);

                        fill(255);
                        textFont(MAIN_FONT);
                        textAlign(CENTER, CENTER)
                        if (val > 100 && val < 1000) {textSize(TILE_W * 0.6);}
                        else if (val > 1000) {textSize(TILE_W * 0.4);}
                        else textSize(TILE_W * 0.8);
                        text(val, (i * TILE_W) + (TILE_W / 2), (j * TILE_H) + (TILE_H / 2) - 18)
                    pop()
                }
            }
        }
    }
}