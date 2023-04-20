function wordCount(s) {
  const arr = s.split(/[^a-z]/gi).filter((word) => /[a-z]+/gi.test(word));
  return arr.filter((word) => !/\b(a|the|on|at|of|upon|in|as)\b/gi.test(word))
    .length;
}
