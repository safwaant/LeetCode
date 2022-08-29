# Max Area of Island
* Very similar logic to `Number of Islands` , use DFS to calculate the area of each island
* Mark each island as visited by turning it to water, as done in `Number of Islands`
* Call DFS for each cell, keeping track of the current maximum
* Return the maximum at the end
* Alternative BFS appreach storing coordinates in a Queue: [Discuss](https://leetcode.com/problems/max-area-of-island/discuss/1949671/Javascript-BFS)
