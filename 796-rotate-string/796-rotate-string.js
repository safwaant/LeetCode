/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
   let t = s.split("");
   for(let i = 0; i < t.length; i++) {
      const val = t.shift();
      t.push(val);
      if(t.join("") === goal) {
        return true;  
      } 
   } 
   return false; 
};