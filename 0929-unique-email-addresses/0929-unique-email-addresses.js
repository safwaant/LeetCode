/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
  let s = new Set();
  for(let i of emails) {
      let email = i.split("@")[0], 
          domain = i.split("@")[1];
      let name = "";
      for(let i = 0; i < email.length; i++) {
         if(email[i] === "+") {
             break;
         } else if(email[i] !== ".") {
             name += email[i];
         }
      }
      s.add(name + "@" + domain)
  } 
  console.log(s)  
  return s.size;  
};