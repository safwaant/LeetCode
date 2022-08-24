/**
 * @param {string[]} tokens
 * @return {number}
 */
let evalRPN = (tokens) => {
 // map of function to token   
 const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        // use Math.ceil in situations with negative numbers
        let res = a /b;
        if(res < 0) {
            return Math.ceil(res);
        }
        return Math.floor(a / b)
    }
  };

  const stack = [];
    // use stack to evaluate and push onto stack once done
  for (let n of tokens) {
    if (ops[n] != null) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(ops[n](a, b));
    } else {
      stack.push(Number(n));
    }
  }

  return stack[0]; 
};