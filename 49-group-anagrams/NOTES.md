# Group Anagrams
* Refer to [Valid Anagram](https://leetcode.com/problems/valid-anagram/?adlt=strict&toWww=1&redig=56F9756573344F56825EAB4249186F6B) for how sorting a string proves it is an anagram
* Each string will be added to a map with the key being the sorted string
*   This works since multiple strings sorted should map to the same key, they are thus anagrams
* Return the values of this anagram object