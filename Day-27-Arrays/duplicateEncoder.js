function duplicateEncode(word) {
  let str = word.toLowerCase();
  // declare a new string for new characters
  let string = "";
  // create an object to store the numbers of ocurrances
  let obj = {};
  // loop over the string.
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  return obj;
  // loop over the object.
  // if the letter === 1 then add "'('" else "')'" in the string variable
  // return the string
}

console.log(duplicateEncode("recede"));
