# Ransom Note
* The trick here is to hash the letter to a specific bucket in a 26 character indexed array 
* Once that bucket is filled with the ransom note hashed letter, increment it down by the magazine
* Run a check to ensure all values from the ransom note (which are increment up) are equal to 0 (meaning they have been "removed" by the magazine)
