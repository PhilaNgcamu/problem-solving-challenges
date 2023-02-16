function migratoryBirds(arr) {
  // Write your code here
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) return arr[i]++;
    else arr[i] = 0;
  }
  // return obj[1]
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
