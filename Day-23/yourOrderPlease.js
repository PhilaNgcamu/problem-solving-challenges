// Codewars > Your order Please!
function order(words) {
  if (!words.length) return words;
  //Sort the words by a digit and return them
  const list = words.split(" ");
  return list
    .sort((currentNumber, nextNumber) => {
      return currentNumber.match(/\d+/) - nextNumber.match(/\d+/);
    })
    .join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));
