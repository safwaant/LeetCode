/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // Binary search
       let l = 0, r = n, mid = 0;
       while(l < r){
          // use r + l / 2 to calc the mid 
          mid = Math.floor((r + l) / 2); 
          // calling the API will be the bounds check here 
          if(isBadVersion(mid)){
              r = mid
          } else {
              l = mid + 1;
          }
       } 
       return l; 
    };
};