function permutationEquation(p) {
  //let i = number find the number in the array by index i
  //then push the index
  let array = [];
  for (let i = 1; i < p.length + 1; i++) {
    array.push(p.indexOf(i) + 1);
    //p[p[y]]
  }
  let output = [];
  console.log(p);
  for (let i of array) {
    output.push(p.indexOf(i) + 1);
  }
  return output;
}
console.log(permutationEquation([5, 2, 1, 3, 4]));
