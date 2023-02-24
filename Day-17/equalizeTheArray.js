function equalizeArray(arr) {
  // let numbers = {}
  let numbers = {};
  // for loop to traverse the array
  for (let i = 0; i < arr.length; i++) {
    // if numbers has a arr[i] property then numbers[arr[i]]++
    if (arr.hasOwnProperty(arr[i])) numbers[arr[i]]++;
    // else numbers[arr[i]] = 0
    else numbers[arr[i]] = 0;
  }
  arr.sort((a, b) => a - b);
  let maxNum = 0;
  let number;
  for (const num in numbers) {
    if (numbers[num] > maxNum) {
      maxNum = numbers[num];
      number = num;
    }
  }
  return (
    arr.length - arr.slice(arr.indexOf(number), arr.lastIndexOf(number) + 1)
  );
}
