// Codewars > Create Phone Number

function createPhoneNumber(arr) {
  const copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    if (i === 3) copy.splice(i, 0, "-");
    else if (i === 7) copy.splice(i, 0, "-");
  }
  return copy.join("");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));