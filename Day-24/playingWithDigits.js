// Codewars > Playing With Digits
function digPow(n, p) {
  //split the number into single digits
  const array = n.toString().split("");
  //reduce each number to the power p
  const numbers = array.reduce((arr, num, index) => {
    arr.push(parseInt(num ** (p + index)));
    return arr;
  }, []);
  //add the numbers
  const sum = numbers.reduce((sum, num) => sum + num, 0);
  //return the added numbers divided by n
  if (sum % n) return -1;
  return sum / n;
}
console.log(digPow(89, 1));
