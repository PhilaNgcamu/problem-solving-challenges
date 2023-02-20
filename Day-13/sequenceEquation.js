function permutationEquation(p) {
  //let i = number find the number in the array by index i
  //then push the index
  let array = [];
  for (let i = 1; i <= p.length; i++) {
    array.push(p.indexOf(i));
  }
  return array;
}
console.log(permutationEquation([5, 2, 1, 3, 4]));
