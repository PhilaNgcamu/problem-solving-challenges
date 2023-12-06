function simpleArraySum(ar) {
  // Restate the problem?
  // -- Given a array of integers, calculate the total sum of it's elements
  // What are inputs?
  // -- Ar - array of integers
  // How to get output from input?
  // -- Input: [1,2,3,4], output: 10
  // Break down the problem
  // -- Use a variable to add an element to it while looping the array until it stops, that's the total
  // let total = 0;
  // for (let i = 0; i < ar.length; i++) {
  //     total += ar[i]
  // }
  // return total
  // Use other approaches
  // let i = 0;
  // let total = 0;
  // while(i < ar.length) {
  //     total += ar[i]
  //     i++
  // }
  // return total;
  // return ar.reduce((total, integer) => total + integer, 0)
  // let total = 0;
  // for(const integer of ar) {
  //     total += integer;
  // }
  // return total
  let total = 0;
  for (const indexOfArr in ar) {
    total += ar[indexOfArr];
  }
  return total;
}
