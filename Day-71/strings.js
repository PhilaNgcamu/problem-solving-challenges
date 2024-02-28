const sentence = "philasande is a devout christian";

// Print name "dechristian" on a new string using .charAt(..)

function print(str, name) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.includes(name.charAt(i))) {
      newStr += name.charAt(i);
    }
  }
  return newStr;
}

console.log(print(sentence, "dechristian"));
