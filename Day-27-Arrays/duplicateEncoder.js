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
  // loop over the string.
  for (let i = 0; i < str.length; i++) {
    // if the letter === 1 then add "'('" else "')'" in the string variable
    if (obj[str[i]] === 1) {
      string += "(";
    } else if (obj[str[i]] > 1) string += ")";
  }
  // return the string
  return string;
}

console.log(duplicateEncode("recede"));
