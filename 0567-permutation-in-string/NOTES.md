# Permutation in String
* Tricky problem uses a sliding window approach and hash table
* Map is used to keep track of which letters are present in each string
* First create hash tables of length 26 (all alphabetical characters)
* Do a frequency count of each hash table until the length of the first string, this will start the calculation of counting matches between the two hash tables
* Go window by window updating the match variable until either no matches or a match of length 26 is found
* [NeetCode](https://www.youtube.com/watch?v=UbyhOgBN834)
* [Discuss](https://leetcode.com/problems/permutation-in-string/discuss/1540759/JavaScript-solution-sliding-window-and-26-char-frequency-array)