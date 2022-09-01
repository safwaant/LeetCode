# Sort Characters by Frequency
* This problem uses the concept of a heap or PQ that will be implemented `conceptually` in our JS soln
* First create a frequency map of each character
* Next sort this maps keys **based on the frequency** ties in the frequency will be placed next to each other *by default* (this is our "MaxPriorityQueue")
* Iterate and add each character in the sorted keys array to the result, the trick here is to use the `repeat()` method for a JS string which adds the **amount of characters specified in the frequency map to the string**
*  The above part is important since the has to be reconstructed to its original length, no chars missing
* Return the result string