# Longest Palindromic Substring
* Best way to think of this problem is "expand from center"
* Consider each character as the center of the palindrome and expand out checking the left and right pointers to be equal
*  Make sure to check for both **odd** and **even** palindromes, since both are possible
* Store the left and right indices and run a slice at the end