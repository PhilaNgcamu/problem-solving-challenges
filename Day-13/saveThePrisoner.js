// Hackerrank > Save The Prisoner!
function saveThePrisoner(n, m, s) {
  //the warned prisoner is s + m - 1
  //then distrubute the remaining sweets by modulo n
  //I.e sweets % number of prisoners
  let output = (s + m - 1) % n;
  console.log(output);
  if (output === 0) return n;
  return output;
}

console.log(saveThePrisoner(4, 6, 2));
