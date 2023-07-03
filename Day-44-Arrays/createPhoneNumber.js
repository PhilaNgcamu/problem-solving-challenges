// Codewars > Create Phone Number

function createPhoneNumber(arr) {
  const copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    if (i === 0) copy.splice(i, 0, "(");
    if (i === 4) copy.splice(i, 0, ") ");
    else if (i === 8) copy.splice(i, 0, "-");
  }
  return copy.join("");
}

function createPhoneNumber(arr) {
  const copy = [...arr];
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < copy.length; i++) {
    format = format.replace("x", arr[i]);
  }
  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
