// Codewars > Your order Please!
function order(words) {
  if (!words.length) return words;
  //if the word has number corresponding to an index place the word with the number at that index in an array
  const list = words.split(" ");
  const array = [];
  for (let i = 1; i <= list.length; i++) {
    if (list.find((word) => word.includes(i)))
      array[i] = list.find((word) => word.includes(i));
    console.log(list.find((word) => word.includes(i)));
  }
  return array.filter(Boolean).join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));
