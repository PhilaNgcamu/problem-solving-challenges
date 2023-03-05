// Codewars > Your order Please!
function order(words) {
  if (!words.length) return words;
  //if the word has number corresponding to an index place the word with the number at that index in an array
  const list = words.split(" ");
  const array = [];
  for (let i = 0; i < list.length; i++) {
    if (list.includes(i)) array.push(list[i]);
  }
  return array;
}
console.log(order("is2 Thi1s T4est 3a"));
