
In this example, we generate a random set of points as our training data. We then divide them into two labels, -1 and 1, based on whether they are above or below a given line (currently defined in f(x)).

We create a single perceptron that begins with randomized weights. We then train it on all the points repeatedly comparing its guess (which category it thinks the point is in) to the true label we generated for the point. If the guess is incorrect, we adjust the weights using the learning rate. It will continue this cycle until it has found a line that will cleanly divide the data set with no point incorrectly categorized.

In the visualization, the dimmer line is the line used to classify the points into pink and blue groups. The brighter line represents when the perceptron belives is the correct solution using given its current weights. The orange dots represent points that the perceptron is currently misclassifying.