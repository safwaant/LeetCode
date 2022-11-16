/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
  let s = new Set();
  for(let i of emails) {
      let name = i.split("@")[0].split("+")[0].replaceAll(".", ""), 
          domain = i.split("@")[1];
      s.add(name + "@" + domain)
  }  
  return s.size;  
};