function findEvenIndex(arr) {
  //create variables to add sums of left and right
  //use a for loop to loop at the start and end of the array simulteneously
  for (let i = 0; i < arr.length; i++) {
    const leftOfN = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    const rightOfN = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);
    console.log(leftOfN, rightOfN);
    //if the sum at the right === sum at the left, continue to the next loop else return
    //... the index + 1 = N
    if (leftOfN === rightOfN) return i;
  }
  return -1;
}

// 1. How can we restate the problem, in your own words?
//-- find the index/position where traversing both right and left side are equal

// 2. What are the inputs that go into the problem?
//array

// 3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)
//---> array => last position where N of left and right are equal
// 4. Break down the problem (pseudocode)
//use a for loop to loop at the start and end of the array simulteneously
//if the sum at the right === sum at the left, continue to the next loop else return
//... the index + 1 = N
// 5. refactor the solved problem (if possible)
