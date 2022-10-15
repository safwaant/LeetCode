/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    const len1 = s1.length, len2 = s2.length;
    // edge case 
    if (len1 > len2) return false;
    
    // create hashtable for all alpabhet chars
    const count = Array(26).fill(0);
    // initialize the hashtable with values
    for (let i = 0; i < len1; i++) {
        count[s1.charCodeAt(i)-97]++;
        count[s2.charCodeAt(i)-97]--;
    }
    // if all char values are the same (both strings are anagrams) return true 
    if (!count.some(e => e !== 0)) return true;
    
    // go thru the rest of the 
    for (let r = len1; r < len2; r++) {
        let l = r - len1;
        // update the count of each char in the hash table
        count[s2.charCodeAt(r)-97]--;
        count[s2.charCodeAt(l)-97]++;
        // check if all char values are the same
        if (!count.some(e => e !== 0)) {
            return true;
        }
    }
    return false;
};