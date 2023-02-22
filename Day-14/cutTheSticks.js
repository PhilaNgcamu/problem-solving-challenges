function cutTheSticks(arr) {
  // determine the shortest stick
  let shortest = Math.min(...arr);
  let max = Math.max(...arr);

  //Declare out array
  let a = new Array(arr.length).fill([]);
  a[0] = arr;
  for (let i = 0; i < max; i++) {
    shortest = Math.min(...a[i]);
    for (let j = 0; j < max; j++) {
      a[i + 1].push(arr[j] - shortest);
    }
    return a;
  }
}
console.log(cutTheSticks([1, 2, 3]));
