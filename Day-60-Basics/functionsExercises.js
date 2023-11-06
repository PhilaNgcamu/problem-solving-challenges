function factorial(input) {
  if (input === 1 || input === 0) return 1;
  return input * factorial(input - 1);
}
// function factorial2(input) {
//   return input * factorial3(input - 1);
// }
// function factorial3(input) {
//   return input * factorial4(input - 1);
// }
// function factorial4(input) {
//   return input * factorial5(input - 1);
// }
// function factorial5(input) {
//   return input * factorial6(input - 1);
// }
// function factorial6(input) {
//   return input * factorial7(input - 1);
// }
// function factorial7(input) {
//   return input * factorial8(input - 1);
// }
// function factorial8(input) {
//   return input * factorial9(input - 1);
// }
// function factorial9(input) {
//   return input * factorial10(input - 1);
// }
// function factorial10(input) {
//   return input;
// }
//console.log(factorial(10));

const numbers = [0, 1, 2, 5, 10]; // output => [0, 1, 8, 125, 10]

function map(arr) {
  console.log(arr);
  const product = arr[0] * arr[0] * arr[0];
  map2(arr.slice(1));
  return [product, map2(arr.slice(1))];
}
function map2(arr) {
  console.log(arr);

  const product = arr[0] * arr[0] * arr[0];
  map3(arr.slice(1));
  return product;
}
function map3(arr) {
  console.log(arr);

  const product = arr[0] * arr[0] * arr[0];
  map4(arr.slice(1));
  return product;
}
function map4(arr) {
  console.log(arr);

  const product = arr[0] * arr[0] * arr[0];
  map5(arr.slice(1));
  return product;
}
function map5(arr) {
  console.log(arr);

  const product = arr[0] * arr[0] * arr[0];
  return product;
}

map(numbers);
