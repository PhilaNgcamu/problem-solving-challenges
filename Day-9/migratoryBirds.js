function migratoryBirds(arr) {
  // Write your code here
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }

  let maxNumber = 0;
  let count = 0;
  for (let number in obj) {
    if (obj[number] > count) {
      count = obj[number];
      maxNumber = number;
    }
  }
  return maxNumber;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
