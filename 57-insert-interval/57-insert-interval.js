/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
let insert = (intervals, newInterval) => {
    let res = [];
    // algorithm: walks through all cases and merges intervals 
    // as necessary iteratively
    for(let i = 0; i < intervals.length; i++) {
        // get the current interval 
        const cur = intervals[i];
        // case 1: the interval is < current interval
        // and it belongs before the current interval
        if(newInterval[1] < cur[0]) {
            // append interval and all other intervals
            res.push(newInterval, ...intervals.slice(i));
            return res;
        } else if(newInterval[0] > cur[1]) {
            // case 2: interval comes after the current interval
            // but can overlap with intervals further down the list
            res.push(cur);
        } else {
            // case 3: interval overlaps and needs to be merged
            newInterval = [Math.min(cur[0], newInterval[0]), Math.max(cur[1], newInterval[1])];
        }
    }
    // append the merged interval to the end
    // in the case that the merged interval has merged with 
    // the rest of the intervals or belongs at the very end
    res.push(newInterval);
    return res;
};