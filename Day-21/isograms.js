// Codewars > Isograms
function isIsogram(str) {
  //find the length of str
  const length = str.toLowerCase().length;
  //find the length of the set and remove duplicate letters if anny
  const result = new Set(str.toLowerCase());
  //return if the set === str length then true else false
  return result.size === length;
}
console.log(isIsogram("Dermographic"));
