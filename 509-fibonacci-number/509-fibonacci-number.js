/**
 * @param {number} n
 * @return {number}
 */
let fib = (n, m = {}) => {
    // memoized number
    if(n in m){
        return m[n];
    }
    // base cases
    if(n <= 2){
        return n === 0 ? 0 : 1;
    }
    // recursive call to all other fibonacci numbers
    // with memoization
    m[n] = fib(n - 1, m) + fib(n - 2, m);
    return m[n];
};