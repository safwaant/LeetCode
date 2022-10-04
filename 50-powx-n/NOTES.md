# Pow (x, n)
* Trick here is to split the exponent in two every time for example `2^10 = 2^5 * 2^5`
* This is done recursively so that the exponent is split all the way until the `0th` power when it returns 1;
* If the exponent is odd make sure to return the exponent times itself and then split it up
* [NeetCode](https://www.youtube.com/watch?v=g9YQyYi4IQQ)