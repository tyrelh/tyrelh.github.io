function Perceptron(n) {
    this.weights = [];
    this.num_weights = n;
    this.learning_rate = 0.002;

    // initialize weights randomly
    for (let i = 0; i < this.num_weights; i++) {
        let x = (Math.random() * 2) - 1;
        this.weights.push(x);
    }

    // guess output given inputs
    this.guess = function (inputs) {
        // calculate weighted sum
        let sum = 0;
        for (let i = 0; i < this.num_weights; i++) {
            sum += inputs[i] * this.weights[i];
        }
        // pass to activation function
        let guess = sign(sum);
        return guess;
    }

    this.guessY = function (x) {
        let m = this.weights[0] / this.weights[1];
        let b = this.weights[2] / this.weights[1];
        return -b - m * x;
    }

    // adjust weights based on guess and target
    this.train = function (inputs, target) {
        // get current guess
        let guess = this.guess(inputs);
        // calculate error
        let error = target - guess;
        // adjust weights according to error
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.learning_rate;
        }
        return guess;
    }
}

// activation function
function sign(val) {
    if (val >= 0) { return 1; }
    else { return -1; }
} 