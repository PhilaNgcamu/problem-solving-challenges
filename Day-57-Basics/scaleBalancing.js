// For this challenge you will be balancing a scale with weights on it.
/*
have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a common separated string of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6

There will only ever be one unique solution and the list of available weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible.
*/
function scaleBalancing(strArr) {
  // How can I restate the problem?
  // -- Equalise the left and right integer weights by using the least amount of weights from the list and return the weights that balanced the scale

  // What are the inputs?
  // -- String containing to string arrays
  // ---- The first one contains two positive integer weights (left and right) on a scale
  // ---- The second one contains list of available weights as positive integer weights

  // How can we get the output from the inputs?
  // -- Input: ["[5, 9]", "[1, 2, 6, 7]"] --> Output: "2,6"

  // Break the problem down
  // Create an "arr" variable to convert the strArr to an object using map and sort each array in an ascending order.
  const arr = strArr.map((arr) => JSON.parse(arr).sort((a, b) => a - b));

  // Add each available weight to the leftWeight and check if it's equal to the rightWeight OR if leftWeight === rightWeight, if yes the return the string

  const leftWeight = arr[0][0];
  const rightWeight = arr[0][1];
  for (let i = 0; i < arr[1].length; i++) {
    const availableWeight = arr[1][i];
    if (
      availableWeight + leftWeight === rightWeight ||
      availableWeight + rightWeight === leftWeight
    )
      return availableWeight.toString();
    for (let j = i + 1; j < arr[1].length; j++) {
      // Else, Add each available weight + another weight to the leftWeight and to the rightWeight and check if leftWeight === rightWeight, then return the available weights
      const anotherWeight = arr[1][j];
      if (
        availableWeight + anotherWeight + leftWeight === rightWeight ||
        availableWeight + anotherWeight + rightWeight === leftWeight
      ) {
        return `${availableWeight},${anotherWeight}`;
      }
      if (
        anotherWeight + leftWeight === rightWeight + availableWeight ||
        anotherWeight + rightWeight === leftWeight + availableWeight
      ) {
        return `${availableWeight},${anotherWeight}`;
      }
    }
  }
  // Refactor if possible.

  return "not possible";
}
console.log(scaleBalancing(["[5, 9]", "[1, 2, 6, 7]"])); //2,6
console.log(scaleBalancing(["[2, 9]", "[1, 2, 6, 8]"])); //1,8
console.log(scaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"])); //3,6
console.log(scaleBalancing(["[3, 5]", "[1, 2, 6, 7]"])); //2
console.log(scaleBalancing(["[7, 3]", "[1, 4, 6, 7]"])); //4
console.log(scaleBalancing(["[8, 0]", "[1, 4, 2, 4]"])); //4,4
console.log(scaleBalancing(["[2, 20]", "[16, 4, 2, 3]"])); //2,16
console.log(scaleBalancing(["[3, 7]", "[1, 2, 7]"])); //NP
console.log(scaleBalancing(["[4, 10]", "[5, 2, 0, 3]"])); //NP
console.log(scaleBalancing(["[12, 11]", "[7, 4, 0, 4]"])); //NP
console.log(scaleBalancing(["[6, 18]", "[2, 2, 0, 2]"])); //NP
console.log(scaleBalancing(["[2, 18]", "[2, 2, 0, 2]"])); //NP
