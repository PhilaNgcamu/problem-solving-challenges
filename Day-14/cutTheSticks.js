function cutTheSticks(arr) {
  let array = [...arr];
  //the output should have the length of the sticks cut by the smallest stick size
  const output = [array.length];

  while (array.length > 0) {
    let smallestStick = Math.min(...array);
    let remainingSticks = [];
    for (const stickSize of array) {
      //determine the new size of the stick
      let size = stickSize - smallestStick;
      if (size > 0) {
        remainingSticks.push(size);
      }
    }
    //remaining sticks as the new array
    array = remainingSticks;
    //length of the ramining sticks array
    if (array.length > 0) {
      output.push(array.length);
    }
  }
  return output;
}
console.log(cutTheSticks([1, 2, 3]));
