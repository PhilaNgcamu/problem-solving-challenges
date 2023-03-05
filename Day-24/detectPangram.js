function isPangram(string) {
  //Find the length of the string that has been splited withou any whitespace
  const array = string.split("").filter((letter) => letter !== " ");
  //find the length of the removed duplicates if there are there
  const set = new Set(...array);
  //return true if size of the duplicates === length of the array
  return set;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
