String.prototype.toAlternatingCase = function () {
  const str = this;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str[i]) {
      res += str[i].toUpperCase();
    } else res += str[i].toLowerCase();
  }
  return res;
};
