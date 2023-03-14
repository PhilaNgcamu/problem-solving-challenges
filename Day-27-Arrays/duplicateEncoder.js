function duplicateEncode(word) {
  // declare a new string for new characters
  let string = "";
  // create an object to store the numbers of ocurrances
  let obj = {};
  // loop over the string.
  for (let i = 0; i < word.length; i++) {
    obj[word[i]] = (obj[word[i]] || 0) + 1;
  }
  return obj;
  // if the letter === 1 then add "'('" else "')'" in the string variable
  // return the string
}
