
function Point(x, y) {
    if (!x) { this.x = (Math.random() * 2) - 1; }
    else { this.x = x; }
    if (!y) { this.y = (Math.random() * 2) - 1; }
    else { this.y = y; }
    this.x_pixel = map(this.x, -1, 1, 0, width);
    this.y_pixel = map(this.y, -1, 1, height, 0);

    this.bias = 1;

    // just solve y=mx+b
    this.expected_y = f(this.x)//height - ((height * this.x_pixel) / width);

    if (this.expected_y < this.y) { this.label = -1; }
    else { this.label = 1; }

    this.draw = function () {
        noStroke();
        if (this.label == 1) { fill(PINK_DARK); }
        else { fill(BLUE_DARK) }
        ellipse(this.x_pixel, this.y_pixel, DOT_SIZE);
    }

    // getters
    this.getX = function () { return this.x; }
    this.getY = function () { return this.y; }
    this.getXPixel = function () { return this.x_pixel; }
    this.getYPixel = function () { return this.y_pixel; }
    this.getBias = function () { return this.bias; }
    this.getLabel = function () { return this.label; }
}

function f(x) {
    return 1.5 * x - 0.2;
}