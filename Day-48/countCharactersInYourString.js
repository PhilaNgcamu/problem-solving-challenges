function count(string) {
  const str = string;
  //if the input is an empty string the return "{}"
  if (!str) return {};
  //create an object to store the occurrances of a character

  //loop through the array and increment the occuring character by 1
  return str.split("").reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1;
    return obj;
  }, {});
  //return the object
  // TODO
}
