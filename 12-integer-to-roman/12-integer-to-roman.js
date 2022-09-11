/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = (num) => {
    const m = {
        "M":1000,
        "CM":900,
        "D":500,
        "CD":400,
        "C":100,
        "XC":90,
        "L":50,
        "XL":40,
        "X":10,
        "IX":9,
        "V":5,
        "IV":4,
        "I":1
    }
    let res = "";
    for(let [letter, val] of Object.entries(m)) {
        const div = Math.floor(num / val);
        if(div) {
           res += letter.repeat(div); 
           num %= val; 
        }
    }
    return res;
};