function getCount(str) {
  return str.split("").reduce((count, letter) => {
    if (/[aeiou]/gi.test(letter)) count++;
    return count;
  }, 0);
}
console.log(getCount("should return 5 for 'abracadabra'"));
