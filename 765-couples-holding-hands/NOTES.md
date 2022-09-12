# Couples Holding Hands
* Use a map to keep track of indexes of couples so a swap can be a completed
* This line here:
```js
let first = row[i],
second = first + (row[i] % 2 === 0 ? 1 : -1);
```
* Is used to find the actual value of the couple that should be next to the current couple
* A swap will be done if the couple is in the incorrect position, then the map will be updated