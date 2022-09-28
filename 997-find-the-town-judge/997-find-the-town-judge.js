/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
  let people = Array(n + 1).fill(0);
  for(let i of trust) {
     const [person, tPerson] = [i[0], i[1]];
     people[person]--;
     people[tPerson]++; 
  }  
  for(let i = 1; i < people.length; i++) {
     if(people[i] === n - 1) {
        return i; 
     } 
  }  
  return -1;  
};