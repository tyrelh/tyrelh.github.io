
function Board() {

    this.tiles = [];
    this.grid = [
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0]        
    ]

    // slide all tiles in given direction
    this.slide = function(dir) {
        let i;
        for (i = 0; i < this.tiles.length; i++) {
            this.tiles[i].slide(dir);
        }
        this.tiles.push(new Tile());
    }

    this.update = function() {
        this.grid = [
            [0, 0, 0, 0], 
            [0, 0, 0, 0], 
            [0, 0, 0, 0], 
            [0, 0, 0, 0]        
        ]
        let i;
        for (i = 0; i < this.tiles.length; i++) {
            this.tiles[i].update();
            let pos = this.tiles[i].getGridPos();
            this.grid[pos.y][pos.x] = this.tiles[i].getValue();
        }
        // this.checkCollisions();
    }

    this.draw = function() {
        let i;
        for (i = 0; i < GAME_BOARD_H; i++) {
            for (let j = 0; j < GAME_BOARD_W; j ++) {
                push();
                    noFill();
                    strokeWeight(2);
                    stroke(10);
                    rect(i * TILE_W, j * TILE_H, TILE_W, TILE_H);
                pop();
            }
        }
        for (i = 0; i < this.tiles.length; i++) {
            this.tiles[i].draw();
        }
    }

    // return a random grid position that us unoccupied by a tile
    this.getRandomEmpty = function() {
        let x = Math.floor(Math.random() * GAME_BOARD_W);
        let y = Math.floor(Math.random() * GAME_BOARD_H);
        while (this.grid[y][x] > 0) {
            x = Math.floor(Math.random() * GAME_BOARD_W);
            y = Math.floor(Math.random() * GAME_BOARD_H);
        }
        return createVector(x, y);
    }

    // // check for colisions between each tile
    this.checkCollisions = function() {
        let i, j;
        for (i = 0; i < this.tiles.length; i++) {
            for (j = i + 1; j < this.tiles.length; j++) {
                this.tiles[i].sprite.collide(this.tiles[j].sprite)
                // let tile_i = this.tiles[i].getPos();
                // let tile_j = this.tiles[j].getPos();
                // if (checkOverlap(tile_i, tile_j)) {
                //     // if (!tile_i.getMerging() && !tile_j.getMerging()) {
                //     //     // if (tile_i.get)
                //     // }
                //     console.log(checkOverlap(tile_i, tile_j));
                //     this.tiles[i].stopMoving();
                // }
            }
        }
    }

    

    // getters
    this.getGrid = function() {return this.grid;}
}