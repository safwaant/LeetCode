/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => {
   let temp = image.reduce((arr, cur) => {
       arr.push(cur.reverse())
       return arr;
   }, [])
   return temp.reduce((arr, cur) => {
      const arr1 = cur.map(i => i === 0 ? 1 : 0); 
      arr.push(arr1);
      return arr; 
   }, []);
};