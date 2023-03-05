// Codewars > Playing With Digits
function digPow(n, p) {
  //split the number into single digits
  const array = n.toString().split("");
  //reduce each number to the power p
  const numbers = array.reduce(
    arr,
    num,
    (index) => {
      arr.push(parseInt(num ** p + index));
      return arr;
    },
    []
  );
  //add the numbers
  //return the added numbers divided by n
}
