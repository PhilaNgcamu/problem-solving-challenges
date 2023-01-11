// For this challenge you will be manipulating a string using dashes (-).
// have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
function DashInsert(str) {
  //insert dashes between to odd numbers -- if the previous number and the current number is odd, insert a dash between them on a new variable(resuly);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i];
      continue;
    }
    if (Number(str[i]) % 2 !== 0 && Number(str[i - 1]) % 2 !== 0)
      result += "-" + str[i];
    else result += str[i];
  }
  return result;
}

console.log(DashInsert("157967350"));
