// Codewars > Find the unique number
function findUniq(arr) {
  //create an object to store the number of occurances
  const obj = {};
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //if the number exists in an object increment by 1 else assign it to 1
    if (arr[i] in obj) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  //loop through the object
  console.log(obj);
  for (const num in obj) {
    if (obj[num] === 1) return Number(num);
  }
}
