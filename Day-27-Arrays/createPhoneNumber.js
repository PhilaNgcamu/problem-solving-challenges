// Codewars > Create Phone Numbers
function createPhoneNumber(numbers) {
  let str = numbers.join("");
  //if the string length = 3 then enclone with brackets and then add space
  let s = numbers.join("").replace(/\d{3,3}/, `(${str.slice(0, 3)}) `);
  return s.replace(/\d{4}$/, `-${s.slice(-4)}`);
}
