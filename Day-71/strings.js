const sentence = "philasane is a vout chrian";

// Print name "dechristian" on a new string using .charAt(..) and return true if sentence contains "dechristian", else false

function print(str, name) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.includes(name.charAt(i))) {
      newStr += name.charAt(i);
    }
  }
  return newStr.length === name.length;
}

console.log(print(sentence, "dechristian"));
