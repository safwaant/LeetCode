/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    let l = 0, r = letters.length - 1, mid = 0;
    if(target >= letters[r]) return letters[l];
    while(l <= r) {
        mid = Math.floor((l + r) / 2);
        if(letters[mid] > target) {
            r = mid - 1; 
        } else {
            l = mid + 1;
        }
    }
    return letters[l];
};