/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
  let s = new Set();
  for(let i of emails) {
      let name = i.split("@")[0], 
          domain = i.split("@")[1];
      name = name.replaceAll(".", "").split("+");
      name = name[0];
      s.add(name + "@" + domain)
  }  
  return s.size;  
};