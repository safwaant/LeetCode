/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const output = Array(temperatures.length).fill(0), stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length !== 0 &&
            stack[stack.length - 1][0] < temperatures[i]
        ) {
            const [temp, idx] = stack.pop();
            output[idx] = i - idx;
        }
        stack.push([temperatures[i], i]);
    }

    return output; 
};