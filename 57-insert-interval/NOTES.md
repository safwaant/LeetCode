# Insert Interval
* Iterate through the list of **sorted** intervals until an insertion point is found for the new interval
* To check if intervals are overlapping here are conditions (from Neetcode video)
*   Is the **end** value of this interval less than the start value of the current interval
*   Is the **start** value of this interval greater than the end value of the current interval
* If **one** of the above are not true the intervals are overlapping, merge them by taking the `min` of the left end and the `max` of the right end
* [Neetcode](https://www.youtube.com/watch?v=A8NUOmlwOlM)
​