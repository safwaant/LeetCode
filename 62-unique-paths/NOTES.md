# Grid Traveler
* Use memoization along with DP, top down
* A decision tree with two branches at every node can be created with either a decision to go down or a decision to go right
* Trick here for the memoization is that `row x column` is the same thing as `column x row`, for example 2 x 1 and 1 x 2 give the same result, they are duplicates and must be memoized
* [FreeCodeCamp](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=2323s) --> Watch from 40 minute mark