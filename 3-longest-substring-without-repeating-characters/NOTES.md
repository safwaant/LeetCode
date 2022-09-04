# Longest Substring Without Repeating Characters

* Use a sliding window approach, store all letters in a set
* If a letter is already present in the set increment the left pointer
    * Remove it from the set as well
* Repeat and update the maximum string length as you go
