# Subarray Sum Equals K
* Tricky problem, do not use a sliding window approach since negative numbers are
included
* A very high level hint is that the problem is similar to two sum
* Use Prefix sum and map approach, subtract `sum - k`
*  If `sum - k` is in our map, it means the contigious subarray **will sum up to k**
* If we have seen the subarray before, add the count to the result
​
### Youtube Links
* Links are in order of helpfulness
* [Random YouTube Guy](https://www.youtube.com/watch?v=9fjGM0d1YQQ)
* [Neetcode](https://www.youtube.com/watch?v=fFVZt-6sgyo)
* [Nick White](https://www.youtube.com/watch?v=AmlVSNBHzJg)
* [Techdose](https://www.youtube.com/watch?v=HbbYPQc-Oo4)