// Hackerrank > Picking Numbers
function pickingNumbers(a) {
  // sort the array to ascending order to easily find the subarray
  let maxCount = 0;
  let array = a.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    //set currentCount to 1 beacuse we are working with an element to be compared with another
    let currentCount = 1;
    for (let j = i + 1; j < array.length; j++) {
      //then if two elements <= 1 then currentCount is incremented by 1 else break
      if (Math.abs(array[j] - array[i]) <= 1) currentCount++;
      else break;
    }
    //If currentCount > maxCount then maxCount = currentCount
    if (currentCount > maxCount) maxCount = currentCount;
  }
  //Return maxCount
  return maxCount;
}
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
