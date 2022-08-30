# Single Number
* Since all numbers appear twice use an `XOR` operation on the array
* `XOR`ing a number with itself results in 0
* `XOR`ing a number with `0` results in the **original** number
* Since all numbers appear twice except for the answer, they will be cancelled out by `XOR` and turned to `0`
* Finally the result will be `XOR`ed with `0` returning the result
* Think:
*  `[4, 1, 2, 1, 2]` &rarr; 4 ^ 1 ^ 2 ^ 1 ^ 2 &rarr; 4 ^(1 ^ 1 ^ 2 ^ 2) &rarr; 4 ^ 0 &rarr; 4
* [Neetcode](https://www.youtube.com/watch?v=qMPX1AOa83k)
* [Educative](https://www.educative.io/answers/what-is-the-xor-bitwise-operator)