// Hackerrank > Save The Prisoner!
function saveThePrisoner(n, m, s) {
  // Write your code here
  // use the number of candies (m) to loop around prisoners
  let array = new Array(n).fill(1);
  let index = 0;
  for (let i = 0; i < m; i++) {
    if (array.indexOf(array[array.length - 1]) === i) {
      array.fill(3, i);
    }
  }
  return array;
}

console.log(saveThePrisoner(4, 6, 2));
