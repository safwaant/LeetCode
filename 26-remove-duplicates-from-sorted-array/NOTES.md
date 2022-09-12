# Remove Duplicates
* Two pointer approach, one fast and one slow pointer (i and j)
* `i` will iterate until it finds a value right next to it that isnt a duplicate
*   Once this happens it will swap the value with j and move j, this way j will always remain on the last non duplicate value